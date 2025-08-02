# Chương 7. Tạo dịch vụ REST

Chương này bao gồm

* Định nghĩa các endpoint REST trong Spring MVC  
* Các endpoint REST tự động dựa trên repository  
* Tiêu thụ các API REST  

“Trình duyệt web đã chết. Vậy bây giờ thì sao?

Vài năm trước, tôi đã nghe ai đó gợi ý rằng trình duyệt web đang dần trở thành công nghệ lỗi thời và rằng sẽ có một thứ khác thay thế nó. Nhưng điều đó có thể xảy ra sao? Cái gì có thể truất ngôi trình duyệt web gần như phổ biến khắp nơi? Làm sao chúng ta có thể truy cập số lượng ngày càng tăng của các trang web và dịch vụ trực tuyến nếu không có trình duyệt web? Chắc chắn đó là lời nói của một kẻ điên!

Nhảy vọt tới hiện tại, rõ ràng là trình duyệt web vẫn chưa biến mất. Nhưng nó không còn là phương tiện chính để truy cập internet nữa. Thiết bị di động, máy tính bảng, đồng hồ thông minh và các thiết bị điều khiển bằng giọng nói giờ đã trở nên phổ biến. Và thậm chí nhiều ứng dụng chạy trên trình duyệt cũng thực chất là các ứng dụng JavaScript chứ không đơn thuần chỉ là các nội dung được render từ phía server.

Với sự đa dạng lớn về các lựa chọn phía client như vậy, nhiều ứng dụng đã áp dụng một thiết kế chung nơi mà giao diện người dùng được đẩy gần hơn về phía client và server cung cấp một API để các loại client khác nhau có thể tương tác với chức năng backend.

Trong chương này, bạn sẽ sử dụng Spring để cung cấp một REST API cho ứng dụng Taco Cloud. Bạn sẽ sử dụng những gì đã học về Spring MVC trong chương 2 để tạo các endpoint RESTful với các controller Spring MVC. Bạn cũng sẽ tự động tạo ra các endpoint REST cho các repository Spring Data mà bạn đã định nghĩa trong chương 3 và 4. Cuối cùng, chúng ta sẽ xem xét các cách để kiểm thử và bảo mật các endpoint đó.

Nhưng trước tiên, bạn sẽ bắt đầu bằng việc viết một vài controller Spring MVC mới để cung cấp chức năng backend thông qua các endpoint REST nhằm được tiêu thụ bởi một frontend web hiện đại.
