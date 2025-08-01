## 2.3 Xác thực dữ liệu đầu vào từ biểu mẫu

Khi thiết kế một chiếc taco mới, chuyện gì sẽ xảy ra nếu người dùng không chọn nguyên liệu nào hoặc không đặt tên cho tác phẩm của mình? Khi gửi đơn hàng, điều gì sẽ xảy ra nếu người dùng không điền vào các trường địa chỉ bắt buộc? Hoặc nếu họ nhập một giá trị vào trường thẻ tín dụng mà thậm chí không phải là số thẻ hợp lệ?

Ở thời điểm hiện tại, không có gì ngăn cản người dùng tạo một chiếc taco không có nguyên liệu nào, hoặc điền địa chỉ giao hàng trống, hoặc thậm chí gửi lời bài hát yêu thích của họ như số thẻ tín dụng. Đó là vì bạn chưa xác định cách thức để xác thực các trường đó.

Một cách để thực hiện xác thực biểu mẫu là rải các khối `if/then` trong các phương thức `processTaco()` và `processOrder()` để kiểm tra từng trường, đảm bảo rằng nó đáp ứng các quy tắc hợp lệ tương ứng. Nhưng làm như vậy sẽ rất rườm rà, khó đọc và khó gỡ lỗi.

May mắn thay, Spring hỗ trợ JavaBean Validation API (còn gọi là JSR 303; [https://jcp.org/en/jsr/detail?id=303](https://jcp.org/en/jsr/detail?id=303)). Điều này giúp bạn dễ dàng khai báo các quy tắc xác thực thay vì phải viết logic kiểm tra thủ công trong mã ứng dụng.

Để áp dụng xác thực trong Spring MVC, bạn cần:

* Thêm starter Spring Validation vào file cấu hình build.
* Khai báo các quy tắc xác thực trong lớp cần được xác thực: cụ thể là lớp `Taco`.
* Chỉ định rằng việc xác thực sẽ được thực hiện trong các phương thức controller cần xác thực: cụ thể là phương thức `processTaco()` trong `DesignTacoController` và `processOrder()` trong `OrderController`.
* Chỉnh sửa các view biểu mẫu để hiển thị lỗi xác thực.

Validation API cung cấp một số annotation có thể được đặt lên các thuộc tính của đối tượng domain để khai báo quy tắc xác thực. Phiên bản triển khai của Hibernate cho Validation API còn bổ sung thêm nhiều annotation xác thực hơn nữa. Cả hai đều có thể được thêm vào dự án bằng cách thêm starter Spring Validation vào build. Checkbox Validation trong phần I/O của Spring Boot Starter wizard có thể giúp bạn làm điều đó, nhưng nếu bạn muốn chỉnh sửa file build thủ công, bạn có thể thêm đoạn sau vào file `pom.xml` (với Maven):  

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

Hoặc nếu bạn dùng Gradle, thì bạn cần thêm dependency sau:

```text
implementation 'org.springframework.boot:spring-boot-starter-validation'
```

> **Starter xác thực có bắt buộc không?**
>
> Trong các phiên bản Spring Boot trước đây, starter Spring Validation được bao gồm tự động trong starter web. Bắt đầu từ Spring Boot 2.3.0, bạn cần phải thêm nó một cách rõ ràng nếu muốn sử dụng xác thực.

Với starter xác thực đã được cấu hình, hãy xem cách bạn có thể áp dụng một vài annotation để xác thực dữ liệu được gửi lên trong `Taco` hoặc `TacoOrder`.
