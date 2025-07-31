# Chapter 11. Introducing Reactor

This chapter covers

* Understanding reactive programming
* Project Reactor
* Operating on data reactively

Have you ever held a subscription for a newspaper or a magazine? The internet has certainly taken a bite out of the subscriber base of traditional publications, but there was a time when a newspaper subscription was one of the best ways to keep up with the events of the day. You could count on a fresh delivery of current events every morning, to read during breakfast or on the way to work.

Now suppose that if, after paying for your subscription, several days go by and no papers have been delivered. A few more days go by, and you call the newspaper sales office to ask why you haven’t yet received your daily paper. Imagine your surprise if they explain, “You paid for a full year of newspapers. The year hasn’t completed yet. You’ll certainly receive them all once the full year of newspapers is ready.”

Thankfully, that’s not at all how subscriptions work. Newspapers have a certain timeliness to them. They’re delivered as quickly as possible after publication so that they can be read while their content is still fresh. Moreover, as you’re reading the latest issue, newspaper reporters are writing new stories for future editions, and the presses are fired up producing the next edition—all in parallel.

As we develop application code, we can write two styles of code—imperative and reactive, which are described as follows:

* _Imperative_ code is a lot like that absurd hypothetical newspaper subscription. It’s a serial set of tasks, each running one at a time, each after the previous task. Data is processed in bulk and can’t be handed over to the next task until the previous task has completed its work on the bulk of data.
* _Reactive_ code is a lot like a real newspaper subscription. A set of tasks is defined to process data, but those tasks can run in parallel. Each task can process subsets of the data, handing it off to the next task in line while it continues to work on another subset of the data.

In this chapter, we’re going to step away from the Taco Cloud application temporarily to explore Project Reactor [https://projectreactor.io/](https://projectreactor.io/). Reactor is a library for reactive programming that’s part of the Spring family of projects. And because it serves as the foundation of Spring’s support for reactive programming, it’s important that you understand Reactor before we look at building reactive controllers and repositories with Spring. Before we start working with Reactor, though, let’s quickly examine the essentials of reactive programming.

