# Chương 14. Làm việc với RSocket

Chương này bao gồm:

* Giao tiếp mạng phản ứng với RSocket  
* Làm việc với bốn mô hình giao tiếp của RSocket  
* Truyền RSocket qua WebSocket  

Đã từng có thời điểm, trước khi có điện thoại và các thiết bị điện tử hiện đại, cách tốt nhất để liên lạc với bạn bè và gia đình ở xa là viết thư và gửi qua đường bưu điện. Đó không phải là một hình thức liên lạc nhanh chóng — mất vài ngày, thậm chí vài tuần để nhận được phản hồi — nhưng nó hiệu quả và thực sự là lựa chọn duy nhất vào thời điểm đó.

Nhờ có Alexander Graham Bell, điện thoại đã mang đến một cách mới để trò chuyện với bạn bè và gia đình ở xa, cung cấp khả năng giao tiếp đồng bộ gần như theo thời gian thực. Điện thoại đã phát triển rất nhiều kể từ phát minh đầu tiên của ông Bell, nhưng nó vẫn là một phương tiện phổ biến để giữ liên lạc, khiến việc viết thư gần như trở thành một nghệ thuật đã mai một.

Khi nói đến giao tiếp giữa các ứng dụng, mô hình yêu cầu - phản hồi (request-response) do HTTP và các dịch vụ REST cung cấp là rất phổ biến, nhưng nó có những hạn chế. Cũng giống như viết thư, mô hình request-response liên quan đến việc gửi một tin nhắn và sau đó chờ đợi phản hồi. Nó không dễ dàng hỗ trợ giao tiếp bất đồng bộ, nơi máy chủ có thể phản hồi bằng một luồng các phản hồi hoặc cho phép một kênh hai chiều mở, nơi client và server có thể liên tục gửi dữ liệu qua lại.

Trong chương này, chúng ta sẽ tìm hiểu RSocket — một giao thức tương đối mới cho việc giao tiếp giữa các ứng dụng, cho phép nhiều hơn việc giao tiếp theo kiểu request-response đơn thuần. Và bởi vì nó mang bản chất phản ứng, nó có thể hiệu quả hơn nhiều so với các yêu cầu HTTP dạng blocking.

Trong quá trình đó, chúng ta cũng sẽ tìm hiểu cách phát triển giao tiếp RSocket trong Spring. Nhưng trước tiên, hãy cùng xem tổng quan về RSocket để hiểu điều gì khiến nó khác biệt so với giao tiếp dựa trên HTTP.
