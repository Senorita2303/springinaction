## 12.3 Testing reactive controllers

When it comes to testing reactive controllers, Spring hasn’t left us in the lurch. Indeed, Spring has introduced `WebTestClient`, a new test utility that makes it easy to write tests for reactive controllers written with Spring WebFlux. To see how to write tests with `WebTestClient`, let’s start by using it to test the `recentTacos()` method from the `TacoController` that you wrote in section 12.1.2.
