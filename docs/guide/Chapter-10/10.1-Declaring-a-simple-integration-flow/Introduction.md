## 10.1 Khai báo một luồng tích hợp đơn giản

Nói chung, Spring Integration cho phép tạo ra các luồng tích hợp (integration flow) thông qua đó một ứng dụng có thể nhận hoặc gửi dữ liệu tới một tài nguyên bên ngoài ứng dụng. Một tài nguyên như vậy mà ứng dụng có thể tích hợp là hệ thống tập tin (filesystem). Do đó, trong số nhiều thành phần của Spring Integration có các bộ điều hợp kênh (channel adapter) để đọc và ghi tập tin.

Để bắt đầu làm quen với Spring Integration, bạn sẽ tạo một luồng tích hợp ghi dữ liệu vào hệ thống tập tin. Để bắt đầu, bạn cần thêm Spring Integration vào cấu hình xây dựng dự án. Với Maven, các phụ thuộc cần thiết như sau:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-integration</artifactId>
</dependency>​
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-integration-file</artifactId>
</dependency>
```

Phụ thuộc đầu tiên là Spring Boot starter cho Spring Integration. Phụ thuộc này là thiết yếu để phát triển một luồng Spring Integration, bất kể luồng đó tích hợp với cái gì. Như tất cả các starter của Spring Boot, nó có sẵn dưới dạng một ô chọn trong biểu mẫu Initializr¹.

Phụ thuộc thứ hai là cho mô-đun endpoint file của Spring Integration. Đây là một trong hơn hai chục mô-đun endpoint được dùng để tích hợp với các hệ thống bên ngoài. Chúng ta sẽ nói nhiều hơn về các mô-đun endpoint trong mục 10.2.9. Nhưng hiện tại, hãy biết rằng mô-đun endpoint file cung cấp khả năng nhận tập tin từ hệ thống tập tin vào luồng tích hợp và/hoặc ghi dữ liệu từ một luồng ra hệ thống tập tin.

Tiếp theo, bạn cần tạo một cách để ứng dụng gửi dữ liệu vào một luồng tích hợp sao cho dữ liệu đó có thể được ghi ra tập tin. Để làm điều đó, bạn sẽ tạo một interface gateway, như minh họa dưới đây.

**Liệt kê 10.1 Giao diện message gateway để chuyển lời gọi phương thức thành thông điệp**

```java
package sia6;

import org.springframework.integration.annotation.MessagingGateway;
import org.springframework.integration.file.FileHeaders;
import org.springframework.messaging.handler.annotation.Header;

@MessagingGateway(defaultRequestChannel="textInChannel")
public interface FileWriterGateway {

  void writeToFile(
      @Header(FileHeaders.FILENAME) String filename,
      String data);

}
```

Mặc dù chỉ là một interface Java đơn giản, `FileWriterGateway` lại mang nhiều ý nghĩa. Điều đầu tiên bạn sẽ chú ý là interface này được đánh dấu bằng `@MessagingGateway`. Annotation này báo cho Spring Integration tạo ra một hiện thực của interface này tại thời gian chạy — tương tự như cách Spring Data tự động tạo ra hiện thực của các interface repository. Các phần khác của mã sẽ sử dụng interface này khi cần ghi ra tập tin.

Thuộc tính `defaultRequestChannel` của `@MessagingGateway` cho biết rằng bất kỳ thông điệp nào sinh ra từ lời gọi các phương thức của interface này nên được gửi đến kênh thông điệp được chỉ định. Trong trường hợp này, bạn chỉ ra rằng các thông điệp kết quả từ việc gọi `writeToFile()` nên được gửi đến kênh có tên là `textInChannel`.

Về phương thức `writeToFile()`, nó nhận vào một tên tập tin dưới dạng `String`, và một `String` khác chứa nội dung văn bản cần ghi ra tập tin. Điều đáng chú ý trong chữ ký phương thức này là tham số `filename` được chú thích bằng `@Header`. Trong trường hợp này, annotation `@Header` chỉ ra rằng giá trị được truyền vào `filename` sẽ được đặt vào phần header của thông điệp (được xác định là `FileHeaders.FILENAME`, là một hằng số trong lớp `FileHeaders`, có giá trị `"file_name"`), thay vì trong payload của thông điệp. Ngược lại, giá trị của tham số `data` sẽ được chứa trong payload của thông điệp.

Giờ đây bạn đã tạo một message gateway, tiếp theo là cấu hình luồng tích hợp. Mặc dù phụ thuộc starter Spring Integration mà bạn đã thêm vào build sẽ kích hoạt autoconfiguration thiết yếu cho Spring Integration, bạn vẫn cần viết thêm các cấu hình để định nghĩa các luồng phù hợp với nhu cầu của ứng dụng. Có ba tùy chọn cấu hình để khai báo các luồng tích hợp:

* Cấu hình bằng XML
* Cấu hình bằng Java
* Cấu hình Java sử dụng DSL

Chúng ta sẽ xem xét cả ba kiểu cấu hình này của Spring Integration, bắt đầu với kiểu cũ — cấu hình bằng XML.
