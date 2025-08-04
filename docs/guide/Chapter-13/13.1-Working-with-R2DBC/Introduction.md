## 13.1 Làm việc với R2DBC

Reactive Relational Database Connectivity, hay gọi tắt là R2DBC [https://r2dbc.io/](https://r2dbc.io/), là một lựa chọn tương đối mới để làm việc với dữ liệu quan hệ bằng cách sử dụng các kiểu dữ liệu phản ứng (reactive types). Đây thực chất là một giải pháp thay thế mang tính phản ứng cho JDBC, cho phép lưu trữ dữ liệu không đồng bộ (nonblocking) với các cơ sở dữ liệu quan hệ truyền thống như MySQL, PostgreSQL, H2 và Oracle. Vì được xây dựng trên Reactive Streams, R2DBC khá khác biệt so với JDBC và là một đặc tả riêng biệt, không liên quan đến Java SE.

Spring Data R2DBC là một tiểu dự án của Spring Data, cung cấp hỗ trợ repository tự động cho R2DBC, tương tự như Spring Data JDBC mà chúng ta đã tìm hiểu ở chương 3. Tuy nhiên, khác với Spring Data JDBC, Spring Data R2DBC không yêu cầu phải tuân thủ chặt chẽ các khái niệm thiết kế hướng miền (domain-driven design). Thực tế, như bạn sắp thấy, việc cố gắng lưu trữ dữ liệu thông qua một aggregate root đòi hỏi phải làm nhiều việc hơn với Spring Data R2DBC so với Spring Data JDBC.

Để sử dụng Spring Data R2DBC, bạn cần thêm một dependency starter vào cấu hình build của dự án. Với dự án sử dụng Maven, dependency sẽ như sau:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-r2dbc</artifactId>
</dependency>
```

Hoặc nếu bạn sử dụng Spring Initializr, hãy chọn vào ô Spring Data R2DBC khi tạo dự án.

Bạn cũng cần có một cơ sở dữ liệu quan hệ để lưu trữ dữ liệu, cùng với một driver R2DBC tương ứng. Trong dự án của chúng ta, ta sẽ sử dụng cơ sở dữ liệu H2 trong bộ nhớ (in-memory). Do đó, ta cần thêm hai dependency: thư viện cơ sở dữ liệu H2 và driver H2 R2DBC. Các dependency Maven như sau:

```xml
<dependency>
  <groupId>com.h2database</groupId>
  <artifactId>h2</artifactId>
  <scope>runtime</scope>
</dependency>
<dependency>
  <groupId>io.r2dbc</groupId>
  <artifactId>r2dbc-h2</artifactId>
  <scope>runtime</scope>
</dependency>
```

Nếu bạn sử dụng cơ sở dữ liệu khác, thì cần thêm dependency tương ứng với driver R2DBC của cơ sở dữ liệu bạn chọn.

Bây giờ khi các dependency đã được thêm vào, hãy cùng tìm hiểu cách Spring Data R2DBC hoạt động. Trước tiên, chúng ta sẽ định nghĩa các thực thể miền (domain entities).
