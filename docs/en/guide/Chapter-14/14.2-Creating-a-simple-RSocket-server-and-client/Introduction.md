## 14.2 Creating a simple RSocket server and client

Spring offers incredible support for messaging with RSocket, including all four communication models. To get started with RSocket, you’ll need to add the Spring Boot RSocket starter to your project’s build. In a Maven POM file, the RSocket starter dependency looks like this the following.

**Listing 14.1 Spring Boot’s RSocket starter dependency**
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-rsocket</artifactId>
</dependency>
```

This same dependency is needed for both the server and client applications involved in RSocket communication.

>NOTE When choosing dependencies from the Spring Initializr, you might see a similarly named WebSocket dependency. Although RSocket and WebSocket have similar names and although you can use WebSocket as a transport for RSocket (and we’ll cover that later in this chapter), you do not need to select the WebSocket dependency when working with RSocket.

Next, you’ll need to decide which communication model is best for your application. There’s no clear answer that fits every situation, so you’ll want to weigh the choice against the desired communication behavior of your application. However, as you’ll see in the next several examples, the development model isn’t much different for each of the communication models, so it’ll be easy to switch if you choose wrong.

Let’s see how to create an RSocket server and client in Spring using each of the communication models. Because each of RSocket’s communication models is different and is best suited for specific use-case scenarios, we’ll set the Taco Cloud application aside for now and see how to apply RSocket on different problem domains. We’ll start by seeing how to apply the request-response communication model.