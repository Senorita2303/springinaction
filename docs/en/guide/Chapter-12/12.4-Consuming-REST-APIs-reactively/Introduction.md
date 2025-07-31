## 12.4 Consuming REST APIs reactively

In chapter 8, you used `RestTemplate` to make client requests to the Taco Cloud API. `RestTemplate` is an old-timer, having been introduced in Spring version 3.0. In its time, it has been used to make countless requests on behalf of the applications that employ it.

But all of the methods provided by `RestTemplate` deal in nonreactive domain types and collections. This means that if you want to work with a response’s data in a reactive way, you’ll need to wrap it with a `Flux` or `Mono`. And if you already have a `Flux` or `Mono` and you want to send it in a `POST` or `PUT` request, then you’ll need to extract the data into a nonreactive type before making the request.

It would be nice if there was a way to use `RestTemplate` natively with reactive types. Fear not. Spring offers `WebClient` as a reactive alternative to `RestTemplate`. `WebClient` lets you both send and receive reactive types when making requests to external APIs.

Using `WebClient` is quite different from using `RestTemplate`. Rather than having several methods to handle different kinds of requests, `WebClient` has a fluent builderstyle interface that lets you describe and send requests. The general usage pattern for working with `WebClient` follows:

* Create an instance of `WebClient` (or inject a `WebClient` bean)
* Specify the HTTP method of the request to send
* Specify the URI and any headers that should be in the request
* Submit the request
* Consume the response

Let’s look at several examples of `WebClient` in action, starting with how to use `WebClient` to send HTTP GET requests.


