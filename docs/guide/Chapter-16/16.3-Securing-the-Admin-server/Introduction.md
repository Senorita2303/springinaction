## 16.3 Bảo mật Admin server

Như chúng ta đã thảo luận trong chương trước, thông tin được lộ ra bởi các endpoint của Actuator không được thiết kế để sử dụng cho công chúng. Chúng chứa thông tin tiết lộ các chi tiết về ứng dụng mà chỉ quản trị viên ứng dụng mới nên thấy. Hơn nữa, một số endpoint cho phép thực hiện thay đổi – điều chắc chắn không nên được mở ra cho bất kỳ ai.

Cũng giống như bảo mật quan trọng đối với Actuator, nó cũng quan trọng đối với Admin server. Hơn nữa, nếu các endpoint của Actuator yêu cầu xác thực, thì Admin server cũng cần biết thông tin đăng nhập để có thể truy cập các endpoint đó. Hãy cùng xem cách thêm một chút bảo mật cho Admin server. Chúng ta sẽ bắt đầu bằng việc yêu cầu xác thực.
