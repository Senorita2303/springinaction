## 4.1 Working with Cassandra Repository

Cassandra is a distributed, high-performance, always available, eventually consistent, partitioned-column-store, NoSQL database.

That’s a mouthful of adjectives to describe a database, but each one accurately speaks to the power of working with Cassandra. To put it in simpler terms, Cassandra deals in rows of data written to tables, which are partitioned across one-to-many distributed nodes. No single node carries all the data, but any given row may be replicated across multiple nodes, thus eliminating any single point of failure.

Spring Data Cassandra provides automatic repository support for the Cassandra database that’s quite similar to—and yet quite different from—what’s offered by Spring Data JPA for relational databases. In addition, Spring Data Cassandra offers annotations for mapping application domain types to the backing database structures.

Before we explore Cassandra any further, it’s important to understand that although Cassandra shares many concepts similar to relational databases like Oracle and SQL Server, Cassandra isn’t a relational database and is in many ways quite a different beast. I’ll explain the idiosyncrasies of Cassandra as they pertain to working with Spring Data. But I encourage you to read Cassandra’s own documentation [http://cassandra.apache.org/doc/latest/](http://cassandra.apache.org/doc/latest/) for a thorough understanding of what makes it tick.

Let’s get started by enabling Spring Data Cassandra in the Taco Cloud project.


