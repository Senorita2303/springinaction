## 11.1 Tìm hiểu lập trình phản ứng (reactive programming)

Lập trình phản ứng là một mô hình lập trình thay thế cho lập trình mệnh lệnh.  

Sự thay thế này xuất hiện bởi vì lập trình phản ứng giải quyết một số giới hạn trong lập trình mệnh lệnh. Bằng cách hiểu rõ những giới hạn này, bạn sẽ dễ dàng nắm bắt được lợi ích mà mô hình phản ứng mang lại.

> LƯU Ý: Lập trình phản ứng không phải là viên đạn bạc. Bạn không nên suy luận từ chương này hay bất kỳ cuộc thảo luận nào khác về lập trình phản ứng rằng lập trình mệnh lệnh là xấu xa và lập trình phản ứng là vị cứu tinh. Giống như bất kỳ kỹ thuật nào bạn học được với tư cách là một lập trình viên, lập trình phản ứng là lựa chọn hoàn hảo trong một số trường hợp, và không phù hợp trong các trường hợp khác. Một chút thực tế và linh hoạt là cần thiết.

Nếu bạn giống tôi và nhiều lập trình viên khác, bạn bắt đầu học lập trình với lập trình mệnh lệnh. Rất có thể phần lớn (hoặc toàn bộ) mã bạn viết ngày nay vẫn mang tính mệnh lệnh. Lập trình mệnh lệnh đủ trực quan để học sinh có thể tiếp cận dễ dàng trong các chương trình STEM ở trường, và nó cũng đủ mạnh mẽ để chiếm phần lớn mã đang vận hành tại các doanh nghiệp lớn nhất thế giới.

Ý tưởng rất đơn giản: bạn viết mã như một danh sách các chỉ dẫn được thực hiện tuần tự, từng bước một, theo đúng thứ tự xuất hiện. Một tác vụ được thực hiện và chương trình chờ nó hoàn tất trước khi chuyển sang tác vụ tiếp theo. Ở mỗi bước, dữ liệu cần xử lý phải sẵn sàng đầy đủ để có thể xử lý toàn bộ.

Điều này hoàn toàn ổn... cho đến khi nó không còn ổn nữa. Trong khi một tác vụ đang được thực hiện — đặc biệt là tác vụ I/O như ghi dữ liệu vào cơ sở dữ liệu hoặc truy xuất dữ liệu từ máy chủ từ xa — thì luồng thực thi tác vụ đó sẽ bị chặn, không thể làm bất kỳ điều gì khác cho đến khi tác vụ hoàn tất. Nói thẳng ra, các luồng bị chặn là sự lãng phí tài nguyên.

Hầu hết các ngôn ngữ lập trình, bao gồm cả Java, đều hỗ trợ lập trình song song. Việc khởi tạo một luồng mới trong Java để thực hiện một công việc trong khi luồng chính tiếp tục thực hiện công việc khác là khá đơn giản. Tuy nhiên, mặc dù dễ tạo luồng, các luồng đó lại rất dễ bị chặn. Việc quản lý sự song song trong nhiều luồng là một thử thách. Càng nhiều luồng, độ phức tạp càng tăng.

Ngược lại, lập trình phản ứng mang tính hàm và khai báo. Thay vì mô tả một tập hợp các bước thực hiện tuần tự, lập trình phản ứng mô tả một pipeline hoặc dòng dữ liệu mà dữ liệu sẽ chảy qua. Thay vì yêu cầu dữ liệu phải có đầy đủ để xử lý toàn bộ, một dòng phản ứng xử lý dữ liệu khi nó đến. Trên thực tế, dữ liệu đầu vào có thể là bất tận (ví dụ: luồng dữ liệu nhiệt độ thời gian thực của một địa điểm).

> LƯU Ý：Nếu bạn chưa quen với lập trình hàm trong Java, bạn có thể tham khảo _Functional Programming in Java_ của Pierre-Yves Saumont (Manning, 2017), hoặc _Grokking Functional Programming_ của Michał Płachta (Manning, 2021).

Để áp dụng một phép so sánh ngoài đời thực, hãy coi lập trình mệnh lệnh như là một quả bóng nước và lập trình phản ứng như một vòi phun nước. Cả hai đều là cách phù hợp để gây bất ngờ và làm ướt một người bạn không phòng bị trong ngày hè nóng nực. Nhưng chúng khác nhau về cách thức hoạt động như sau:

* Một quả bóng nước mang toàn bộ lượng nước của nó trong một lần, làm ướt mục tiêu vào thời điểm va chạm. Tuy nhiên, quả bóng nước có dung lượng hữu hạn, và nếu bạn muốn làm ướt thêm người khác (hoặc cùng một người nhiều hơn), bạn buộc phải tăng số lượng bóng nước.
* Một vòi nước mang lượng nước như một dòng chảy liên tục từ vòi đến đầu phun. Mặc dù tại một thời điểm dòng nước là hữu hạn, nhưng tổng thể trong suốt "trận chiến nước", nó là vô hạn. Miễn là nước vẫn chảy từ vòi vào, nó sẽ tiếp tục chảy qua ống và phun ra đầu vòi. Cùng một vòi nước có thể dễ dàng mở rộng để làm ướt bao nhiêu người tùy thích.

Không có gì sai với bóng nước (hoặc lập trình mệnh lệnh), nhưng người cầm vòi nước (hoặc sử dụng lập trình phản ứng) có lợi thế về khả năng mở rộng và hiệu năng.
