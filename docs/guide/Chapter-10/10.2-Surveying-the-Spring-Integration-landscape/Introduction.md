## 10.2 Khảo sát hệ sinh thái Spring Integration

Spring Integration bao phủ rất nhiều khía cạnh với vô số kịch bản tích hợp. Cố gắng đưa tất cả vào một chương sẽ giống như cố nhét một con voi vào phong bì vậy. Thay vì trình bày toàn diện về Spring Integration, tôi sẽ đưa ra một bức ảnh toàn cảnh về “con voi” Spring Integration để bạn có cái nhìn tổng quan về cách nó hoạt động. Sau đó, bạn sẽ tạo thêm một luồng tích hợp nữa để bổ sung chức năng cho ứng dụng Taco Cloud.

Một luồng tích hợp được cấu thành từ một hoặc nhiều thành phần sau. Trước khi bạn viết thêm bất kỳ dòng mã nào, chúng ta sẽ điểm qua ngắn gọn vai trò của từng thành phần trong luồng tích hợp:

* _Channels_ —— Truyền thông điệp từ thành phần này sang thành phần khác
* _Filters_ —— Cho phép thông điệp đi qua luồng dựa trên một số điều kiện nhất định
* _Transformers_ —— Thay đổi giá trị thông điệp và/hoặc chuyển đổi phần nội dung (payload) của thông điệp từ kiểu này sang kiểu khác
* _Routers_ —— Chuyển hướng thông điệp đến một trong nhiều kênh, thường dựa trên header của thông điệp
* _Splitters_ —— Tách thông điệp đầu vào thành hai hoặc nhiều thông điệp, mỗi thông điệp được gửi đến các kênh khác nhau
* _Aggregators_ —— Ngược lại với splitter; kết hợp nhiều thông điệp đến từ các kênh riêng biệt thành một thông điệp duy nhất
* _Service activators_ —— Gửi một thông điệp đến một phương thức Java nào đó để xử lý, sau đó đăng kết quả trả về lên một kênh đầu ra
* _Channel adapters_ —— Kết nối một kênh với hệ thống hoặc giao thức bên ngoài; có thể nhận dữ liệu đầu vào hoặc ghi ra hệ thống bên ngoài
* _Gateways_ —— Truyền dữ liệu vào luồng tích hợp thông qua một interface

Bạn đã từng thấy một vài thành phần này hoạt động khi bạn định nghĩa luồng tích hợp ghi file. Interface `FileWriterGateway` là gateway thông qua đó ứng dụng gửi văn bản cần ghi vào file. Bạn cũng đã định nghĩa một transformer để chuyển đổi văn bản thành chữ in hoa; sau đó bạn khai báo một service gateway thực hiện nhiệm vụ ghi văn bản vào file. Và luồng này có hai kênh, `textInChannel` và `fileWriterChannel`, kết nối các thành phần với nhau. Giờ thì cùng điểm qua các thành phần trong luồng tích hợp như đã hứa.
