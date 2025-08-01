## 3.3 Lưu trữ dữ liệu với Spring Data JPA

Trong khi Spring Data JDBC giúp việc lưu trữ dữ liệu trở nên dễ dàng, thì Java Persistence API (JPA) là một lựa chọn phổ biến khác để làm việc với dữ liệu trong cơ sở dữ liệu quan hệ. Spring Data JPA cung cấp một cách tiếp cận để lưu trữ với JPA tương tự như những gì Spring Data JDBC đã mang lại cho JDBC.

Để thấy cách Spring Data hoạt động, bạn sẽ bắt đầu lại, thay thế các repository dựa trên JDBC từ phần trước của chương này bằng các repository được tạo ra bởi Spring Data JPA. Nhưng trước tiên, bạn cần thêm Spring Data JPA vào cấu hình build của dự án.
