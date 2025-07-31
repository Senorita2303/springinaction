# Chapter 16. Administering Spring

This chapter covers

* Setting up Spring Boot Admin
* Registering client applications
* Working with Actuator endpoints
* Securing the Admin server

A picture is worth a thousand words (or so they say), and for many application users, a user-friendly web application is worth a thousand API calls. Don’t get me wrong, I’m a command-line junkie and a big fan of using `curl` and HTTPie to consume REST APIs. But sometimes, manually typing the command line to invoke a REST endpoint and then visually inspecting the results can be less efficient than simply clicking a link and reading the results in a web browser

In the previous chapter, we explored all of the HTTP endpoints exposed by the Spring Boot Actuator. As HTTP endpoints that return JSON responses, there’s no limit to how those can be used. In this chapter, we’ll see how to put a frontend user interface (UI) on top of the Actuator to make it easier to use, as well as capture live data that would be difficult to consume from Actuator directly.
