# Chương 11. Giới thiệu về Reactor

Chương này bao gồm:

* Hiểu về lập trình phản ứng (reactive programming)  
* Dự án Reactor  
* Xử lý dữ liệu theo kiểu phản ứng  

Bạn đã từng đăng ký nhận báo hoặc tạp chí chưa? Internet chắc chắn đã làm giảm số lượng người đăng ký các ấn phẩm truyền thống, nhưng đã từng có thời điểm mà việc đăng ký nhận báo là một trong những cách tốt nhất để cập nhật các sự kiện trong ngày. Mỗi sáng, bạn có thể tin tưởng rằng sẽ nhận được một tờ báo mới với những tin tức thời sự, để đọc trong khi ăn sáng hoặc trên đường đi làm.

Bây giờ, giả sử rằng sau khi bạn đã trả tiền cho đăng ký báo, nhiều ngày trôi qua mà không có tờ báo nào được giao đến. Thêm vài ngày nữa, bạn gọi điện đến văn phòng bán báo để hỏi lý do vì sao mình vẫn chưa nhận được báo hằng ngày. Hãy tưởng tượng sự ngạc nhiên của bạn nếu họ giải thích rằng: “Bạn đã trả tiền cho một năm báo đầy đủ. Năm đó vẫn chưa kết thúc. Bạn chắc chắn sẽ nhận được tất cả báo khi đủ cả năm.”  

Thật may, đó không phải là cách các đăng ký hoạt động. Báo chí có tính thời sự. Chúng được giao càng nhanh càng tốt sau khi phát hành, để người đọc có thể tiếp cận thông tin khi nội dung còn mới. Hơn nữa, trong khi bạn đang đọc số báo mới nhất, các phóng viên đã bắt đầu viết các câu chuyện mới cho số tiếp theo, và máy in đang vận hành để sản xuất ấn bản kế tiếp — tất cả đều diễn ra song song.

Khi chúng ta phát triển mã ứng dụng, ta có thể viết theo hai phong cách — mệnh lệnh (imperative) và phản ứng (reactive), được mô tả như sau:

* Mã _mệnh lệnh_ thì giống như ví dụ đăng ký báo phi lý bên trên. Đó là một chuỗi các tác vụ tuần tự, mỗi tác vụ chạy sau khi tác vụ trước hoàn thành. Dữ liệu được xử lý theo lô và không thể chuyển sang tác vụ tiếp theo cho đến khi tác vụ hiện tại xử lý xong toàn bộ lô dữ liệu đó.
* Mã _phản ứng_ thì giống như việc đăng ký báo thực tế. Một loạt các tác vụ được xác định để xử lý dữ liệu, nhưng các tác vụ đó có thể chạy song song. Mỗi tác vụ có thể xử lý một phần dữ liệu, chuyển nó sang tác vụ tiếp theo trong khi tiếp tục làm việc với phần dữ liệu khác.

Trong chương này, chúng ta sẽ tạm thời rời khỏi ứng dụng Taco Cloud để khám phá Project Reactor [https://projectreactor.io/](https://projectreactor.io/). Reactor là một thư viện lập trình phản ứng thuộc hệ sinh thái của các dự án Spring. Và vì nó đóng vai trò nền tảng cho hỗ trợ lập trình phản ứng trong Spring, nên điều quan trọng là bạn cần hiểu rõ về Reactor trước khi chúng ta tìm hiểu cách xây dựng các controller và repository phản ứng với Spring. Tuy nhiên, trước khi bắt đầu làm việc với Reactor, chúng ta hãy nhanh chóng xem qua các yếu tố cơ bản của lập trình phản ứng.
