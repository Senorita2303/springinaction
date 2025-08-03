## 16.2 Khám phá Admin server

Khi bạn đã đăng ký tất cả các ứng dụng Spring Boot dưới dạng client của Admin server, Admin server sẽ cung cấp rất nhiều thông tin giúp bạn thấy được những gì đang diễn ra bên trong mỗi ứng dụng, bao gồm:

* Thông tin tổng quát về tình trạng và hệ thống
* Các số liệu (metrics) được xuất bản thông qua Micrometer và endpoint `/metrics`
* Các thuộc tính môi trường (environment properties)
* Mức log cho các package và class

Thực tế, hầu như bất cứ thứ gì mà Actuator cung cấp đều có thể được xem trong Admin server, nhưng ở một định dạng thân thiện với con người hơn nhiều. Điều này bao gồm các biểu đồ và bộ lọc giúp chắt lọc thông tin dễ dàng hơn. Lượng thông tin mà Admin server cung cấp phong phú hơn nhiều so với không gian có thể trình bày trong chương này. Tuy nhiên, hãy để tôi sử dụng phần còn lại của mục này để chia sẻ một vài điểm nổi bật của Admin server.
