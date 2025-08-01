## 6.1 Tinh chỉnh cấu hình tự động

Trước khi chúng ta đi sâu vào các thuộc tính cấu hình, điều quan trọng là phải phân biệt được những loại cấu hình khác nhau (nhưng có liên quan) trong Spring:

* _Bean wiring_ — Cấu hình khai báo các thành phần ứng dụng sẽ được tạo thành các bean trong Spring application context và cách chúng được tiêm lẫn nhau
* _Property injection_ — Cấu hình thiết lập các giá trị cho các bean trong Spring application context

Trong cấu hình XML và Java của Spring, hai loại cấu hình này thường được khai báo rõ ràng cùng một chỗ. Trong cấu hình Java, một phương thức được chú thích `@Bean` có thể vừa tạo một bean, vừa gán giá trị cho các thuộc tính của nó. Ví dụ, hãy xem phương thức `@Bean` sau khai báo một `DataSource` cho cơ sở dữ liệu H2 nhúng:

```java
@Bean
public DataSource dataSource() {
  return new EmbeddedDatabaseBuilder()
    .setType(H2)
    .addScript("taco_schema.sql")
    .addScripts("user_data.sql", "ingredient_data.sql")
    .build();
}
```

Tại đây, các phương thức `addScript()` và `addScripts()` thiết lập một số thuộc tính kiểu `String` với tên các file script SQL sẽ được áp dụng vào cơ sở dữ liệu khi data source sẵn sàng. Đây là cách bạn có thể cấu hình một bean `DataSource` nếu bạn **không sử dụng Spring Boot** — tuy nhiên, cấu hình tự động khiến phương thức này hoàn toàn **không cần thiết**.

Nếu thư viện H2 có sẵn trong classpath lúc runtime, thì Spring Boot sẽ **tự động** tạo một bean `DataSource` phù hợp trong Spring application context và áp dụng các script SQL như `schema.sql` và `data.sql`.

Nhưng nếu bạn muốn đổi tên các file script SQL? Hoặc nếu bạn cần chỉ định nhiều hơn hai script SQL thì sao? Đó chính là lúc **thuộc tính cấu hình** phát huy tác dụng. Tuy nhiên, trước khi bạn có thể bắt đầu sử dụng các thuộc tính cấu hình, bạn cần hiểu **các thuộc tính đó đến từ đâu**.
