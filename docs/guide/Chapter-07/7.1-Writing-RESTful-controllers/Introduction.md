## 7.1 Writing RESTful controllers

In a nutshell, REST APIs aren’t much different from websites. Both involve responding to HTTP requests. But the key difference is that instead of responding to those requests with HTML, as websites do, REST APIs typically respond with a data-oriented format such as JSON or XML.

In chapter 2 you used @GetMapping and @PostMapping annotations to fetch and post data to the server. Those same annotations will still come in handy as you define your REST API. In addition, Spring MVC supports a handful of other annotations for various types of HTTP requests, as listed in table 7.1.

**Table 7.1 Spring MVC’s HTTP request-handling annotations**

| Annotation | HTTP method | Typical use |
| :--- | :--- | :--- |
| `@GetMapping` | `HTTP GET` requests | Reading resource data |
| `@PostMapping` | `HTTP POST` requests | Creating a resource |
| `@PutMapping` | `HTTP PUT` requests | Updating a resource |
| `@PatchMapping` | `HTTP PATCH` requests | Updating a resource |
| `@DeleteMapping` | `HTTP DELETE` requests | Deleting a resource |
| `@RequestMapping` | General-purpose request handling; `HTTP` method specified in the method attribute |  |

To see these annotations in action, you’ll start by creating a simple REST endpoint that fetches a few of the most recently created tacos.


