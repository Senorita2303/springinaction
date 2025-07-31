## 13.1 Working with R2DBC

Reactive Relational Database Connectivity, or R2DBC [https://r2dbc.io/](https://r2dbc.io/) as it is commonly known, is a relatively new option for working with relational data using reactive types. It is effectively a reactive alternative to JDBC, enabling nonblocking persistence against conventional relational databases such as MySQL, PostgreSQL, H2, and Oracle. Because it’s built on Reactive Streams, it is quite different from JDBC and is a separate specification, unrelated to Java SE.

Spring Data R2DBC is a subproject of Spring Data that offers automatic repository support for R2DBC, much the same as Spring Data JDBC, which we looked at in chapter 3. Unlike Spring Data JDBC, however, Spring Data R2DBC doesn’t require strict adherence to domain-driven design concepts. In fact, as you’ll soon see, attempting to persist data through an aggregate root requires a bit more work with Spring Data
R2DBC than with Spring Data JDBC.

To use Spring Data R2DBC, you’ll need to add a starter dependency to your project’s build. For a Maven-built project, the dependency looks like this:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-r2dbc</artifactId>
</dependency>
```

Or, if you’re using the Initializr, select the Spring Data R2DBC check box when creating your project.

You’ll also need a relational database to persist data to, along with a corresponding R2DBC driver. For our project, we’ll be using an in-memory H2 database. Therefore, we need to add two dependencies: the H2 database library itself and the H2 R2DBC driver. The Maven dependencies follow:

```xml
<dependency>
  <groupId>com.h2database</groupId>
  <artifactId>h2</artifactId>
  <scope>runtime</scope>
</dependency>
<dependency>
  <groupId>io.r2dbc</groupId>
  <artifactId>r2dbc-h2</artifactId>
  <scope>runtime</scope>
</dependency>
```

If you’re using a different database, then you’ll need to add the corresponding R2BDC driver dependency for the database of your choice.

Now that the dependencies are in place, let’s see how Spring Data R2DBC works. Let’s start by defining the domain entities.
