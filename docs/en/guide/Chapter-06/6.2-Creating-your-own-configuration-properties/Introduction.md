## 6.2 Creating your own configuration properties

As I mentioned earlier, configuration properties are nothing more than properties of beans that have been designated to accept configurations from Spring’s environment abstraction. What I didn’t mention is how those beans are designated to consume those configurations.

To support property injection of configuration properties, Spring Boot provides the `@ConfigurationProperties` annotation. When placed on any Spring bean, it specifies that the properties of that bean can be injected from properties in the Spring environment.

To demonstrate how `@ConfigurationProperties` works, suppose that you’ve added the following method to `OrderController` to list the authenticated user’s past orders:

```java
@GetMapping
public String ordersForUser(
    @AuthenticationPrincipal User user, Model model) {

  model.addAttribute("orders",
    orderRepo.findByUserOrderByPlacedAtDesc(user));

  return "orderList";
}
```

Along with that, you’ve also added the next necessary `findByUserOrderByPlacedAtDesc()` method to `OrderRepository`:

```java
List<Order> findByUserOrderByPlacedAtDesc(User user);
```

Notice that this repository method is named with a clause of `OrderByPlacedAtDesc`. The `OrderBy` portion specifies a property by which the results will be ordered—in this case, the `placedAt` property. The `Desc` at the end causes the ordering to be in descending order. Therefore, the list of orders returned will be sorted from most recent to least recent.

As written, this controller method may be useful after the user has placed a handful of orders, but it could become a bit unwieldy for the most avid of taco connoisseurs. A few orders displayed in the browser are useful; a never-ending list of hundreds of orders is just noise. Let’s say that you want to limit the number of orders displayed to the most recent 20 orders. You can change `ordersForUser()` as follows:

```java
@GetMapping
public String ordersForUser(
    @AuthenticationPrincipal User user, Model model) {

  Pageable pageable = PageRequest.of(0, 20);
  model.addAttribute("orders",
      orderRepo.findByUserOrderByPlacedAtDesc(user, pageable));

  return "orderList";
}
```

along with the corresponding changes to `OrderRepository`, shown next:

```java
List<TacoOrder> findByUserOrderByPlacedAtDesc(
      User user, Pageable pageable);
```

Here you’ve changed the signature of the `findByUserOrderByPlacedAtDesc()` method to accept a `Pageable` as a parameter. `Pageable` is Spring Data’s way of selecting some subset of the results by a page number and page size. In the `ordersForUser()` controller method, you constructed a `PageRequest` object that implemented `Pageable` to request the first page (page zero) with a page size of 20 to get up to 20 of the most recently placed orders for the user.

Although this works fantastically, it leaves me a bit uneasy that you’ve hardcoded the page size. What if you later decide that 20 is too many orders to list, and you decide to change it to 10? Because it’s hardcoded, you’d have to rebuild and redeploy the application.

Rather than hardcode the page size, you can set it with a custom configuration property. First, you need to add a new property called `pageSize` to `OrderController`, and then annotate `OrderController` with `@ConfigurationProperties` as shown in the next listing.

**Listing 6.1 Enabling configuration properties in OrderController**
```java
@Controller
@RequestMapping("/orders")
@SessionAttributes("order")
@ConfigurationProperties(prefix="taco.orders")
public class OrderController {

  private int pageSize = 20;

  public void setPageSize(int pageSize) {
    this.pageSize = pageSize;
  }

  ...

  @GetMapping
  public String ordersForUser(
        @AuthenticationPrincipal User user, Model model) {

    Pageable pageable = PageRequest.of(0, pageSize);
    model.addAttribute("orders",
        orderRepo.findByUserOrderByPlacedAtDesc(user, pageable));
    return "orderList";
  }
}
```

The most significant change made in listing 6.1 is the addition of the `@ConfigurationProperties` annotation. Its prefix attribute is set to `taco.orders`, which means that when setting the pageSize property, you need to use a configuration property named `taco.orders.pageSize`.

The new `pageSize` property defaults to 20, but you can easily change it to any value you want by setting a `taco.orders.pageSize` property. For example, you could set this property in application.yml like this:

```yaml
taco:
  orders:
    pageSize: 10
```

Or, if you need to make a quick change while in production, you can do so without having to rebuild and redeploy the application by setting the `taco.orders.pageSize` property as an environment variable as follows:

```bash
$ export TACO_ORDERS_PAGESIZE=10
```

Any means by which a configuration property can be set can be used to adjust the page size of the recent orders page. Next, we’ll look at how to set configuration data in property holders.


