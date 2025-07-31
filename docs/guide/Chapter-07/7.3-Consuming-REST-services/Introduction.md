## 7.3 Consuming REST services

Have you ever gone to a movie and, as the movie starts, discovered that you were the only person in the theater? It certainly is a wonderful experience to have what is essentially a private viewing of a movie. You can pick whatever seat you want, talk back to the characters onscreen, and maybe even open your phone and tweet about it without anyone getting angry for disrupting their movie-watching experience. And the best part is that nobody else is there ruining the movie for you, either!

This hasn’t happened to me often. But when it has, I have wondered what would have happened if I hadn’t shown up. Would they still have shown the film? Would the hero still have saved the day? Would the theater staff still have cleaned the theater after the movie was over?

A movie without an audience is kind of like an API without a client. It’s ready to accept and provide data, but if the API is never invoked, is it really an API? Like Schrödinger’s cat, we can’t know if the API is active or returning HTTP 404 responses until we issue a request to it.

It’s not uncommon for Spring applications to both provide an API and make requests to another application’s API. In fact, this is becoming prevalent in the world of microservices. Therefore, it’s worthwhile to spend a moment looking at how to use Spring to interact with REST APIs.

A Spring application can consume a REST API with the following:

* _RestTemplate_ —— A straightforward, synchronous REST client provided by the core Spring Framework.
* _Traverson_ —— A wrapper around Spring’s `RestTemplate`, provided by Spring HATEOAS, to enable a hyperlink-aware, synchronous REST client. Inspired from a JavaScript library of the same name.
* _WebClient_ —— A reactive, asynchronous REST client.

For now, we’ll focus on creating clients with `RestTemplate`. I’ll defer discussion of `WebClient` until we cover Spring’s reactive web framework in chapter 12. And if you’re interested in writing hyperlink-aware clients, check out the Traverson documentation at [https://docs.spring.io/spring-hateoas/docs/current/reference/html/#client](https://docs.spring.io/spring-hateoas/docs/current/reference/html/#client)。

There’s a lot that goes into interacting with a REST resource from the client’s perspective—mostly tedium and boilerplate. Working with low-level HTTP libraries, the client needs to create a client instance and a request object, execute the request, interpret the response, map the response to domain objects, and handle any exceptions that may be thrown along the way. And all of this boilerplate is repeated, regardless of what HTTP request is sent.

To avoid such boilerplate code, Spring provides `RestTemplate`. Just as `JdbcTemplate` handles the ugly parts of working with JDBC, `RestTemplate` frees you from dealing with the tedium of consuming REST resources.

`RestTemplate` provides 41 methods for interacting with REST resources. Rather than examine all of the methods that it offers, it’s easier to consider only a dozen unique operations, each overloaded to equal the complete set of 41 methods. The 12 operations are described in table 7.2.

**Table 7.2 `RestTemplate` defines 12 unique operations, each of which is overloaded, providing a total of 41 methods.**

| Method | Description |
| :--- | :--- |
| `delete(...)` | Performs an HTTP `DELETE` request on a resource at a specified URL |
| `exchange(...)` | Executes a specified HTTP method against a URL, returning a `ResponseEntity` containing an object mapped from the response body |
| `execute(...)` | Executes a specified HTTP method against a URL, returning an object mapped from the response body |
| `getForEntity(...)` | Sends an HTTP `GET` request, returning a `ResponseEntity` containing an object mapped from the response body |
| `getForObject(...)` | Sends an HTTP `GET` request, returning an object mapped from a response body |
| `headForHeaders(...)` | Sends an HTTP `HEAD` request, returning the HTTP headers for the specified resource URL |
| `optionsForAllow(...)` | Sends an HTTP `OPTIONS` request, returning the `Allow` header for the specified URL |
| `patchForObject(...)` | Sends an HTTP `PATCH` request, returning the resulting object mapped from the response body |
| `postForEntity(...)` | `POSTs` data to a URL, returning a `ResponseEntity` containing an object mapped from the response body |
| `postForLocation(...)` | `POSTs` data to a URL, returning the URL of the newly created resource |
| `postForObject(...)` | `POSTs` data to a URL, returning an object mapped from the response body |
| `put(...)` | `PUTs` resource data to the specified URL |

With the exception of `TRACE`, `RestTemplate` has at least one method for each of the standard HTTP methods. In addition, `execute()` and `exchange()` provide lower-level, general-purpose methods for sending requests with any HTTP method.

Most of the methods in table 7.2 are overloaded into the following three method forms:

* One accepts a `String` URL specification with URL parameters specified in a variable argument list.
* One accepts a `String` URL specification with URL parameters specified in a `Map<String,String>`.
* One accepts a `java.net.URI` as the URL specification, with no support for parameterized URLs.

Once you get to know the 12 operations provided by RestTemplate and how each of the variant forms works, you’ll be well on your way to writing resource-consuming REST clients.

To use RestTemplate, you’ll either need to create an instance at the point you need it, as follows:

```java
RestTemplate rest = new RestTemplate();
```

or you can declare it as a bean and inject it where you need it, as shown next:

```java
@Bean
public RestTemplate restTemplate() {
  return new RestTemplate();
}
```

Let’s survey `RestTemplate`’s operations by looking at those that support the four primary HTTP methods: `GET`, `PUT`, `DELETE`, and `POST`. We’ll start with `getForObject()` and `getForEntity()` — the `GET` methods.