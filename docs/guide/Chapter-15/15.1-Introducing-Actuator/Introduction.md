## 15.1 Giới thiệu về Actuator

Trong một cỗ máy, actuator (bộ chấp hành) là một thành phần chịu trách nhiệm điều khiển và di chuyển một cơ cấu. Trong một ứng dụng Spring Boot, Spring Boot Actuator đóng vai trò tương tự, cho phép chúng ta nhìn vào bên trong một ứng dụng đang chạy và, ở một mức độ nhất định, kiểm soát cách mà ứng dụng hoạt động.

Thông qua các endpoint mà Actuator cung cấp, chúng ta có thể truy vấn các thông tin liên quan đến trạng thái nội bộ của ứng dụng Spring Boot đang chạy, chẳng hạn như:

* Những thuộc tính cấu hình nào đang có trong môi trường của ứng dụng?
* Mức độ log hiện tại của các package trong ứng dụng là gì?
* Ứng dụng đang tiêu thụ bao nhiêu bộ nhớ?
* Một endpoint HTTP cụ thể đã được gọi bao nhiêu lần?
* Tình trạng của ứng dụng và các dịch vụ bên ngoài mà nó tương tác là như thế nào?

Để kích hoạt Actuator trong một ứng dụng Spring Boot, bạn chỉ cần thêm dependency starter của Actuator vào phần build. Trong file `pom.xml` của ứng dụng Spring Boot dùng Maven, một phần tử `<dependency>` như sau là đủ:  

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Sau khi dependency starter của Actuator đã có trong dự án, ứng dụng sẽ được trang bị sẵn một số endpoint Actuator mặc định, bao gồm các endpoint được mô tả trong bảng 15.1.

**Bảng 15.1：Các endpoint của Actuator để quan sát và điều khiển trạng thái của một ứng dụng Spring Boot đang chạy**

| HTTP method | Path | Description | 是否默认启用 |
| :--- | :--- | :--- | :--- |
| `GET` | /auditevents | Tạo báo cáo các sự kiện audit đã được kích hoạt | 否 |
| `GET` | /beans | Mô tả tất cả các bean trong Spring application context | 否 |
| `GET` | /conditions | Tạo báo cáo các điều kiện autoconfiguration đã thành công hoặc thất bại, dẫn đến việc các bean được tạo ra trong context | 否 |
| `GET` | /configprops | Mô tả tất cả các thuộc tính cấu hình cùng với giá trị hiện tại | 否 |
| `GET`, `POST`, `DELETE` | /env | Tạo báo cáo tất cả các nguồn thuộc tính và các thuộc tính có sẵn cho ứng dụng Spring | 否 |
| `GET` | /env/{toMatch} | Mô tả giá trị của một thuộc tính môi trường cụ thể | 否 |
| `GET` | /health | Trả về tình trạng tổng thể của ứng dụng và (có thể) của các ứng dụng phụ thuộc bên ngoài | 是 |
| `GET` | /heapdump | Tải xuống heap dump | 否 |
| `GET` | /httptrace | Tạo bản ghi trace của 100 request gần nhất | 否 |
| `GET` | /info | Trả về các thông tin do lập trình viên định nghĩa về ứng dụng | 是 |
| `GET` | /loggers | Tạo danh sách các package trong ứng dụng kèm theo các mức log đã cấu hình và đang có hiệu lực | 否 |
| `GET`，`POST` | /loggers/{name} | Trả về mức log đã cấu hình và đang có hiệu lực của một logger cụ thể; mức log đang có hiệu lực có thể được thay đổi bằng yêu cầu POST | 否 |
| `GET` | /mappings | Tạo báo cáo tất cả các HTTP mapping và các phương thức xử lý tương ứng | 否 |
| `GET` | /metrics | Trả về danh sách tất cả các loại số liệu (metrics) | 否 |
| `GET` | /metrics/{name} | Trả về tập hợp giá trị đa chiều của một metric cụ thể | 否 |
| `GET` | /scheduledtasks | Liệt kê tất cả các tác vụ đã được lên lịch | 否。 |
| `GET` | /threaddump | Trả về báo cáo về tất cả các luồng trong ứng dụng | 否 |

Ngoài các endpoint HTTP, tất cả các endpoint Actuator trong bảng 15.1 (ngoại trừ `/heapdump`) cũng được cung cấp dưới dạng JMX MBean. Chúng ta sẽ xem xét khía cạnh JMX của Actuator trong chương 17.
