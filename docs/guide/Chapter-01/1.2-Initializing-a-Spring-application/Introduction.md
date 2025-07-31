## 1.2 Initializing a Spring application

Thông qua cuốn sách này, bạn sẽ tạo ra Taco Cloud, một ứng dụng trực tuyến để đặt món ăn tuyệt vời nhất do người đàn ông tạo ra. Tất nhiên, bạn sẽ sử dụng Spring, Spring Boot, và một loạt các thư viện và khung liên quan để đạt được
mục tiêu này.

Bạn sẽ tìm thấy một số tùy chọn để khởi tạo ứng dụng Spring.Mặc dù tôi có thể hướng dẫn bạn qua các bước tạo cấu trúc thư mục dự án theo cách thủ công và xác định thông số kỹ thuật của bản dựng, nhưng việc lãng phí thời gian tốt hơn để viết mã ứng dụng. Do đó, bạn sẽ dựa vào Spring Initializr để khởi động ứng dụng của mình.

Spring Initializr vừa là một ứng dụng web dựa trên trình duyệt vừa là một API REST, có thể tạo ra một cấu trúc dự án Spring xương mà bạn có thể xác định với bất kỳ chức năng nào bạn muốn. Một số cách để sử dụng Spring Initializr như sau:

* Từ ứng dụng web tại [http://start.spring.io](http://start.spring.io)
* Từ dòng lệnh sử dụng lệnh `curl`
* Từ dòng lệnh sử dụng giao diện dòng lệnh Spring Boot
* Khi tạo một dự án mới với Spring Tool Suite
* Khi tạo một dự án mới với IntelliJ IDEA
* Khi tạo một dự án mới với Apache NetBeans

Thay vì dành một vài trang của chương này để nói về từng tùy chọn này, tôi đã thu thập những chi tiết đó trong phụ lục. Trong chương này và trong suốt cuốn sách này, tôi sẽ chỉ cho bạn cách tạo một dự án mới bằng cách sử dụng tùy chọn yêu thích của tôi: Hỗ trợ Spring Initializr trong Spring Tool Suite.

Như tên gọi của nó, Spring Tool Suite là một môi trường phát triển Spring tuyệt vời dưới dạng các tiện ích mở rộng cho Eclipse, Visual Studio Code hoặc Theia iDE. Bạn có thể tải xuống các tệp nhị phân sẵn có của Spring Tool Suite [tại https://spring.io/tools](https://spring.io/tools). Spring Tool Suite cung cấp tính năng Bảng điều khiển Spring Boot tiện dụng
giúp dễ dàng khởi động, khởi động lại và dừng các ứng dụng Spring Boot từ iDE.

Nếu bạn không phải là người dùng Spring Tool Suite, điều đó không sao; chúng ta vẫn có thể là bạn bè. Chuyển sang phụ lục và thay thế tùy chọn Initializr phù hợp nhất với bạn cho các hướng dẫn trong các phần sau. Nhưng hãy biết rằng trong suốt cuốn sách này, đôi khi tôi có thể tham khảo các tính năng cụ thể của Spring Tool Suite, chẳng hạn như Spring Boot Dashboard.Nếu bạn không sử dụng Spring Tool Suite, bạn sẽ cần điều chỉnh các hướng dẫn đó để phù hợp với iDE của mình.
