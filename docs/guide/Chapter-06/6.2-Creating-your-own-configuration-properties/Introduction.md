## 6.2 Tạo cấu hình tùy chỉnh của riêng bạn

Như tôi đã đề cập trước đó, các thuộc tính cấu hình không gì khác ngoài các thuộc tính của các bean được chỉ định để nhận cấu hình từ lớp trừu tượng môi trường của Spring. Điều mà tôi chưa đề cập là cách các bean đó được chỉ định để sử dụng các cấu hình đó.

Để hỗ trợ việc tiêm thuộc tính cấu hình, Spring Boot cung cấp annotation `@ConfigurationProperties`. Khi được đặt trên bất kỳ bean Spring nào, nó chỉ định rằng các thuộc tính của bean đó có thể được tiêm từ các thuộc tính trong môi trường Spring.

Để minh họa cách `@ConfigurationProperties` hoạt động, giả sử bạn đã thêm phương thức sau vào `OrderController` để liệt kê các đơn hàng trước đó của người dùng đã xác thực:  

```java
@GetMapping
public String ordersForUser(
    @AuthenticationPrincipal User user, Model model) {

  model.addAttribute("orders",
    orderRepo.findByUserOrderByPlacedAtDesc(user));

  return "orderList";
}
```

Cùng với đó, bạn cũng đã thêm phương thức cần thiết `findByUserOrderByPlacedAtDesc()` vào `OrderRepository`:

```java
List<Order> findByUserOrderByPlacedAtDesc(User user);
```

Lưu ý rằng phương thức repository này được đặt tên với phần tử `OrderByPlacedAtDesc`. Phần `OrderBy` chỉ định thuộc tính dùng để sắp xếp kết quả—trong trường hợp này là thuộc tính `placedAt`. `Desc` ở cuối tên phương thức khiến kết quả được sắp xếp theo thứ tự giảm dần. Do đó, danh sách đơn hàng được trả về sẽ được sắp xếp từ mới nhất đến cũ nhất.

Theo cách viết hiện tại, phương thức controller này có thể hữu ích sau khi người dùng đã đặt một vài đơn hàng, nhưng nó có thể trở nên hơi rối rắm với những người yêu thích taco cuồng nhiệt. Một vài đơn hàng hiển thị trong trình duyệt thì hữu ích; nhưng một danh sách bất tận với hàng trăm đơn hàng thì chỉ là nhiễu. Giả sử bạn muốn giới hạn số lượng đơn hàng hiển thị xuống còn 20 đơn hàng gần đây nhất. Bạn có thể thay đổi `ordersForUser()` như sau:  

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

Cùng với các thay đổi tương ứng trong `OrderRepository` như sau:  

```java
List<TacoOrder> findByUserOrderByPlacedAtDesc(
      User user, Pageable pageable);
```

Tại đây bạn đã thay đổi chữ ký của phương thức `findByUserOrderByPlacedAtDesc()` để chấp nhận một `Pageable` làm tham số. `Pageable` là cách của Spring Data để chọn một tập con kết quả theo số trang và kích thước trang. Trong phương thức controller `ordersForUser()`, bạn đã tạo một đối tượng `PageRequest` triển khai `Pageable` để yêu cầu trang đầu tiên (trang số 0) với kích thước trang là 20, nhằm lấy tối đa 20 đơn hàng gần nhất của người dùng.

Mặc dù cách làm này hoạt động rất tốt, nhưng nó khiến tôi hơi băn khoăn vì bạn đã hardcode kích thước trang. Nếu sau này bạn quyết định rằng 20 là quá nhiều và muốn thay đổi nó thành 10 thì sao? Vì giá trị này được hardcode, bạn sẽ phải build lại và triển khai lại ứng dụng.

Thay vì hardcode kích thước trang, bạn có thể đặt nó bằng một thuộc tính cấu hình tùy chỉnh. Đầu tiên, bạn cần thêm một thuộc tính mới có tên `pageSize` vào `OrderController`, sau đó đánh dấu `OrderController` với annotation `@ConfigurationProperties` như được hiển thị trong đoạn mã tiếp theo.

**Liệt kê 6.1 Kích hoạt thuộc tính cấu hình trong OrderController**

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

Thay đổi quan trọng nhất trong liệt kê 6.1 là bổ sung annotation `@ConfigurationProperties`. Thuộc tính `prefix` được đặt là `taco.orders`, nghĩa là khi đặt thuộc tính `pageSize`, bạn cần sử dụng một thuộc tính cấu hình có tên là `taco.orders.pageSize`.

Thuộc tính `pageSize` mới mặc định là 20, nhưng bạn có thể dễ dàng thay đổi nó thành bất kỳ giá trị nào bằng cách đặt thuộc tính `taco.orders.pageSize`. Ví dụ, bạn có thể đặt thuộc tính này trong `application.yml` như sau:

```yaml
taco:
  orders:
    pageSize: 10
```

Hoặc, nếu bạn cần thực hiện thay đổi nhanh chóng khi đang chạy ứng dụng trong môi trường production, bạn có thể làm điều đó mà không cần build lại và triển khai lại ứng dụng bằng cách đặt biến môi trường `taco.orders.pageSize` như sau:

```bash
export TACO_ORDERS_PAGESIZE=10
```

Bất kỳ cách nào để thiết lập thuộc tính cấu hình đều có thể được sử dụng để điều chỉnh kích thước trang của trang đơn hàng gần đây. Tiếp theo, chúng ta sẽ xem cách đặt dữ liệu cấu hình trong các holder chứa thuộc tính.
