# Chapter 13. Persisting data reactively

This chapter covers

* Reactive relational persistence with R2DBC
* Defining reactive repositories for MongoDB and Cassandra
* Testing reactive repositories

If we’ve learned one thing from science fiction, it’s that if you want to improve upon past experiences, all you need is a little time travel. It worked in Back to the Future, several episodes of various Star Trek shows, _Avengers: Endgame, and Stephen King’s 11/22/63_. (OK, well maybe that last one didn’t turn out better. But you get the idea.)

In this chapter, we’re going to rewind back to chapters 3 and 4, revisiting the repositories we created for relational databases, MongoDB, and Cassandra. This time, we’re going to improve on them by taking advantage of some of Spring Data’s reactive repository support, allowing us to work with those repositories in a nonblocking fashion.

Let’s start by looking at Spring Data R2DBC, a reactive alternative to Spring Data JDBC for persistence to relational databases.
