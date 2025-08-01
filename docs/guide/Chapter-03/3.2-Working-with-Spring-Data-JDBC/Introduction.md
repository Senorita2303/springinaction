### 3.2 Làm việc với Spring Data JDBC

Dự án Spring Data là một dự án lớn bao gồm nhiều dự án con, hầu hết tập trung vào việc lưu trữ dữ liệu với nhiều loại cơ sở dữ liệu khác nhau. Một vài dự án Spring Data phổ biến bao gồm:

* _Spring Data JDBC_ —— Lưu trữ dữ liệu JDBC với cơ sở dữ liệu quan hệ
* _Spring Data JPA_ —— Lưu trữ dữ liệu JPA với cơ sở dữ liệu quan hệ
* _Spring Data MongoDB_ —— Lưu trữ dữ liệu với cơ sở dữ liệu tài liệu MongoDB
* _Spring Data Neo4j_ —— Lưu trữ dữ liệu với cơ sở dữ liệu đồ thị Neo4j
* _Spring Data Redis_ —— Lưu trữ dữ liệu với kho key-value Redis
* _Spring Data Cassandra_ —— Lưu trữ dữ liệu với cơ sở dữ liệu dạng cột Cassandra

Một trong những tính năng thú vị và hữu ích nhất được cung cấp bởi Spring Data cho tất cả các dự án này là khả năng tự động tạo các repository dựa trên một interface khai báo repository. Do đó, việc lưu trữ dữ liệu với các dự án Spring Data hầu như không cần logic lưu trữ, và chỉ yêu cầu viết một hoặc nhiều interface repository.

Hãy cùng xem cách áp dụng Spring Data JDBC vào dự án của chúng ta để đơn giản hóa việc lưu trữ dữ liệu với JDBC. Trước tiên, bạn cần thêm Spring Data JDBC vào cấu hình build của dự án.
