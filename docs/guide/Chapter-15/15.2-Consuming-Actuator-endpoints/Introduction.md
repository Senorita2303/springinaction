## 15.2 Sử dụng các endpoint của Actuator

Actuator có thể cung cấp một kho tàng thông tin thú vị và hữu ích về một ứng dụng đang chạy thông qua các endpoint HTTP được liệt kê trong bảng 15.1. Vì là các endpoint HTTP, chúng có thể được sử dụng giống như bất kỳ API REST nào, bằng bất kỳ client HTTP nào mà bạn muốn, bao gồm `RestTemplate` và `WebClient` của Spring, từ một ứng dụng JavaScript, hoặc đơn giản chỉ bằng công cụ dòng lệnh `curl`.

Để khám phá các endpoint của Actuator, trong chương này chúng ta sẽ sử dụng công cụ dòng lệnh `curl`. Trong chương 16, tôi sẽ giới thiệu bạn với Spring Boot Admin, một ứng dụng web thân thiện với người dùng được xây dựng trên nền tảng các endpoint của Actuator.

Để có cái nhìn tổng quan về các endpoint mà Actuator cung cấp, một yêu cầu `GET` đến đường dẫn gốc của Actuator sẽ trả về các liên kết HATEOAS đến từng endpoint. Khi sử dụng `curl` để gửi yêu cầu đến `/actuator`, bạn có thể nhận được phản hồi giống như sau (đã rút gọn để tiết kiệm không gian):

```bash
$ curl localhost:8081/actuator
{
    "_links": {
        "self": {
            "href": "http://localhost:8081/actuator",
            "templated": false
        },
        "auditevents": {
            "href": "http://localhost:8081/actuator/auditevents",
            "templated": false
        },
        "beans": {
            "href": "http://localhost:8081/actuator/beans",
            "templated": false
        },
        "health": {
            "href": "http://localhost:8081/actuator/health",
            "templated": false
        }
    },
    ...
}
```

Vì các thư viện khác nhau có thể tự bổ sung thêm các endpoint Actuator riêng của chúng, và vì một số endpoint có thể không được export, nên kết quả thực tế có thể khác nhau giữa các ứng dụng.

Dù thế nào đi nữa, tập hợp các liên kết được trả về từ đường dẫn gốc của Actuator đóng vai trò như một bản đồ hướng dẫn mọi thứ mà Actuator cung cấp. Hãy bắt đầu hành trình khám phá hệ sinh thái Actuator với hai endpoint cung cấp thông tin thiết yếu về ứng dụng: các endpoint `/health` và `/info`.
