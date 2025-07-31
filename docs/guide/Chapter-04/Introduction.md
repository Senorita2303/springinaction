# Chapter 4. Working with nonrelational data

This chapter covers

* Persisting data to Cassandra
* Data modeling in Cassandra
* Working with document data in MongoDB

They say that variety is the spice of life.

You probably have a favorite flavor of ice cream. It’s that one flavor that you choose the most often because it satisfies that creamy craving more than any other. But most people, despite having a favorite flavor, try different flavors from time to time to mix things up.

Databases are like ice cream. For decades, the relational database has been the favorite flavor for storing data. But these days, we have more options available than ever before. So-called “NoSQL” databases [https://aws.amazon.com/nosql/](https://aws.amazon.com/nosql/) offer different concepts and structures in which data can be stored. And although the choice may still be somewhat based on taste, some databases are better suited for persisting different kinds of data than others.

Fortunately, Spring Data has you covered for many of the NoSQL databases, including MongoDB, Cassandra, Couchbase, Neo4j, Redis, and many more. And fortunately, the programming model is nearly identical, regardless of which database you choose.

There’s not enough space in this chapter to cover all of the databases that Spring Data supports. But to give you a sample of Spring Data’s other “flavors,” we’ll look at two popular NoSQL databases, Cassandra and MongoDB, and see how to create repositories to persist data to them. Let’s start by looking at how to create Cassandra repositories with Spring Data.



