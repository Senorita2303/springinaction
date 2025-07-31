# Chapter 10. Integrating Spring

This chapter covers

* Processing data in real time
* Defining integration flows
* Using Spring Integrations's Java DSL definition
* Integrating with emails, filesystems, and other external systems

One of the most frustrating things I encounter as I travel is being on a long flight and having a poor or nonexistent in-flight internet connection. I like to use my air time to get some work done, including writing many of the pages of this book. If there’s no network connection, I’m at a disadvantage if I need to fetch a library or look up a Javadoc, and I’m not able to get much work done. I’ve learned to pack a book to read for those occasions.

Just as we need to connect to the internet to be productive, many applications must connect to external systems to perform their work. An application may need to read or send emails, interact with an external API, or react to data being written to a database. And, as data is ingested from or written to these external systems, the application may need to process data in some way to translate it to or from the application’s own domain.

In this chapter, you’ll see how to employ common integration patterns with Spring Integration. Spring Integration is a ready-to-use implementation of many of the integration patterns that are catalogued in _Enterprise Integration Patterns_ by Gregor Hohpe and Bobby Woolf (Addison-Wesley, 2003). Each pattern is implemented as a component through which messages ferry data in a pipeline. Using Spring configuration, you can assemble these components into a pipeline through which data flows. Let’s get started by defining a simple integration flow that introduces many of the features and characteristics of working with Spring Integration.
