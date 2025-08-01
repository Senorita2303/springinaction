# Chương 4. Làm việc với dữ liệu phi quan hệ

Chương này bao gồm

* Lưu trữ dữ liệu vào Cassandra  
* Mô hình hóa dữ liệu trong Cassandra  
* Làm việc với dữ liệu tài liệu trong MongoDB  

Người ta thường nói rằng sự đa dạng là gia vị của cuộc sống.

Bạn có thể có một hương vị kem yêu thích. Đó là hương vị bạn chọn thường xuyên nhất vì nó thỏa mãn cơn thèm ngọt mịn màng hơn bất kỳ hương vị nào khác. Nhưng hầu hết mọi người, mặc dù có một hương vị yêu thích, vẫn thử những hương vị khác nhau theo thời gian để thay đổi không khí.

Cơ sở dữ liệu cũng giống như kem vậy. Trong hàng thập kỷ, cơ sở dữ liệu quan hệ là hương vị ưa thích để lưu trữ dữ liệu. Nhưng ngày nay, chúng ta có nhiều lựa chọn hơn bao giờ hết. Các cơ sở dữ liệu “NoSQL” [https://aws.amazon.com/nosql/](https://aws.amazon.com/nosql/) mang đến những khái niệm và cấu trúc khác nhau để lưu trữ dữ liệu. Và mặc dù việc lựa chọn có thể vẫn phần nào dựa trên sở thích, một số cơ sở dữ liệu lại phù hợp hơn với việc lưu trữ những loại dữ liệu khác nhau.

May mắn thay, Spring Data hỗ trợ nhiều loại cơ sở dữ liệu NoSQL, bao gồm MongoDB, Cassandra, Couchbase, Neo4j, Redis và nhiều loại khác. Và thật may mắn, mô hình lập trình gần như giống nhau, bất kể bạn chọn cơ sở dữ liệu nào.

Không đủ không gian trong chương này để trình bày tất cả các cơ sở dữ liệu mà Spring Data hỗ trợ. Nhưng để bạn có cái nhìn sơ bộ về các “hương vị” khác của Spring Data, chúng ta sẽ xem xét hai cơ sở dữ liệu NoSQL phổ biến là Cassandra và MongoDB, và tìm hiểu cách tạo các repository để lưu trữ dữ liệu vào đó. Hãy bắt đầu với cách tạo repository Cassandra bằng Spring Data.
