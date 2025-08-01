# Chương 6. Làm việc với các thuộc tính cấu hình

Chương này bao gồm

* Tinh chỉnh các bean được cấu hình tự động
* Áp dụng các thuộc tính cấu hình cho các thành phần trong ứng dụng
* Làm việc với các profile của Spring

Bạn còn nhớ khi chiếc iPhone đầu tiên ra mắt không? Một tấm kim loại và kính nhỏ bé hầu như không phù hợp với định nghĩa mà thế giới từng biết về một chiếc điện thoại. Thế nhưng, nó đã mở ra kỷ nguyên smartphone hiện đại, thay đổi hoàn toàn cách chúng ta giao tiếp. Mặc dù điện thoại cảm ứng dễ sử dụng và mạnh mẽ hơn nhiều so với người tiền nhiệm là điện thoại gập, khi iPhone lần đầu tiên được công bố, thật khó để hình dung một thiết bị chỉ có một nút bấm lại có thể dùng để thực hiện cuộc gọi.

Theo một cách nào đó, cấu hình tự động của Spring Boot cũng giống như vậy. Cấu hình tự động giúp đơn giản hóa đáng kể việc phát triển ứng dụng Spring. Nhưng sau một thập kỷ đặt giá trị thuộc tính trong file cấu hình XML của Spring và gọi các phương thức setter trên các instance của bean, không dễ để hình dung cách thiết lập các thuộc tính cho những bean không được cấu hình rõ ràng.

May mắn thay, Spring Boot cung cấp một cách để thiết lập giá trị thuộc tính cho các thành phần ứng dụng thông qua các thuộc tính cấu hình. Các thuộc tính cấu hình chỉ đơn giản là các thuộc tính trên những bean được đánh dấu bằng `@ConfigurationProperties` trong context của ứng dụng Spring. Spring sẽ tự động tiêm giá trị từ một trong nhiều nguồn khác nhau — bao gồm các thuộc tính hệ thống JVM, đối số dòng lệnh, và biến môi trường — vào các thuộc tính của bean. Chúng ta sẽ thấy cách sử dụng `@ConfigurationProperties` trên các bean tự định nghĩa ở phần 6.2. Nhưng trước hết, Spring Boot đã cung cấp sẵn một số bean có đánh dấu `@ConfigurationProperties` mà chúng ta sẽ cấu hình đầu tiên.

Trong chương này, bạn sẽ tạm thời dừng việc triển khai các tính năng mới cho ứng dụng Taco Cloud để tìm hiểu về các thuộc tính cấu hình. Những kiến thức thu nhận được chắc chắn sẽ hữu ích khi bạn tiếp tục ở các chương tiếp theo. Chúng ta sẽ bắt đầu bằng việc xem cách sử dụng các thuộc tính cấu hình để tinh chỉnh những gì Spring Boot tự động cấu hình.
