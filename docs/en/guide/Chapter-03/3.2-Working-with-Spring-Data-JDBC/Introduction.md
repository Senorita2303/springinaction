### 3.2 Working with Spring Data JDBC

The Spring Data project is a rather large umbrella project comprising several subprojects, most of which are focused on data persistence with a variety of different database types. A few of the most popular Spring Data projects include these:

* _Spring Data JDBC_ —— JDBC persistence against a relational database
* _Spring Data JPA_ —— JPA persistence against a relational database
* _Spring Data MongoDB_ —— Persistence to a Mongo document database
* _Spring Data Neo4j_ —— Persistence to a Neo4j graph database
* _Spring Data Redis_ —— Persistence to a Redis key-value store
* _Spring Data Cassandra_ —— Persistence to a Cassandra column store database

One of the most interesting and useful features provided by Spring Data for all of these projects is the ability to automatically create repositories, based on a repository specification interface. Consequently, persistence with Spring Data projects has little or no persistence logic and involves writing only one or more repository interfaces.

Let’s see how to apply Spring Data JDBC to our project to simplify data persistence with JDBC. First, you’ll need to add Spring Data JDBC to the project build.