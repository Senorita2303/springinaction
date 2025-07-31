## 10.1 Declaring a simple integration flow

Generally speaking, Spring Integration enables the creation of integration flows through which an application can receive or send data to some resource external to the application itself. One such resource that an application may integrate with is the filesystem. Therefore, among Spring Integration’s many components are channel adapters for reading and writing files.

To get your feet wet with Spring Integration, you’re going to create an integration flow that writes data to the filesystem. To get started, you need to add Spring Integration to your project build. For Maven, the necessary dependencies follow:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-integration</artifactId>
</dependency>​
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-integration-file</artifactId>
</dependency>
```

The first dependency is the Spring Boot starter for Spring Integration. This dependency is essential to developing a Spring Integration flow, regardless of what the flow may integrate with. Like all Spring Boot starter dependencies, it’s available as a check box in the Initializr1 form.

The second dependency is for Spring Integration’s file endpoint module. This module is one of over two dozen endpoint modules used to integrate with external systems. We’ll talk more about the endpoint modules in section 10.2.9. But, for now, know that the file endpoint module offers the ability to ingest files from the filesystem into an integration flow and/or to write data from a flow to the filesystem.

Next you need to create a way for the application to send data into an integration flow so that it can be written to a file. To do that, you’ll create a gateway interface, such as the one shown next.

**Listing 10.1 Message gateway interface to transform method invocations into messages**
```java
package sia6;

import org.springframework.integration.annotation.MessagingGateway;
import org.springframework.integration.file.FileHeaders;
import org.springframework.messaging.handler.annotation.Header;

@MessagingGateway(defaultRequestChannel="textInChannel")
public interface FileWriterGateway {

  void writeToFile(
      @Header(FileHeaders.FILENAME) String filename,
      String data);

}
```

Although it’s a simple Java interface, there’s a lot to be said about `FileWriterGateway`. The first thing you’ll notice is that it’s annotated with `@MessagingGateway`. This annotation tells Spring Integration to generate an implementation of this interface at run time—similar to how Spring Data automatically generates implementations of repository interfaces. Other parts of the code will use this interface when they need to write a file.

The `defaultRequestChannel` attribute of `@MessagingGateway` indicates that any messages resulting from a call to the interface methods should be sent to the given message channel. In this case, you state that any messages that result from a call to `writeToFile()` should be sent to the channel whose name is `textInChannel`.

As for the `writeToFile()` method, it accepts a filename as a `String`, and another `String` that will contain the text should be written to a file. What’s notable about this method signature is that the `filename` parameter is annotated with `@Header`. In this case, the `@Header` annotation indicates that the value passed to `filename` should be placed in a message header (specified as `FileHeaders.FILENAME`, which is a constant in the `FileHeaders` class that is equal to the value `"file_name"`) rather than in the message payload. The data parameter value, on the other hand, is carried in the message payload.

Now that you’ve created a message gateway, you need to configure the integration flow. Although the Spring Integration starter dependency that you added to your build enables essential autoconfiguration for Spring Integration, it’s still up to you to write additional configurations to define flows that meet the needs of the application. Three configuration options for declaring integration flows follow:

* XML configuration
* Java configuration
* Java configuration with a DSL

We’ll take a look at all three of these configuration styles for Spring Integration, starting with the old-timer, XML configuration.

