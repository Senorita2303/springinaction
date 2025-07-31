## 15.1 Introducing Actuator

In a machine, an actuator is a component that’s responsible for controlling and moving a mechanism. In a Spring Boot application, the Spring Boot Actuator plays that
same role, enabling us to see inside of a running application and, to some degree,
control how the application behaves.

Using endpoints exposed by Actuator, we can ask things about the internal state of
a running Spring Boot application, such as the following:

* What configuration properties are available in the application environment?
* What are the logging levels of various packages in the application?
* How much memory is being consumed by the application?
* How many times has a given HTTP endpoint been requested?
* What is the health of the application and any external services it coordinates
with?

To enable Actuator in a Spring Boot application, you simply need to add Actuator’s
starter dependency to your build. In any Spring Boot application Maven pom.xml file,
the following `<dependency>` entry does the trick:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Once the Actuator starter is part of the project build, the application will be equipped
with several out-of-the-box Actuator endpoints, including those described in table 15.1.

**Table 15.1：Actuator endpoints for peeking inside and manipulating the state of a running Spring Boot application**

| HTTP method | Path | Description | 是否默认启用 |
| :--- | :--- | :--- | :--- |
| `GET` | /auditevents | Produces a report of any audit events that have been fired | 否 |
| `GET` | /beans | Describes all the beans in the Spring application context | 否 |
| `GET` | /conditions | Produces a report of autoconfiguration conditions that either passed or failed, leading to the beans created in the application context | 否 |
| `GET` | /configprops | Describes all configuration properties along with the current values | 否 |
| `GET`, `POST`, `DELETE` | /env | Produces a report of all property sources and their properties available to the Spring application | 否 |
| `GET` | /env/{toMatch} | Describes the value of a single environment property | 否 |
| `GET` | /health | Returns the aggregate health of the application and (possibly) the health of external dependent applications | 是 |
| `GET` | /heapdump | Downloads a heap dump | 否 |
| `GET` | /httptrace | Produces a trace of the most recent 100 requests | 否 |
| `GET` | /info | Returns any developer-defined information about the application | 是 |
| `GET` | /loggers | Produces a list of packages in the application along with their configured and effective logging levels | 否 |
| `GET`，`POST` | /loggers/{name} | Returns the configured and effective logging level of a given logger; the effective logging level can be set with a POST request | 否 |
| `GET` | /mappings | Produces a report of all HTTP mappings and their corresponding handler methods | 否 |
| `GET` | /metrics | Returns a list of all metrics categories | 否 |
| `GET` | /metrics/{name} | Returns a multidimensional set of values for a given metric | 否 |
| `GET` | /scheduledtasks | Lists all scheduled tasks | 否。 |
| `GET` | /threaddump | Returns a report of all application threads | 否 |

In addition to HTTP endpoints, all of the Actuator endpoints in table 15.1, with the lone exception of /heapdump, are also exposed as JMX MBeans. We’ll look at the JMX side of Actuator in chapter 17.
