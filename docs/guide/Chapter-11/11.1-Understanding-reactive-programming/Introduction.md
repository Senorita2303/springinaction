## 11.1 Understanding reactive programming

Reactive programming is a paradigm that’s an alternative to imperative programming.
This alternative exists because reactive programming addresses a limitation in imperative programming. By understanding these limitations, you can better grasp the benefits of the reactive model.

> NOTE：Reactive programming isn’t a silver bullet. In no way should you infer from this chapter or any other discussion of reactive programming that imperative programming is evil and that reactive programming is your savior. Like anything you learn as a developer, reactive programming is a perfect fit in some use cases, and it’s ill-fitted in others. An ounce of pragmatism is advised.

If you’re like me and many developers, you cut your programming teeth with imperative programming. There’s a good chance that most (or all) of the code you write today is still imperative in nature. Imperative programming is intuitive enough that young students are learning it with ease in their school’s STEM programs, and it’s powerful enough that it makes up the bulk of code that drives the largest enterprises.

The idea is simple: you write code as a list of instructions to be followed, one at a time, in the order that they’re encountered. A task is performed and the program waits for it to complete before moving on to the next task. At each step along the way, the data that’s to be processed must be fully available so that it can be processed as a whole.

This is fine . . . until it isn’t. While a task is being performed—and especially if it’s an I/O task, such as writing data to a database or fetching data from a remote server — the thread that invoked that task is blocked, unable to do anything else until the task completes. To put it bluntly, blocked threads are wasteful.

Most programming languages, including Java, support concurrent programming. It’s fairly easy to fire up another thread in Java and send it on its way to perform some work while the invoking thread carries on with something else. But although it’s easy to create threads, those threads are likely to end up blocked themselves. Managing concurrency in multiple threads is challenging. More threads mean more complexity.

In contrast, reactive programming is functional and declarative in nature. Rather than describe a set of steps that are to be performed sequentially, reactive programming involves describing a pipeline or stream through which data flows. Rather than requiring the data to be available and processed as a whole, a reactive stream processes data as it becomes available. In fact, the incoming data may be endless (a constant stream of a location’s real-time temperature data, for instance).

> NOTE：If you’re new to functional programming in Java, you may want to have a look at _Functional Programming in Java_ by Pierre-Yves Saumont (Manning, 2017), or _Grokking Functional Programming_ by Michał Płachta (Manning, 2021).

To apply a real-world analogy, consider imperative programming as a water balloon and reactive programming as a garden hose. Both are suitable ways to surprise and soak an unsuspecting friend on a hot summer day. But they differ in their execution style as follows:

* A water balloon carries its payload all at once, soaking its intended target at the moment of impact. The water balloon has a finite capacity, however, and if you wish to soak more people (or the same person to a greater extent), your only choice is to scale up by increasing the number of water balloons.
* A garden hose carries its payload as a stream of water that flows from the spigot to the nozzle. The garden hose’s capacity may be finite at any given point in time, but it’s unlimited over the course of a water battle. As long as water is entering the hose from the spigot, it will continue to flow through the hose and spray out of the nozzle. The same garden hose is easily scalable to soak as many friends as you wish.

There’s nothing inherently wrong with water balloons (or imperative programming), but the person holding the garden hose (or applying reactive programming) has an advantage in regard to scalability and performance.


