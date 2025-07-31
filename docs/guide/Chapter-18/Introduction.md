# Chapter 18. Deploying Spring

This chapter covers

* Building Spring applications as either WAR or
JAR files
* Building Spring applications as container images
* Deploying Spring applications in Kubernetes

Think of your favorite action movie. Now imagine going to see that movie in the theater and being taken on a thrilling audiovisual ride with high-speed chases, explosions, and battles, only to have it come to a sudden halt before the good guys take down the bad guys. Instead of seeing the movie’s conflict resolved, when the theater lights come on, everyone is ushered out the door. Although the lead-up was exciting, it’s the climax of the movie that’s important. Without it, it’s action for action’s sake.。

Now imagine developing applications and putting a lot of effort and creativity into solving the business problem, but then never deploying the application for others to use and enjoy. Sure, most applications we write don’t involve car chases or explosions (at least I hope not), but there’s a certain rush you get along the way. Not every line of code you write is destined for production, but it’d be a big letdown if none of it ever was deployed.

Up to this point, we’ve focused on using the features of Spring Boot that help us develop an application. There have been some exciting steps along the way, but it’s all for nothing if you don’t cross the finish line and deploy the application.

In this chapter, we’re going to step beyond developing applications with Spring Boot and look at how to deploy those applications. Although this may seem obvious for anyone who has ever deployed a Java-based application, Spring Boot and related Spring projects have some features you can draw on that make deploying Spring Boot
applications unique.

In fact, unlike most Java web applications, which are typically deployed to an application server as WAR files, Spring Boot offers several deployment options. Before we look at how to deploy a Spring Boot application, let’s consider all the options and choose a few that suit your needs best.


