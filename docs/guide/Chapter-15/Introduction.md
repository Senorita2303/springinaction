# Chapter 15. Working with Spring Boot Actuator

This chapter covers

* Enabling Actuator in Spring Boot projects
* Exploring Actuator endpoints
* Customizing Actuator
* Securing Actuator

Have you ever tried to guess what’s inside a wrapped gift? You shake it, weigh it, and measure it. And you might even have a solid idea as to what’s inside. But until you open it up, there’s no way of knowing for sure.

A running application is kind of like a wrapped gift. You can poke at it and make reasonable guesses as to what’s going on under the covers. But how can you know for sure? If only there were some way that you could peek inside a running application, see how it’s behaving, check on its health, and maybe even trigger operations that influence how it runs!

In this chapter, we’re going to explore Spring Boot Actuator. Actuator offers production-ready features such as monitoring and metrics to Spring Boot applications. Actuator’s features are provided by way of several endpoints, which are made available over HTTP as well as through JMX MBeans. This chapter focuses primarily on HTTP endpoints, saving JMX endpoints for chapter 18.

