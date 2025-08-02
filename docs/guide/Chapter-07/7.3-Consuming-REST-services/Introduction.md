## 7.3 Tiêu thụ các dịch vụ REST

Bạn đã bao giờ đi xem phim và, khi bộ phim bắt đầu, phát hiện ra rằng bạn là người duy nhất trong rạp chưa? Chắc chắn đó là một trải nghiệm tuyệt vời khi bạn có một buổi chiếu phim riêng tư. Bạn có thể chọn bất kỳ chỗ ngồi nào bạn muốn, thoải mái nói chuyện với các nhân vật trên màn ảnh, thậm chí có thể mở điện thoại và đăng tweet mà không ai nổi giận vì bạn làm gián đoạn trải nghiệm xem phim của họ. Và điều tuyệt nhất là không ai khác có mặt để phá hỏng bộ phim cho bạn!

Điều này không xảy ra với tôi thường xuyên. Nhưng khi nó xảy ra, tôi tự hỏi điều gì sẽ xảy ra nếu tôi không đến. Họ có vẫn chiếu phim không? Nhân vật chính có vẫn cứu thế giới không? Nhân viên rạp chiếu có vẫn dọn dẹp sau khi phim kết thúc không?

Một bộ phim không có khán giả cũng giống như một API không có client. Nó sẵn sàng nhận và cung cấp dữ liệu, nhưng nếu API không bao giờ được gọi, thì liệu nó có thực sự là một API không? Giống như con mèo của Schrödinger, chúng ta không thể biết liệu API đang hoạt động hay trả về phản hồi HTTP 404 cho đến khi chúng ta gửi một yêu cầu đến nó.

Không có gì lạ khi một ứng dụng Spring vừa cung cấp một API vừa gửi yêu cầu đến API của ứng dụng khác. Trên thực tế, điều này ngày càng phổ biến trong thế giới microservices. Do đó, rất đáng để dành một chút thời gian tìm hiểu cách sử dụng Spring để tương tác với các API REST.

Một ứng dụng Spring có thể tiêu thụ một API REST thông qua các cách sau:

* _RestTemplate_ —— Một client REST đồng bộ, đơn giản được cung cấp bởi Spring Framework cốt lõi.
* _Traverson_ —— Một lớp bao quanh `RestTemplate` của Spring, được cung cấp bởi Spring HATEOAS, cho phép tạo client REST đồng bộ có nhận thức liên kết (hyperlink-aware). Được lấy cảm hứng từ một thư viện JavaScript cùng tên.
* _WebClient_ —— Một client REST bất đồng bộ, phản ứng (reactive).

Hiện tại, chúng ta sẽ tập trung vào việc tạo client với `RestTemplate`. Tôi sẽ để dành phần nói về `WebClient` khi chúng ta đề cập đến web framework phản ứng của Spring ở chương 12. Và nếu bạn quan tâm đến việc viết các client có nhận thức liên kết, hãy xem tài liệu Traverson tại [https://docs.spring.io/spring-hateoas/docs/current/reference/html/#client](https://docs.spring.io/spring-hateoas/docs/current/reference/html/#client)。

Có rất nhiều điều liên quan đến việc tương tác với tài nguyên REST từ góc độ client — chủ yếu là các thao tác lặp lại và mã mẫu (boilerplate). Khi làm việc với các thư viện HTTP cấp thấp, client cần phải tạo một phiên bản client và một đối tượng yêu cầu, thực thi yêu cầu, phân tích phản hồi, ánh xạ phản hồi sang các đối tượng miền (domain objects), và xử lý bất kỳ ngoại lệ nào có thể xảy ra trong quá trình đó. Và tất cả mã mẫu này sẽ được lặp lại, bất kể yêu cầu HTTP nào được gửi.

Để tránh việc viết mã mẫu như vậy, Spring cung cấp `RestTemplate`. Cũng giống như `JdbcTemplate` xử lý những phần phức tạp khi làm việc với JDBC, `RestTemplate` giúp bạn thoát khỏi sự tẻ nhạt khi tiêu thụ các tài nguyên REST.

`RestTemplate` cung cấp 41 phương thức để tương tác với tài nguyên REST. Thay vì xem xét tất cả các phương thức mà nó cung cấp, sẽ dễ dàng hơn nếu chỉ xét đến một tá thao tác duy nhất, mỗi thao tác được quá tải (overload) để tạo thành tập hợp đầy đủ 41 phương thức. 12 thao tác này được mô tả trong bảng 7.2.

**Bảng 7.2 `RestTemplate` định nghĩa 12 thao tác duy nhất, mỗi thao tác được quá tải, cung cấp tổng cộng 41 phương thức.**

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

Ngoại trừ `TRACE`, `RestTemplate` có ít nhất một phương thức cho mỗi phương thức HTTP chuẩn. Ngoài ra, `execute()` và `exchange()` cung cấp các phương thức mức thấp hơn, mục đích tổng quát để gửi yêu cầu với bất kỳ phương thức HTTP nào.

Hầu hết các phương thức trong bảng 7.2 được nạp chồng dưới ba dạng phương thức sau:

* Một dạng chấp nhận một chuỗi `String` chỉ định URL với các tham số URL được chỉ định trong danh sách đối số biến.
* Một dạng chấp nhận một chuỗi `String` chỉ định URL với các tham số URL được chỉ định trong một `Map<String,String>`.
* Một dạng chấp nhận một `java.net.URI` làm chỉ định URL, không hỗ trợ URL có tham số.

Khi bạn đã nắm rõ 12 thao tác được cung cấp bởi RestTemplate và cách mỗi dạng biến thể hoạt động, bạn sẽ sẵn sàng viết các REST client để tiêu thụ tài nguyên.

Để sử dụng RestTemplate, bạn sẽ cần tạo một thể hiện tại điểm bạn cần sử dụng, như sau:

```java
RestTemplate rest = new RestTemplate();
```

hoặc bạn có thể khai báo nó như một bean và tiêm (inject) nó vào nơi bạn cần, như được minh họa bên dưới:

```java
@Bean
public RestTemplate restTemplate() {
  return new RestTemplate();
}
```

Hãy khảo sát các thao tác của `RestTemplate` bằng cách xem xét những thao tác hỗ trợ bốn phương thức HTTP chính: `GET`, `PUT`, `DELETE`, và `POST`. Chúng ta sẽ bắt đầu với `getForObject()` và `getForEntity()` — các phương thức `GET`.
