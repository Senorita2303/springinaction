## 6.3 Configuring with profiles

When applications are deployed to different runtime environments, usually some configuration details differ. The details of a database connection, for instance, are likely not the same in a development environment as in a quality assurance environment, and they are different still in a production environment. One way to configure properties uniquely in one environment over another is to use environment variables to specify configuration properties instead of defining them in application.properties and application.yml.

For instance, during development you can lean on the autoconfigured embedded H2 database. But in production, you can set database configuration properties as environment variables like this:

```bash
% export SPRING_DATASOURCE_URL=jdbc:mysql://localhost/tacocloud
% export SPRING_DATASOURCE_USERNAME=tacouser
% export SPRING_DATASOURCE_PASSWORD=tacopassword
```

Although this will work, it’s somewhat cumbersome to specify more than one or two configuration properties as environment variables. Moreover, there’s no good way to track changes to environment variables or to easily roll back changes if there’s a mistake.

Instead, I prefer to take advantage of Spring profiles. Profiles are a type of conditional configuration where different beans, configuration classes, and configuration properties are applied or ignored based on what profiles are active at run time.

For instance, let’s say that for development and debugging purposes, you want to use the embedded H2 database, and you want the logging levels for the Taco Cloud code to be set to `DEBUG`. But in production, you want to use an external MySQL database and set the logging levels to `WARN`. In the development situation, it’s easy enough to not set any data source properties and get the autoconfigured H2 database. And as for debug-level logging, you can set the `logging.level.tacos` property for the tacos base package to `DEBUG` in application.yml as follows:

```yaml
logging:
  level:
    tacos: DEBUG
```

This is precisely what you need for development purposes. But if you were to deploy this application in a production setting with no further changes to application.yml, you’d still have debug logging for the tacos package and an embedded H2 database. What you need is to define a profile with properties suited for production.


