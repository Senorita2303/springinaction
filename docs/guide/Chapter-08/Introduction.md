# Chương 8. Bảo mật REST

Chương này bao gồm

* Bảo mật API với OAuth 2  
* Tạo máy chủ cấp quyền (authorization server)  
* Thêm máy chủ tài nguyên (resource server) vào API  
* Tiêu thụ API được bảo mật bằng OAuth 2  

Bạn đã bao giờ sử dụng dịch vụ gửi xe hộ (valet parking) chưa? Đó là một khái niệm đơn giản: bạn đưa chìa khóa xe cho nhân viên gửi xe gần lối vào của cửa hàng, khách sạn, rạp chiếu phim hoặc nhà hàng, và họ sẽ lo việc tìm chỗ đậu xe giúp bạn. Sau đó, họ trả lại xe khi bạn yêu cầu. Có thể là vì tôi đã xem phim _Ferris Bueller’s Day Off_ quá nhiều lần, nhưng tôi luôn do dự khi phải giao chìa khóa xe cho người lạ và hy vọng rằng họ sẽ chăm sóc xe cẩn thận.

Tuy vậy, gửi xe hộ yêu cầu bạn phải tin tưởng người khác để chăm sóc xe của mình. Nhiều xe hiện đại cung cấp một “chìa khóa gửi xe” (valet key), một loại chìa khóa đặc biệt chỉ có thể dùng để mở cửa xe và khởi động động cơ. Như vậy, phạm vi tin tưởng mà bạn cấp cho người khác được giới hạn. Nhân viên gửi xe sẽ không thể mở cốp xe hoặc ngăn chứa đồ với chìa khóa này.

Trong một ứng dụng phân tán, sự tin tưởng giữa các hệ thống phần mềm là rất quan trọng. Ngay cả trong những tình huống đơn giản, khi một ứng dụng khách truy cập vào một API phía sau, điều quan trọng là phải đảm bảo rằng ứng dụng khách đó được tin cậy, và những kẻ khác cố gắng truy cập cùng API đó sẽ bị chặn. Và cũng giống như trường hợp gửi xe, mức độ tin tưởng mà bạn cấp cho một ứng dụng khách nên được giới hạn chỉ ở những chức năng cần thiết để nó hoàn thành nhiệm vụ.

Bảo mật một REST API khác với bảo mật một ứng dụng web dựa trên trình duyệt. Trong chương này, chúng ta sẽ tìm hiểu về OAuth 2, một đặc tả ủy quyền được tạo ra đặc biệt để bảo mật API. Khi làm điều đó, chúng ta cũng sẽ khám phá cách Spring Security hỗ trợ OAuth 2. Nhưng trước tiên, hãy tìm hiểu cách hoạt động của OAuth 2.
