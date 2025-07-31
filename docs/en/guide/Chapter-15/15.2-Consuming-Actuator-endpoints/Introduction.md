## 15.2 Consuming Actuator endpoints

Actuator can bestow a veritable treasure trove of interesting and useful information about a running application by way of the HTTP endpoints listed in table 15.1. As HTTP endpoints, these can be consumed like any REST API, using whatever HTTP client you wish, including Spring’s `RestTemplate` and `WebClient`, from a JavaScript application, or simply with the `curl` command-line client.

For the sake of exploring Actuator endpoints, we’ll use the `curl` command-line client in this chapter. In chapter 16, I’ll introduce you to Spring Boot Admin, which layers a user-friendly web application on top of an application’s Actuator endpoints.

To get some idea of what endpoints Actuator has to offer, a `GET` request to Actuator’s base path will provide HATEOAS links for each of the endpoints. Using `curl` to make a request to /actuator, you might get a response something like this (abridged to save space):

```bash
$ curl localhost:8081/actuator
{
    "_links": {
        "self": {
            "href": "http://localhost:8081/actuator",
            "templated": false
        },
        "auditevents": {
            "href": "http://localhost:8081/actuator/auditevents",
            "templated": false
        },
        "beans": {
            "href": "http://localhost:8081/actuator/beans",
            "templated": false
        },
        "health": {
            "href": "http://localhost:8081/actuator/health",
            "templated": false
        }
    },
    ...
}
```

Because different libraries may contribute additional Actuator endpoints of their own, and because some endpoints may be not be exported, the actual results may vary from application to application.

In any event, the set of links returned from Actuator’s base path serve as a map to all that Actuator has to offer. Let’s begin our exploration of the Actuator landscape with the two endpoints that provide essential information about an application: the /health and /info endpoints.

