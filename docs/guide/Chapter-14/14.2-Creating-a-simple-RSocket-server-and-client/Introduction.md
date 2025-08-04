## 14.2 Tạo một máy chủ và máy khách RSocket đơn giản

Spring cung cấp hỗ trợ tuyệt vời cho nhắn tin với RSocket, bao gồm cả bốn mô hình giao tiếp. Để bắt đầu với RSocket, bạn cần thêm starter RSocket của Spring Boot vào phần cấu hình build của dự án. Trong tệp POM của Maven, dependency của RSocket starter sẽ trông như sau.

**Liệt kê 14.1 Dependency starter RSocket của Spring Boot**

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-rsocket</artifactId>
</dependency>
```

Dependency này được sử dụng cho cả ứng dụng máy chủ và máy khách trong giao tiếp RSocket.

>NOTE Khi chọn dependencies từ Spring Initializr, bạn có thể thấy một dependency WebSocket có tên tương tự. Mặc dù RSocket và WebSocket có tên gọi gần giống nhau và bạn có thể sử dụng WebSocket làm phương tiện truyền tải cho RSocket (chúng ta sẽ đề cập đến điều đó ở phần sau trong chương này), nhưng bạn **không cần** chọn dependency WebSocket khi làm việc với RSocket.

Tiếp theo, bạn cần quyết định mô hình giao tiếp nào là phù hợp nhất với ứng dụng của bạn. Không có một câu trả lời chung cho mọi trường hợp, vì vậy bạn nên cân nhắc lựa chọn dựa trên hành vi giao tiếp mong muốn của ứng dụng. Tuy nhiên, như bạn sẽ thấy trong các ví dụ tiếp theo, mô hình phát triển không khác nhau quá nhiều giữa các mô hình giao tiếp, nên sẽ rất dễ để chuyển đổi nếu bạn chọn nhầm ban đầu.

Hãy cùng tìm hiểu cách tạo một máy chủ và máy khách RSocket trong Spring bằng cách sử dụng từng mô hình giao tiếp. Vì mỗi mô hình giao tiếp của RSocket có đặc điểm riêng và phù hợp với các trường hợp sử dụng cụ thể, chúng ta sẽ tạm gác ứng dụng Taco Cloud lại và tìm hiểu cách áp dụng RSocket trong các miền vấn đề khác nhau. Chúng ta sẽ bắt đầu với cách áp dụng mô hình giao tiếp yêu cầu–phản hồi.
