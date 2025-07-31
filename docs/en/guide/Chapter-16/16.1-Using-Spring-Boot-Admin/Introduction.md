## 16.1 Using SpringBoot Admin

I’ve been asked several times if it’d make sense and, if so, how hard it’d be to develop a web application that consumes Actuator endpoints and serves them up in an easy-toview UI. I respond that it’s just a REST API, and, therefore, anything is possible. But why bother creating your own UI for the Actuator when the good folks at codecentric AG [https://www.codecentric.de/](https://www.codecentric.de/), a software and consulting company based in Germany, have already done the work for you?

Spring Boot Admin is an administrative frontend web application that makes Actuator endpoints more consumable by humans. It’s split into two primary components: the Spring Boot Admin server and its clients. The Admin server collects and displays Actuator data that’s fed to it from one or more Spring Boot applications, which are identified as Spring Boot Admin clients, as illustrated in figure 16.1.

![](../../assets/16.1.png)

**Figure 16.1 The Spring Boot Admin server consumes Actuator endpoints from one or more Spring Boot applications and presents the data in a web-based UI.** <br/>

You’ll need to register each of your applications with the Spring Boot Admin server, including the Taco Cloud application. But first, you’ll set up the Spring Boot Admin server to receive each client’s Actuator information.
