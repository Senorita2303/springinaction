# Chương 13. Lưu trữ dữ liệu theo kiểu phản ứng

Chương này bao gồm

* Lưu trữ quan hệ phản ứng với R2DBC  
* Định nghĩa các repository phản ứng cho MongoDB và Cassandra  
* Kiểm thử các repository phản ứng  

Nếu chúng ta học được điều gì đó từ phim khoa học viễn tưởng, thì đó là: nếu bạn muốn cải thiện những trải nghiệm trong quá khứ, bạn chỉ cần một chút du hành thời gian. Nó đã hiệu quả trong Back to the Future, một vài tập của các loạt phim Star Trek, _Avengers: Endgame_ và _11/22/63_ của Stephen King. (Ừ thì, có thể cái cuối cùng không kết thúc tốt đẹp. Nhưng bạn hiểu ý rồi đấy.)

Trong chương này, chúng ta sẽ tua ngược lại chương 3 và 4, xem lại các repository mà chúng ta đã tạo cho cơ sở dữ liệu quan hệ, MongoDB và Cassandra. Lần này, chúng ta sẽ cải tiến chúng bằng cách tận dụng hỗ trợ repository phản ứng của Spring Data, cho phép chúng ta làm việc với các repository đó theo cách không chặn (nonblocking).

Hãy bắt đầu bằng cách xem qua Spring Data R2DBC, một lựa chọn phản ứng thay thế cho Spring Data JDBC để lưu trữ trong cơ sở dữ liệu quan hệ.
