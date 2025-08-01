# Chương 3. Làm việc với dữ liệu

Chương này bao gồm  

* Sử dụng JdbcTemplate của Spring  
* Tạo các repository Spring Data JDBC  
* Khai báo các repository JPA với Spring Data  

Hầu hết các ứng dụng không chỉ có giao diện đẹp. Mặc dù giao diện người dùng có thể cung cấp sự tương tác với ứng dụng, chính dữ liệu mà nó hiển thị và lưu trữ mới là thứ phân biệt các ứng dụng với các trang web tĩnh.

Trong ứng dụng Taco Cloud, bạn cần có khả năng quản lý thông tin về nguyên liệu, bánh taco và các đơn hàng. Nếu không có cơ sở dữ liệu để lưu trữ các thông tin này, ứng dụng sẽ không thể tiến xa hơn những gì bạn đã phát triển trong chương 2.

Trong chương này, bạn sẽ thêm khả năng lưu trữ dữ liệu vào ứng dụng Taco Cloud. Bạn sẽ bắt đầu bằng cách sử dụng hỗ trợ JDBC (Java Database Connectivity) của Spring để loại bỏ mã dư thừa. Sau đó, bạn sẽ chỉnh sửa lại các repository dữ liệu để làm việc với JPA (Java Persistence API), từ đó loại bỏ thêm nhiều đoạn mã không cần thiết.
