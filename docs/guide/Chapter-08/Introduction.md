# Chapter 8. Securing REST

This chapter covers

* Securing APIs with OAuth 2
* Creating an authorization server
* Adding a resource server to an API
* Consuming OAuth 2–secured APIs

Have you ever taken advantage of valet parking? It’s a simple concept: you hand your car keys to a valet near the entrance of a store, hotel, theater, or restaurant, and they deal with the hassle of finding a parking space for you. And then they return your car to you when you ask for it. Maybe it’s because I’ve seen _Ferris Bueller’s Day Off_ too many times, but I’m always reluctant to hand my car keys to a stranger and hope that they take good care of my vehicle for me.

Nonetheless, valet parking involves granting trust to someone to take care of your car. Many newer cars provide a “valet key,” a special key that can be used only to open the car doors and start the engine. This way the amount of trust that you are granting is limited in scope. The valet cannot open the glove compartment or the trunk with the valet key.

In a distributed application, trust is critical between software systems. Even in a simple situation where a client application consumes a backend API, it’s important that the client is trusted and anyone else attempting to use that same API is blocked out. And, like the valet, the amount of trust you grant to a client should be limited to only the functions necessary for the client to do its job.

Securing a REST API is different from securing a browser-based web application. In this chapter, we’re going to look at OAuth 2, an authorization specification created specifically for API security. In doing so, we’ll look at Spring Security’s support for OAuth 2. But first, let’s set the stage by seeing how OAuth 2 works.
