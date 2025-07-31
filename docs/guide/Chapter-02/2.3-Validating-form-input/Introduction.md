## 2.3 Validating form input

When designing a new taco creation, what if the user selects no ingredients or fails to specify a name for their creation? When submitting the order, what if the user fails to fill in the required address fields? Or what if they enter a value into the credit card field that isn’t even a valid credit card number?

As things stand now, nothing will stop the user from creating a taco without any ingredients or with an empty delivery address, or even submitting the lyrics to their favorite song as the credit card number. That’s because you haven’t yet specified how those fields should be validated.

One way to perform form validation is to litter the `processTaco()` and `processOrder()` methods with a bunch of `if/then` blocks, checking each and every field to ensure that it meets the appropriate validation rules. But that would be cumbersome and difficult to read and debug.

Fortunately, Spring supports the JavaBean Validation API (also known as JSR 303; [https://jcp.org/en/jsr/detail?id=303](https://jcp.org/en/jsr/detail?id=303)). This makes it easy to declare validation rules as opposed to explicitly writing declaration logic in your application code. 

To apply validation in Spring MVC, you need to

* Add the Spring Validation starter to the build.
* Declare validation rules on the class that is to be validated: specifically, the `Taco` class.
* Specify that validation should be performed in the controller methods that require validation: specifically, the `DesignTacoController’s processTaco()` method and the `OrderController’s processOrder()` method.
* Modify the form views to display validation errors.

The Validation API offers several annotations that can be placed on properties of domain objects to declare validation rules. Hibernate’s implementation of the Validation API adds even more validation annotations. Both can be added to a project by adding the Spring Validation starter to the build. The Validation check box under I/O in the Spring Boot Starter wizard will get the job done, but if you prefer manually editing your build, the following entry in the Maven pom.xml file will do the trick:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

Or if you’re using Gradle, then this is the dependency you’ll need:

```text
implementation 'org.springframework.boot:spring-boot-starter-validation'
```

>Is the validation starter required?
>
>In earlier versions of Spring Boot, the Spring Validation starter was automatically included with the web starter. Starting with Spring Boot 2.3.0, you’ll need to explicitly add it to your build if you intend to apply validation.

With the validation starter in place, let’s see how you can apply a few annotations to validate a submitted `Taco` or `TacoOrder`.


