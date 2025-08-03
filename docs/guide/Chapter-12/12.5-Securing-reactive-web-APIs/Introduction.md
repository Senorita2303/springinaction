## 12.5 Bảo mật các API web phản ứng

Từ khi Spring Security xuất hiện (và thậm chí trước đó, khi nó còn được gọi là Acegi Security), mô hình bảo mật web của nó đã được xây dựng dựa trên các bộ lọc servlet. Điều này rất hợp lý. Nếu bạn cần chặn một yêu cầu gửi đến một framework web dựa trên servlet để đảm bảo rằng người gửi có quyền phù hợp, thì bộ lọc servlet là một lựa chọn hiển nhiên. Tuy nhiên, Spring WebFlux lại làm thay đổi cách tiếp cận này.

Khi viết một ứng dụng web với Spring WebFlux, không có gì đảm bảo rằng servlet sẽ tham gia vào quá trình xử lý. Trên thực tế, một ứng dụng web phản ứng thường có xu hướng được xây dựng trên Netty hoặc một máy chủ phi servlet khác. Điều này có nghĩa là không thể sử dụng Spring Security dựa trên bộ lọc servlet để bảo vệ các ứng dụng Spring WebFlux?

Đúng là việc sử dụng các bộ lọc servlet không phải là một lựa chọn khi bảo vệ ứng dụng Spring WebFlux. Nhưng Spring Security vẫn có thể đảm nhiệm công việc này. Bắt đầu từ phiên bản 5.0.0, bạn có thể sử dụng Spring Security để bảo vệ cả hai loại ứng dụng: dựa trên servlet (Spring MVC) và phản ứng (Spring WebFlux). Nó thực hiện điều này thông qua `WebFilter` của Spring, một thành phần tương tự với bộ lọc servlet nhưng không yêu cầu phụ thuộc vào API servlet.

Điều đáng chú ý hơn nữa là mô hình cấu hình của Spring Security phản ứng không khác biệt nhiều so với những gì bạn đã thấy trong chương 4. Trên thực tế, không giống như Spring WebFlux – vốn có một phần phụ thuộc riêng biệt với Spring MVC – Spring Security chỉ sử dụng một starter bảo mật duy nhất của Spring Boot, bất kể bạn định sử dụng nó để bảo vệ một ứng dụng web Spring MVC hay một ứng dụng viết bằng Spring WebFlux. Để nhắc lại, đây là cách phần phụ thuộc starter bảo mật được định nghĩa:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

Điều đó nói lên rằng, vẫn có một vài điểm khác biệt nhỏ giữa mô hình cấu hình phản ứng và không phản ứng của Spring Security. Sẽ rất đáng để dành chút thời gian để so sánh nhanh hai mô hình cấu hình này.
