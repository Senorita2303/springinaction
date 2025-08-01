# Chương 10. Tích hợp với Spring

Chương này bao gồm

* Xử lý dữ liệu theo thời gian thực
* Định nghĩa luồng tích hợp
* Sử dụng định nghĩa Java DSL của Spring Integration
* Tích hợp với email, hệ thống tập tin và các hệ thống bên ngoài khác

Một trong những điều khiến tôi cảm thấy khó chịu nhất khi di chuyển là việc phải ngồi trên một chuyến bay dài mà kết nối internet trên máy bay lại yếu hoặc không tồn tại. Tôi thường tận dụng thời gian bay để làm việc, bao gồm cả việc viết nhiều trang của cuốn sách này. Nếu không có kết nối mạng, tôi sẽ gặp bất lợi khi cần tải về một thư viện hoặc tra cứu Javadoc, và tôi không thể làm được nhiều việc. Tôi đã học cách mang theo một cuốn sách để đọc trong những trường hợp như vậy.

Cũng giống như việc chúng ta cần kết nối internet để làm việc hiệu quả, nhiều ứng dụng cũng cần kết nối với các hệ thống bên ngoài để thực hiện công việc của chúng. Một ứng dụng có thể cần đọc hoặc gửi email, tương tác với một API bên ngoài, hoặc phản ứng với dữ liệu được ghi vào cơ sở dữ liệu. Và khi dữ liệu được nhận vào hoặc gửi ra từ các hệ thống bên ngoài này, ứng dụng có thể cần xử lý dữ liệu theo một cách nào đó để chuyển đổi dữ liệu đến hoặc đi từ miền dữ liệu riêng của ứng dụng.

Trong chương này, bạn sẽ thấy cách áp dụng các mẫu tích hợp phổ biến với Spring Integration. Spring Integration là một triển khai sẵn sàng sử dụng của nhiều mẫu tích hợp được mô tả trong _Enterprise Integration Patterns_ bởi Gregor Hohpe và Bobby Woolf (Addison-Wesley, 2003). Mỗi mẫu được triển khai dưới dạng một thành phần mà qua đó các thông điệp (message) sẽ truyền dữ liệu theo kiểu pipeline. Bằng cách sử dụng cấu hình Spring, bạn có thể lắp ráp các thành phần này thành một pipeline để dữ liệu có thể luân chuyển. Hãy bắt đầu bằng cách định nghĩa một luồng tích hợp đơn giản nhằm giới thiệu nhiều tính năng và đặc điểm khi làm việc với Spring Integration.
