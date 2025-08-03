## 12.4 Tiêu thụ API REST một cách phản ứng (reactively)

Trong chương 8, bạn đã sử dụng `RestTemplate` để thực hiện các yêu cầu từ phía client tới API của Taco Cloud. `RestTemplate` là một công cụ lâu đời, được giới thiệu trong Spring phiên bản 3.0. Trong suốt thời gian tồn tại, nó đã được sử dụng để thực hiện vô số yêu cầu cho các ứng dụng sử dụng nó.

Tuy nhiên, tất cả các phương thức được cung cấp bởi `RestTemplate` đều xử lý các kiểu dữ liệu và tập hợp không phản ứng. Điều này có nghĩa là nếu bạn muốn làm việc với dữ liệu phản hồi theo cách phản ứng, bạn sẽ cần phải bao bọc nó bằng `Flux` hoặc `Mono`. Và nếu bạn đã có một `Flux` hoặc `Mono` và muốn gửi nó trong một yêu cầu `POST` hoặc `PUT`, thì bạn sẽ cần phải trích xuất dữ liệu thành một kiểu không phản ứng trước khi gửi yêu cầu.

Sẽ rất tiện lợi nếu có một cách để sử dụng `RestTemplate` một cách tự nhiên với các kiểu phản ứng. Đừng lo lắng. Spring cung cấp `WebClient` như một lựa chọn thay thế phản ứng cho `RestTemplate`. `WebClient` cho phép bạn cả gửi và nhận các kiểu phản ứng khi thực hiện các yêu cầu tới các API bên ngoài.

Việc sử dụng `WebClient` khá khác so với `RestTemplate`. Thay vì có nhiều phương thức để xử lý các loại yêu cầu khác nhau, `WebClient` có giao diện dạng builder theo phong cách chuỗi (fluent builder-style) cho phép bạn mô tả và gửi các yêu cầu. Mô hình sử dụng chung khi làm việc với `WebClient` như sau:

* Tạo một instance của `WebClient` (hoặc inject một bean `WebClient`)
* Chỉ định phương thức HTTP của yêu cầu cần gửi
* Chỉ định URI và bất kỳ header nào cần có trong yêu cầu
* Gửi yêu cầu
* Xử lý phản hồi

Hãy cùng xem một số ví dụ sử dụng `WebClient`, bắt đầu với cách dùng `WebClient` để gửi các yêu cầu HTTP GET.
