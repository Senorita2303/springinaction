## 2.5 Lựa chọn thư viện mẫu (view template) cho giao diện

Phần lớn, việc lựa chọn thư viện template giao diện là vấn đề thuộc về sở thích cá nhân. Spring rất linh hoạt và hỗ trợ nhiều tùy chọn template phổ biến. Với một vài ngoại lệ nhỏ, thư viện template mà bạn chọn thực ra sẽ không cần biết nó đang được sử dụng cùng với Spring.

**Bảng 2.2 Các tùy chọn template được hỗ trợ**

| Template | Spring Boot starter dependency |
| :--- | :--- |
| FreeMarker | spring-boot-starter-freemarker |
| Groovy Templates | spring-boot-starter-groovy-templates |
| JavaServer Page （JSP） | None （provided by Tomcat or Jetty） |
| Mustache | spring-boot-starter-mustache |
| Thymeleaf | spring-boot-starter-thymeleaf |

Nói chung, bạn chỉ cần chọn thư viện template mà bạn muốn sử dụng, thêm nó như một dependency vào tệp build, và bắt đầu viết các template trong thư mục `/templates` (nằm dưới thư mục `src/main/resources` trong một dự án Maven hoặc Gradle). Spring Boot sẽ phát hiện ra thư viện template bạn chọn và tự động cấu hình các thành phần cần thiết để nó có thể phục vụ các view cho controller của Spring MVC.

Bạn đã làm điều này với Thymeleaf cho ứng dụng Taco Cloud. Trong chương 1, bạn đã chọn checkbox Thymeleaf khi khởi tạo dự án. Điều này dẫn đến việc thư viện khởi động Thymeleaf của Spring Boot được thêm vào tệp `pom.xml`. Khi ứng dụng được khởi động, Spring Boot autoconfiguration sẽ phát hiện sự có mặt của Thymeleaf và tự động cấu hình các bean của Thymeleaf cho bạn. Tất cả những gì bạn cần làm là bắt đầu viết các template trong `/templates`.

Nếu bạn muốn sử dụng một thư viện template khác, bạn chỉ cần chọn nó trong lúc khởi tạo dự án hoặc chỉnh sửa tệp cấu hình build hiện tại để bao gồm thư viện template mới bạn chọn.

Ví dụ, giả sử bạn muốn sử dụng Mustache thay vì Thymeleaf. Không vấn đề gì. Chỉ cần truy cập tệp `pom.xml` của dự án và thay thế như sau.  

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

bằng với:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mustache</artifactId>
</dependency>
```

Dĩ nhiên, bạn cần chắc chắn rằng tất cả các template được viết theo cú pháp Mustache thay vì sử dụng các thẻ Thymeleaf. Cách sử dụng Mustache (hoặc bất kỳ ngôn ngữ template nào khác) không nằm trong phạm vi cuốn sách này. Nhưng để bạn có hình dung, đây là một đoạn mã mẫu trong Mustache sẽ hiển thị một nhóm nguyên liệu trong biểu mẫu thiết kế taco:

```html
<h3>Designate your wrap:</h3>
<div>
  <input name="ingredients" type="checkbox" value="{{id}}" />
  <span>{{name}}</span><br/>
</div>
```

Đây là đoạn mã tương đương trong Mustache của đoạn Thymeleaf trong mục 2.1.3. Khối `wrap` (kết thúc với `/wrap`) lặp qua một danh sách trong thuộc tính request có key là `wrap` và render HTML được nhúng cho từng phần tử. Các thẻ `{{id}}` và `{{name}}` tham chiếu đến các thuộc tính `id` và `name` của phần tử (vốn nên là một đối tượng `Ingredient`).

Bạn sẽ thấy trong bảng 2.2 rằng JSP không yêu cầu bất kỳ dependency đặc biệt nào trong tệp cấu hình build. Đó là bởi vì container servlet (Tomcat mặc định) đã triển khai đặc tả JSP.

Tuy nhiên, có một lưu ý quan trọng nếu bạn chọn sử dụng JSP. Hóa ra, các container servlet của Java — bao gồm cả các container nhúng như Tomcat và Jetty — thường tìm kiếm file JSP ở đâu đó trong thư mục `/WEB-INF`. Nhưng nếu bạn đang xây dựng ứng dụng dưới dạng một tệp JAR thực thi, thì không có cách nào để đáp ứng yêu cầu đó. Do đó, JSP chỉ là một lựa chọn nếu bạn đang xây dựng ứng dụng dưới dạng tệp WAR và triển khai nó trong một container servlet truyền thống. Nếu bạn đang xây dựng tệp JAR thực thi, bạn phải chọn Thymeleaf, FreeMarker, hoặc một trong những tùy chọn khác trong bảng 2.2.
