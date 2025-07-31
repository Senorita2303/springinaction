## 9.1 Sending messages with JMS

JMS is a Java standard that defines a common API for working with message brokers. First introduced in 2001, JMS has been the go-to approach for asynchronous messaging in Java for a very long time. Before JMS, each message broker had a proprietary API, making an application’s messaging code less portable between brokers. But with JMS, all compliant implementations can be worked with via a common interface in much the same way that JDBC has given relational database operations a common interface.

Spring supports JMS through a template-based abstraction known as `JmsTemplate`. Using `JmsTemplate`, it’s easy to send messages across queues and topics from the producer side and to receive those messages on the consumer side. Spring also supports the notion of message-driven POJOs: simple Java objects that react to messages arriving on a queue or topic in an asynchronous fashion.

We’re going to explore Spring’s JMS support, including `JmsTemplate` and messagedriven POJOs. Our focus will be on Spring’s support for messaging with JMS, but if you want to know more about JMS, then have a look at _ActiveMQ in Action_ by Bruce Snyder, Dejan Bosanac, and Rob Davies (Manning, 2011).

Before you can send and receive messages, you need a message broker that’s ready to relay those messages between producers and consumers. Let’s kick off our exploration of Spring JMS by setting up a message broker in Spring.


