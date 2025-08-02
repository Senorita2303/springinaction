## 7.1 Viết các controller RESTful

Tóm lại, các API REST không khác biệt nhiều so với các trang web. Cả hai đều liên quan đến việc phản hồi các yêu cầu HTTP. Nhưng điểm khác biệt chính là thay vì phản hồi các yêu cầu đó bằng HTML như các trang web, API REST thường phản hồi bằng định dạng dữ liệu như JSON hoặc XML.

Trong chương 2, bạn đã sử dụng các annotation `@GetMapping` và `@PostMapping` để lấy và gửi dữ liệu tới máy chủ. Những annotation này vẫn sẽ rất hữu ích khi bạn định nghĩa API REST của mình. Ngoài ra, Spring MVC còn hỗ trợ một số annotation khác dành cho các loại yêu cầu HTTP khác nhau, như được liệt kê trong bảng 7.1.

**Bảng 7.1 Các annotation xử lý yêu cầu HTTP trong Spring MVC**

| Annotation | HTTP method | Typical use |
| :--- | :--- | :--- |
| `@GetMapping` | `HTTP GET` requests | Reading resource data |
| `@PostMapping` | `HTTP POST` requests | Creating a resource |
| `@PutMapping` | `HTTP PUT` requests | Updating a resource |
| `@PatchMapping` | `HTTP PATCH` requests | Updating a resource |
| `@DeleteMapping` | `HTTP DELETE` requests | Deleting a resource |
| `@RequestMapping` | General-purpose request handling; `HTTP` method specified in the method attribute |  |

Để thấy các annotation này hoạt động như thế nào, bạn sẽ bắt đầu bằng cách tạo một endpoint REST đơn giản để lấy ra một vài taco được tạo gần đây nhất.
