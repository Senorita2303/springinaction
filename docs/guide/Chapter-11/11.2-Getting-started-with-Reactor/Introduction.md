## 11.2 Getting started with Reactor

Reactive programming requires us to think in a very different way from imperative programming. Rather than describe a set of steps to be taken, reactive programming means building a pipeline through which data will flow. As data passes through the pipeline, it can be altered or used in some way.

For example, suppose you want to take a person’s name, change all of the letters to uppercase, use it to create a greeting message, and then finally print it. In an imperative programming model, the code would look something like this:

```java
String name = "Craig";
String capitalName = name.toUpperCase();
String greeting = "Hello, " + capitalName + "!";
System.out.println(greeting);
```

In the imperative model, each line of code performs a step, one right after the other, and definitely in the same thread. Each step blocks the executing thread from moving to the next step until complete.

In contrast, functional, reactive code could achieve the same thing like this:

```java
Mono.just("Craig")
    .map(n -> n.toUpperCase())
    .map(cn -> "Hello, " + cn + "!")
    .subscribe(System.out::println);
```

Don’t worry too much about the details of this example; we’ll talk all about the `just()`, `map()`, and `subscribe()` operations soon enough. For now, it’s important to understand that although the reactive example still seems to follow a step-by-step model, it’s really a pipeline that data flows through. At each phase of the pipeline, the data is tweaked somehow, but no assumption can be made about which thread any of the operations are performed on. They may be the same thread . . . or they may not be.

The `Mono` in the example is one of Reactor’s two core types. `Flux` is the other. Both are implementations of Reactive Streams’ Publisher. A `Flux` represents a pipeline of zero, one, or many (potentially infinite) data items. A `Mono` is a specialized reactive type that’s optimized for when the dataset is known to have no more than one data item.

> Reactor vs RxJava (ReactiveX)
>
> If you’re already familiar with RxJava or ReactiveX, you may be thinking that `Mono` and `Flux` sound a lot like `Observable` and `Single`. In fact, they’re approximately equivalent semantically. They even offer many of the same operations.
>
> Although we focus on Reactor in this book, you may be happy to know that it’s possible to covert between Reactor and RxJava types. Moreover, as you’ll see in the following chapters, Spring can also work with RxJava types.

The previous example actually contains three `Mono` objects. The `just()` operation creates the first one. When the `Mono` emits a value, that value is given to the `map()` operation to be capitalized and used to create another `Mono`. When the second `Mono` publishes its data, it’s given to the second `map()` operation to do some `String` concatenation, the results of which are used to create the third `Mono`. Finally, the call to `subscribe()` subscribes to the `Mono`, receives the data, and prints it.


