## 1.2 Initializing a Spring application

Through the course of this book, you’ll create Taco Cloud, an online application for ordering the most wonderful food created by man—tacos. Of course, you’ll use Spring, Spring Boot, and a variety of related libraries and frameworks to achieve
this goal.

You’ll find several options for initializing a Spring application. Although I could walk you through the steps of manually creating a project directory structure and defining a build specification, that’s wasted time—time better spent writing application code. Therefore, you’re going to lean on the Spring Initializr to bootstrap your application.

The Spring Initializr is both a browser-based web application and a REST API, which can produce a skeleton Spring project structure that you can flesh out with whatever functionality you want. Several ways to use Spring Initializr follow:

* From the web application at [http://start.spring.io](http://start.spring.io)
* From the command line using the `curl` command
* From the command line using the Spring Boot command-line interface
* When creating a new project with Spring Tool Suite
* When creating a new project with IntelliJ IDEA
* When creating a new project with Apache NetBeans

Rather than spend several pages of this chapter talking about each one of these options, I’ve collected those details in the appendix. In this chapter, and throughout this book, I’ll show you how to create a new project using my favorite option: Spring Initializr support in Spring Tool Suite.

As its name suggests, Spring Tool Suite is a fantastic Spring development environment that comes in the form of extensions for Eclipse, Visual Studio Code, or the Theia IDE. You can download ready-to-run binaries of Spring Tool Suite at [https://spring.io/tools](https://spring.io/tools). Spring Tool Suite offers a handy Spring Boot Dashboard feature that
makes it easy to start, restart, and stop Spring Boot applications from the IDE.

If you're not a Spring Tool Suite user, that's fine; we can still be friends. Hop over to the appendix and substitute the Initializr option that suits you best for the instructions in the following sections. But know that throughout this book, I may occasionally reference features specific to Spring Tool Suite, such as the Spring Boot Dashboard. If you're not using Spring Tool Suite, you'll need to adapt those instructions to fit your IDE.

