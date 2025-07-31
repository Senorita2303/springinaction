## 7.2 Enabling data-backed services

As you saw in chapter 3, Spring Data performs a special kind of magic by automatically creating repository implementations based on interfaces you define in your code. But Spring Data has another trick up its sleeve that can help you define APIs for your application.

Spring Data REST is another member of the Spring Data family that automatically creates REST APIs for repositories created by Spring Data. By doing little more than adding Spring Data REST to your build, you get an API with operations for each repository interface you’ve defined.

To start using Spring Data REST, add the following dependency to your build:

```html
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-rest</artifactId>
</dependency>
```

Believe it or not, that’s all that’s required to expose a REST API in a project that’s already using Spring Data for automatic repositories. By simply having the Spring Data REST starter in the build, the application gets autoconfiguration that enables automatic creation of a REST API for any repositories that were created by Spring Data (including Spring Data JPA, Spring Data Mongo, and so on).

The REST endpoints that Spring Data REST creates are at least as good as (and possibly even better than) the ones you’ve created yourself. So at this point, feel free to do a little demolition work and remove any `@RestController`-annotated classes you’ve created up to this point before moving on.

To try out the endpoints provided by Spring Data REST, you can fire up the application and start poking at some of the URLs. Based on the set of repositories you’ve already defined for Taco Cloud, you should be able to perform `GET` requests for tacos, ingredients, orders, and users.

For example, you can get a list of all ingredients by making a `GET` request for /ingredients. Using `curl`, you might get something that looks like this (abridged to show only the first ingredient):

```bash
$ curl localhost:8080/ingredients
{
  "_embedded" : {
    "ingredients" : [ {
      "name" : "Flour Tortilla",
      "type" : "WRAP",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/ingredients/FLTO"
        },
        "ingredient" : {
          "href" : "http://localhost:8080/ingredients/FLTO"
        }
      }
    },
    ...
    ]
  },
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/ingredients"
    },
    "profile" : {
      "href" : "http://localhost:8080/profile/ingredients"
    }
  }
}
```

Wow! By doing nothing more than adding a dependency to your build, you’re not only getting an endpoint for ingredients, but the resources that come back also contain hyperlinks! These hyperlinks are implementations of Hypermedia as the Engine of Application State, or HATEOAS for short. A client consuming this API could (optionally) use these hyperlinks as a guide for navigating the API and performing the next request.

The Spring HATEOAS project [https://spring.io/projects/spring-hateoas](https://spring.io/projects/spring-hateoas) provides general support for adding hypermedia links in your Spring MVC controller responses. But Spring Data REST automatically adds these links in the responses to its generated APIs.

>To HATEOAS or not to HATEOAS?
>
>The general idea of HATEOAS is that it enables a client to navigate an API in much the same way that a human may navigate a website: by following links. Rather than encode API details in a client and having the client construct URLs for every request, the client can select a link, by name, from the list of hyperlinks and use it to make their next request. In this way, the client doesn’t need to be coded to know the structure of an API and can instead use the API itself as a roadmap through the API.
>On the other hand, the hyperlinks do add a small amount of extra data in the payload and add some complexity requiring that the client know how to navigate using those hyperlinks. For this reason, API developers often forego the use of HATEOAS, and client developers often simply ignore the hyperlinks if there are any in an API.
>Other than the free hyperlinks you get from Spring Data REST responses, we’ll ignore HATEOAS and focus on simple, nonhypermedia APIs.

Pretending to be a client of this API, you can also use curl to follow the self link for the flour tortilla entry as follows:

```bash
$ curl http://localhost:8080/ingredients/FLTO
{
  "name" : "Flour Tortilla",
  "type" : "WRAP",
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/ingredients/FLTO"
    },
    "ingredient" : {
      "href" : "http://localhost:8080/ingredients/FLTO"
    }
  }
}
```

To avoid getting too distracted, we won’t waste much more time in this book digging into each and every endpoint and option that Spring Data REST has created. But you should know that it also supports `POST`, `PUT`, and `DELETE` methods for the endpoints it creates. That’s right: you can `POST` to /ingredients to create a new ingredient and `DELETE` /ingredients/FLTO to remove flour tortillas from the menu.

One thing you might want to do is set a base path for the API so that its endpoints are distinct and don’t collide with any controllers you write. To adjust the base path for the API, set the spring.data.rest.base-path property as shown next:

```yaml
spring:
  data:
    rest:
      base-path: /api
```

This sets the base path for Spring Data REST endpoints to /data-api. Although you can set the base path to anything you’d like, the choice of /data-api ensures that endpoints exposed by Spring Data REST don’t collide with any other controllers, including those whose path begins with “/api” that we created earlier in this chapter. Consequently, the ingredients endpoint is now /data-api/ingredients. Now give this new base path a spin by requesting a list of tacos as follows:

```bash
$ curl http://localhost:8080/data-api/tacos
{
  "timestamp": "2018-02-11T16:22:12.381+0000",
  "status": 404,
  "error": "Not Found",
  "message": "No message available",
  "path": "/api/tacos"
}
```

Oh dear! That didn’t work quite as expected. You have an `Ingredient` entity and an `IngredientRepository` interface, which Spring Data REST exposed with a /dataapi/ingredients endpoint. So if you have a `Taco` entity and a `TacoRepository` interface, why doesn’t Spring Data REST give you a /data-api/tacos endpoint?


