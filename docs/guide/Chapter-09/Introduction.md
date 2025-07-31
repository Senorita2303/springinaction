# Chapter 9. Sending messages asynchronously

This chapter covers

* Asynchronous messaging
* Sending messages with JMS, RabbitMQ, and Kafka
* Pulling messages from a broker
* Listening for messages

It’s 4:55 p.m. on Friday. You’re minutes away from starting a much-anticipated vacation. You have just enough time to drive to the airport and catch your flight. But before you pack up and head out, you need to be sure your boss and colleagues know the status of the work you’ve been doing so that on Monday they can pick up where you left off. Unfortunately, some of your colleagues have already skipped out for the weekend, and your boss is tied up in a meeting. What do you do?

The most practical way to communicate your status and still catch your plane is to send a quick email to your boss and your colleagues, detailing your progress and promising to send a postcard. You don’t know where they are or when they’ll read the email, but you do know they’ll eventually return to their desks and read it. Meanwhile, you’re on your way to the airport.

_Synchronous_ communication, which is what we’ve seen with REST, has its place. But it’s not the only style of interapplication communication available to developers. Asynchronous messaging is a way of indirectly sending messages from one application to another without waiting for a response. This indirection affords looser coupling and greater scalability between the communicating applications.

In this chapter, we’re going to use asynchronous messaging to send orders from the Taco Cloud website to a separate application in the Taco Cloud kitchens where the tacos will be prepared. We’ll consider three options that Spring offers for asynchronous messaging: the Java Message Service (JMS), RabbitMQ and Advanced Message Queueing Protocol (AMQP), and Apache Kafka. In addition to the basic sending and receiving of messages, we’ll look at Spring’s support for message-driven POJOs: a way to receive messages that resembles Enterprise JavaBeans’ message-driven beans (MDBs).

