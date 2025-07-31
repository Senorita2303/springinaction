## 6.1 Fine-tuning autoconfiguration

Before we dive in too deeply with configuration properties, it’s important to establish the following different (but related) kinds of configurations in Spring:

* _Bean wiring_ — Configuration that declares application components to be created as beans in the Spring application context and how they should be injected into each other
* _Property injection_ — Configuration that sets values on beans in the Spring application context

In Spring’s XML and Java configuration, these two types of configurations are often declared explicitly in the same place. In Java configuration, a `@Bean`-annotated method is likely to both instantiate a bean and then set values to its properties. For example, consider the following `@Bean` method that declares a `DataSource` for an embedded H2 database:

```java
@Bean
public DataSource dataSource() {
  return new EmbeddedDatabaseBuilder()
    .setType(H2)
    .addScript("taco_schema.sql")
    .addScripts("user_data.sql", "ingredient_data.sql")
    .build();
}
```

Here the `addScript()` and `addScripts()` methods set some `String` properties with the name of SQL scripts that should be applied to the database once the data source is ready. Whereas this is how you might configure a `DataSource` bean if you aren’t using Spring Boot, autoconfiguration makes this method completely unnecessary.

If the H2 dependency is available in the runtime classpath, then Spring Boot automatically creates in the Spring application context an appropriate `DataSource` bean, which applies the SQL scripts schema.sql and data.sql.

But what if you want to name the SQL scripts something else? Or what if you need to specify more than two SQL scripts? That’s where configuration properties come in. But before you can start using configuration properties, you need to understand where those properties come from.


