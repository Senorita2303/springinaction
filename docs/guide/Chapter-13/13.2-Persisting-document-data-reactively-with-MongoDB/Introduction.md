## 13.2 Lưu trữ dữ liệu tài liệu một cách phản ứng với MongoDB

Trong chương 4, chúng ta đã sử dụng Spring Data MongoDB để định nghĩa cách lưu trữ dựa trên tài liệu đối với cơ sở dữ liệu MongoDB. Trong phần này, chúng ta sẽ xem lại cách lưu trữ với MongoDB, sử dụng hỗ trợ phản ứng của Spring Data dành cho MongoDB.

Để bắt đầu, bạn cần tạo một dự án với starter **Spring Data Reactive MongoDB**. Thực tế, đây chính là tên của ô chọn khi bạn tạo dự án bằng công cụ **Initializer**.

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-mongodb-reactive</artifactId>
</dependency>
```

Trong chương 4, chúng ta cũng đã sử dụng cơ sở dữ liệu MongoDB nhúng của Flapdoodle để phục vụ kiểm thử. Đáng tiếc là Flapdoodle không hoạt động ổn định khi kết hợp với các repository phản ứng. Vì vậy, khi chạy kiểm thử, bạn cần có một cơ sở dữ liệu MongoDB thực sự đang chạy và lắng nghe tại cổng 27017.

Giờ đây, chúng ta đã sẵn sàng bắt đầu viết mã để lưu trữ MongoDB theo cách phản ứng. Chúng ta sẽ bắt đầu với các kiểu tài liệu tạo nên miền nghiệp vụ của ứng dụng.
