## 5.2 Configuring authentication

Over the years, several ways of configuring Spring Security have existed, including lengthy XML configuration. Fortunately, several recent versions of Spring Security have supported Java configuration, which is much easier to read and write.

Before this chapter is finished, you’ll have configured all of your Taco Cloud security needs in a Java configuration for Spring Security. But to get started, you’ll ease into it by writing the configuration class shown in the following listing.

**Listing 5.1 A barebones configuration class for Sprin Security**
```java
package tacos.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {

  @Bean
  public PasswordEncoder passwordEncoder() {
  return new BCryptPasswordEncoder();
  }

}
```

What does this barebones security configuration do for you? Not much, actually. The main thing it does is declare a `PasswordEncoder` bean, which we’ll use both when creating new users and when authenticating users at login. In this case, we’re using `BCryptPasswordEncoder`, one of a handful of password encoders provided by Spring Security, including the following

* _BCryptPasswordEncoder_ —— Applies bcrypt strong hashing encryption
* _NoOpPasswordEncoder_ —— Applies no encoding
* _Pbkdf2PasswordEncoder_ —— Applies PBKDF2 encryption
* _SCryptPasswordEncoder_ —— Applies Scrypt hashing encryption
* _StandardPasswordEncoder_ —— Applies SHA-256 hashing encryption

No matter which password encoder you use, it’s important to understand that the password in the database is never decoded. Instead, the password that the user enters at login is encoded using the same algorithm, and it’s then compared with the encoded password in the database. That comparison is performed in the `PasswordEncoder’s matches()` method.

In addition to the password encoder, we’ll fill in this configuration class with more beans to define the specifics of security for our application. We’ll start by configuring a user store that can handle more than one user.

To configure a user store for authentication purposes, you’ll need to declare a `UserDetailsService` bean. The `UserDetailsService` interface is relatively simple, including only one method that must be implemented. Here’s what `UserDetailsService` looks like:

```java
public interface UserDetailsService {

  UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

}

```

The `loadUserByUsername()` method accepts a username and uses it to look up a `UserDetails` object. If no user can be found for the given username, then it will throw a `UsernameNotFoundException`.

As it turns out, Spring Security offers several out-of-the-box implementations of `UserDetailsService`, including the following:

* An in-memory user store
* A JDBC user store
* An LDAP user store

Or, you can also create your own implementation to suit your application’s specific security needs.

To get started, let’s try out the in-memory implementation of `UserDetailsService`.


