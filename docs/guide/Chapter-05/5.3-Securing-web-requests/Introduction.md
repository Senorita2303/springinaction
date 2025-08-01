## 5.3 Securing web requests

The security requirements for Taco Cloud should require that a user be authenticated before designing tacos or placing orders. But the home page, login page, and registration page should be available to unauthenticated users.

To configure these security rules, we’ll need to declare a `SecurityFilterChain` bean. The following `@Bean` method shows a minimal (but not useful) `SecurityFilterChain` bean declaration:

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  return http.build();
}
```

The `filterChain()` method accepts an `HttpSecurity` object, which acts as a builder that can be used to configure how security is handled at the web level. Once security configuration is set up via the `HttpSecurity` object, a call to `build()` will create a `SecurityFilterChain` that is returned from the bean method.

The following are among the many things you can configure with HttpSecurity:

* Requiring that certain security conditions be met before allowing a request to
be served
* Configuring a custom login page
* Enabling users to log out of the application
* Configuring cross-site request forgery protecti

Intercepting requests to ensure that the user has proper authority is one of the most common things you’ll configure `HttpSecurity` to do. Let’s ensure that your Taco Cloud customers meet those requirements.
