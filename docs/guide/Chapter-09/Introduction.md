# Chương 9. Gửi tin nhắn bất đồng bộ

Chương này bao gồm

* Nhắn tin bất đồng bộ
* Gửi tin nhắn với JMS, RabbitMQ và Kafka
* Kéo tin nhắn từ bộ môi giới
* Lắng nghe tin nhắn

Bây giờ là 4:55 chiều thứ Sáu. Bạn chỉ còn vài phút nữa là bắt đầu kỳ nghỉ được mong đợi từ lâu. Bạn chỉ vừa đủ thời gian để lái xe đến sân bay và kịp chuyến bay. Nhưng trước khi đóng gói hành lý và rời đi, bạn cần đảm bảo rằng sếp và đồng nghiệp biết được tình trạng công việc bạn đang làm để họ có thể tiếp tục vào thứ Hai. Thật không may, một số đồng nghiệp đã rời khỏi văn phòng từ sớm, và sếp bạn thì đang bận họp. Bạn sẽ làm gì?

Cách thực tế nhất để thông báo tình trạng công việc và vẫn kịp ra sân bay là gửi một email nhanh cho sếp và đồng nghiệp, trình bày tiến độ công việc và hứa sẽ gửi bưu thiếp. Bạn không biết họ đang ở đâu hay khi nào họ sẽ đọc email, nhưng bạn biết chắc rằng cuối cùng họ sẽ quay lại bàn làm việc và đọc nó. Trong khi đó, bạn đã lên đường đến sân bay.

Giao tiếp _đồng bộ_, như chúng ta đã thấy với REST, có vị trí riêng của nó. Nhưng đó không phải là kiểu giao tiếp duy nhất giữa các ứng dụng mà nhà phát triển có thể sử dụng. Nhắn tin bất đồng bộ là cách để gửi gián tiếp các tin nhắn từ một ứng dụng này đến một ứng dụng khác mà không cần đợi phản hồi. Kiểu gián tiếp này giúp giảm sự phụ thuộc giữa các ứng dụng và tăng khả năng mở rộng.

Trong chương này, chúng ta sẽ sử dụng nhắn tin bất đồng bộ để gửi đơn hàng từ website Taco Cloud đến một ứng dụng khác trong nhà bếp Taco Cloud – nơi tacos sẽ được chuẩn bị. Chúng ta sẽ xem xét ba tùy chọn mà Spring cung cấp để nhắn tin bất đồng bộ: Java Message Service (JMS), RabbitMQ với giao thức Advanced Message Queueing Protocol (AMQP), và Apache Kafka. Bên cạnh việc gửi và nhận tin nhắn cơ bản, chúng ta cũng sẽ tìm hiểu cách Spring hỗ trợ POJO điều khiển bởi tin nhắn – một phương pháp nhận tin nhắn giống như các message-driven beans (MDBs) trong Enterprise JavaBeans.
