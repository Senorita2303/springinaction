# Chapter 3. Working with data

This chapter covers
* Using Spring's JdbcTemplate
* Creating Spring Data JDBC repositories
* Declaring JPA repositories with Spring Data

Most applications offer more than just a pretty face. Although the user interface may provide interaction with an application, it’s the data it presents and stores that
separates applications from static websites.

In the Taco Cloud application, you need to be able to maintain information about ingredients, tacos, and orders. Without a database to store this information, the application wouldn’t be able to progress much further than what you developed in chapter 2.

In this chapter, you’re going to add data persistence to the Taco Cloud application. You’ll start by using Spring support for JDBC (Java Database Connectivity) to eliminate boilerplate code. Then you’ll rework the data repositories to work with JPA (Java Persistence API), eliminating even more code.


