## 11.3 Áp dụng các phép toán phản ứng phổ biến

`Flux` và `Mono` là những khối xây dựng cốt lõi nhất mà Reactor cung cấp, và các phép toán mà hai kiểu phản ứng này hỗ trợ chính là chất keo kết nối chúng lại với nhau để tạo thành các pipeline cho dữ liệu luân chuyển. `Flux` và `Mono` cung cấp hơn 500 phép toán, có thể được phân loại sơ lược như sau:

* Tạo dữ liệu (Creation)
* Kết hợp (Combination)
* Biến đổi (Transformation)
* Logic

Sẽ rất thú vị nếu chúng ta có thể khám phá từng phép toán trong số 500 phép toán đó để xem cách chúng hoạt động, nhưng chương này không đủ chỗ cho tất cả. Tôi đã chọn ra một vài phép toán hữu ích nhất để thử nghiệm trong phần này. Chúng ta sẽ bắt đầu với các phép toán tạo dữ liệu.

> GHI CHÚ: Vậy các ví dụ về `Mono` ở đâu? `Mono` và `Flux` chia sẻ rất nhiều phép toán giống nhau, nên phần lớn không cần thiết phải trình bày cùng một phép toán hai lần – một lần cho `Mono` và một lần cho `Flux`. Hơn nữa, mặc dù các phép toán trên `Mono` rất hữu ích, chúng lại có phần kém thú vị hơn khi so với cùng phép toán áp dụng cho `Flux`. Phần lớn các ví dụ mà chúng ta sẽ làm việc sẽ liên quan đến `Flux`. Chỉ cần lưu ý rằng `Mono` thường có các phép toán tương đương.
