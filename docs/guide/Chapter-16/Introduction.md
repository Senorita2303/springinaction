# Chương 16. Quản trị Spring

Chương này bao gồm

* Thiết lập Spring Boot Admin
* Đăng ký các ứng dụng client
* Làm việc với các endpoint của Actuator
* Bảo mật máy chủ Admin

Một bức ảnh có giá trị hơn ngàn lời nói (người ta thường nói vậy), và đối với nhiều người dùng ứng dụng, một ứng dụng web thân thiện với người dùng còn đáng giá hơn cả ngàn lời gọi API. Đừng hiểu lầm tôi, tôi là một người nghiện dòng lệnh và là fan cứng của việc sử dụng `curl` và HTTPie để gọi các REST API. Nhưng đôi khi, việc gõ lệnh thủ công để gọi một endpoint REST và rồi kiểm tra kết quả bằng mắt thường có thể kém hiệu quả hơn so với việc chỉ cần nhấp vào một liên kết và đọc kết quả trong trình duyệt web.

Trong chương trước, chúng ta đã khám phá tất cả các HTTP endpoint được Actuator của Spring Boot cung cấp. Vì chúng là các endpoint HTTP trả về kết quả dạng JSON, nên không có giới hạn nào cho cách sử dụng chúng. Trong chương này, chúng ta sẽ xem cách xây dựng một giao diện người dùng (UI) phía frontend phía trên Actuator để giúp việc sử dụng dễ dàng hơn, cũng như thu thập dữ liệu thời gian thực mà nếu dùng Actuator trực tiếp thì sẽ khó tiếp cận.
