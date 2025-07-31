# Chapter 14. Working with RSocket

This chapter covers
* Reactive network communication with RSocket
* Working with each of RSocket’s four communication models
* Transporting RSocket over WebSocket

There was a time, before telephones and modern electronics, when the best way to communicate with friends and family that live far away involved writing a letter and dropping it in the mail. It wasn’t a quick form of communication, taking several days or even weeks before you’d receive a response, but it was effective and truly the only option available.

Thanks to Alexander Graham Bell, the telephone offered a new way to talk with distant friends and family, giving near-real-time, synchronous communication The telephone has evolved quite a bit since Mr. Bell’s first invention, but it’s still a popular means of keeping in touch, making letter-writing nearly a lost art.

When it comes to communication between applications, the request-response model offered by HTTP and REST services is quite common, but it has limitations. Much like letter-writing, request-response involves sending a message and then waiting for a response. It doesn’t easily allow for asynchronous communication in which a server might respond with a stream of responses or allow for an open bidirectional channel on which a client and server can repeatedly send data to each other.

In this chapter, we’re going to look at RSocket, a relatively new protocol for interapplication communication that allows for more than simple request-response communication. And because it’s reactive in nature, it can be far more efficient than blocking HTTP requests.

Along the way, we’ll see how to develop RSocket communication in Spring. But first, let’s take a high-level look at RSocket to see what makes it different from HTTPbased communication.