## 12.5 Securing reactive web APIs

For as long as there has been Spring Security (and even before that, when it was known as Acegi Security), its web security model has been built around servlet filters. After all, it just makes sense. If you need to intercept a request bound for a servletbased web framework to ensure that the requester has proper authority, a servlet filter is an obvious choice. But Spring WebFlux puts a kink into that approach.

When writing a web application with Spring WebFlux, there’s no guarantee that servlets are even involved. In fact, a reactive web application is debatably more likely to be built on Netty or some other nonservlet server. Does this mean that the servlet filter–based Spring Security can’t be used to secure Spring WebFlux applications?

It’s true that using servlet filters isn’t an option when securing a Spring WebFlux application. But Spring Security is still up to the task. Starting with version 5.0.0, you can use Spring Security to secure both servlet-based Spring MVC and reactive Spring WebFlux applications. It does this using Spring’s `WebFilter`, a Spring-specific analog to servlet filters that doesn’t demand dependence on the servlet API.

What’s even more remarkable, though, is that the configuration model for reactive Spring Security isn’t much different from what you saw in chapter 4. In fact, unlike Spring WebFlux, which has a separate dependency from Spring MVC, Spring Security comes as the same Spring Boot security starter, regardless of whether you intend to use it to secure a Spring MVC web application or one written with Spring WebFlux. As a reminder, here’s what the security starter looks like:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

That said, a few small differences exist between Spring Security’s reactive and nonreactive configuration models. It’s worth taking a quick look at how the two configuration models compare.


