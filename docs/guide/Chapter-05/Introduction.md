# Chương 5. Bảo mật trong Spring

Chương này bao gồm

* Cấu hình tự động Spring Security
* Định nghĩa lưu trữ người dùng tùy chỉnh
* Tùy chỉnh trang đăng nhập
* Bảo vệ chống lại các cuộc tấn công CSRF
* Nhận biết người dùng của bạn

Bạn đã bao giờ nhận thấy rằng hầu hết các nhân vật trong các bộ phim truyền hình sitcom không khóa cửa chưa? Vào thời của _Leave It to Beaver_, việc mọi người để cửa không khóa không phải là điều gì lạ lẫm. Nhưng thật kỳ quặc khi trong thời đại mà chúng ta quan tâm đến quyền riêng tư và bảo mật, các nhân vật truyền hình lại để cửa nhà và căn hộ của họ mở toang mà không chút e dè.

Thông tin có lẽ là tài sản quý giá nhất mà chúng ta đang sở hữu; kẻ xấu đang tìm mọi cách để đánh cắp dữ liệu và danh tính của chúng ta bằng cách xâm nhập vào các ứng dụng không được bảo vệ. Là nhà phát triển phần mềm, chúng ta phải thực hiện các bước để bảo vệ thông tin tồn tại trong ứng dụng của mình. Cho dù đó là tài khoản email được bảo vệ bằng cặp tên người dùng – mật khẩu, hay tài khoản chứng khoán được bảo vệ bằng mã PIN giao dịch, thì bảo mật luôn là một khía cạnh thiết yếu trong hầu hết các ứng dụng.
