## 4.1 Làm việc với Cassandra Repository

Cassandra là một cơ sở dữ liệu NoSQL kiểu cột phân vùng, phân tán, hiệu suất cao, luôn sẵn sàng, nhất quán theo thời gian, và có khả năng mở rộng theo chiều ngang.

Đó là một loạt các tính từ để mô tả một cơ sở dữ liệu, nhưng mỗi từ đều chính xác phản ánh sức mạnh khi làm việc với Cassandra. Nói một cách đơn giản hơn, Cassandra lưu trữ các hàng dữ liệu trong các bảng, được phân vùng trên một hoặc nhiều node phân tán. Không có node nào chứa toàn bộ dữ liệu, nhưng bất kỳ hàng dữ liệu nào cũng có thể được sao chép trên nhiều node, qua đó loại bỏ điểm lỗi đơn lẻ.

Spring Data Cassandra cung cấp hỗ trợ repository tự động cho cơ sở dữ liệu Cassandra, khá giống—nhưng cũng khác biệt—so với những gì Spring Data JPA cung cấp cho cơ sở dữ liệu quan hệ. Ngoài ra, Spring Data Cassandra còn cung cấp các annotation để ánh xạ các kiểu miền trong ứng dụng với các cấu trúc dữ liệu trong cơ sở dữ liệu.

Trước khi chúng ta tìm hiểu sâu hơn về Cassandra, điều quan trọng là phải hiểu rằng mặc dù Cassandra có nhiều khái niệm tương tự với cơ sở dữ liệu quan hệ như Oracle và SQL Server, nhưng Cassandra không phải là một cơ sở dữ liệu quan hệ và ở nhiều khía cạnh thì nó hoàn toàn khác biệt. Tôi sẽ giải thích các đặc thù của Cassandra khi làm việc với Spring Data. Tuy nhiên, tôi khuyến khích bạn đọc tài liệu chính thức của Cassandra tại [http://cassandra.apache.org/doc/latest/](http://cassandra.apache.org/doc/latest/) để hiểu sâu hơn về cách hoạt động của nó.

Hãy bắt đầu bằng cách bật tính năng Spring Data Cassandra trong dự án Taco Cloud.
