## 9.1 Gửi tin nhắn với JMS

JMS là một tiêu chuẩn Java định nghĩa API chung để làm việc với các trình môi giới tin nhắn (message broker). Được giới thiệu lần đầu vào năm 2001, JMS đã trở thành phương pháp phổ biến để nhắn tin bất đồng bộ trong Java trong một thời gian dài. Trước JMS, mỗi trình môi giới tin nhắn đều có API riêng biệt, khiến mã nguồn xử lý tin nhắn của ứng dụng kém linh hoạt và khó di chuyển giữa các broker khác nhau. Nhưng với JMS, tất cả các triển khai tuân thủ chuẩn đều có thể được làm việc thông qua một giao diện chung, tương tự như cách JDBC cung cấp một giao diện chung cho thao tác với cơ sở dữ liệu quan hệ.

Spring hỗ trợ JMS thông qua một lớp trừu tượng dựa trên mẫu gọi là `JmsTemplate`. Sử dụng `JmsTemplate`, bạn có thể dễ dàng gửi tin nhắn đến các hàng đợi (queue) và chủ đề (topic) từ phía nhà sản xuất (producer) và nhận tin nhắn từ phía người tiêu dùng (consumer). Spring cũng hỗ trợ khái niệm POJO điều khiển bằng tin nhắn (message-driven POJO): các đối tượng Java đơn giản phản hồi tin nhắn đến hàng đợi hoặc chủ đề theo cách bất đồng bộ.

Chúng ta sẽ khám phá cách Spring hỗ trợ JMS, bao gồm `JmsTemplate` và các POJO điều khiển bằng tin nhắn. Trọng tâm sẽ là hỗ trợ JMS trong Spring, nhưng nếu bạn muốn tìm hiểu sâu hơn về JMS, hãy xem cuốn _ActiveMQ in Action_ của Bruce Snyder, Dejan Bosanac và Rob Davies (Manning, 2011).

Trước khi có thể gửi và nhận tin nhắn, bạn cần một trình môi giới tin nhắn (message broker) sẵn sàng để chuyển tiếp các tin nhắn giữa nhà sản xuất và người tiêu dùng. Hãy bắt đầu việc khám phá JMS trong Spring bằng cách thiết lập một trình môi giới tin nhắn trong Spring.
