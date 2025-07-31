## 13.2 Persisting document data reactively with MongoDB

In chapter 4, we used Spring Data MongoDB to define document-based persistence against a MongoDB document database. In this section, we’re going to revisit MongoDB persistence using Spring Data’s reactive support for MongoDB.

To get started, you’ll need to create a project with the Spring Data Reactive MongoDB starter. That is, in fact, the name of the check box to select when creating the project with the Inita

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-mongodb-reactive</artifactId>
</dependency>
```

In chapter 4, we also leaned on the Flapdoodle embedded MongoDB database for testing. Unfortunately, Flapdoodle doesn’t behave quite as well when fronted with reactive repositories. When it comes to running the tests, you’ll need to have an actual Mongo database running and listening on port 27017.

Now we’re ready to start writing code for reactive MongoDB persistence. We’ll start with the document types that make up our domain.
