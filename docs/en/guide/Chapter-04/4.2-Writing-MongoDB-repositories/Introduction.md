## 4.2 Writing MongoDB repositories

MongoDB is a another well-known NoSQL database. Whereas Cassandra is a columnstore database, MongoDB is considered a document database. More specifically, MongoDB stores documents in BSON (Binary JSON) format, which can be queried for and retrieved in a way that’s roughly similar to how you might query for data in any other database.

As with Cassandra, it’s important to understand that MongoDB isn’t a relational database. The way you manage your MongoDB server cluster, as well as how you model your data, requires a different mindset than when working with other kinds of databases.

That said, working with MongoDB and Spring Data isn’t dramatically different from how you might use Spring Data for working with JPA or Cassandra. You’ll annotate your domain classes with annotations that map the domain type to a document structure. And you’ll write repository interfaces that very much follow the same programming model as those you’ve seen for JPA and Cassandra. Before you can do any of that, though, you must enable Spring Data MongoDB in your project.
