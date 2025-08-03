## 12.3 Kiểm thử các controller phản ứng

Khi nói đến việc kiểm thử các controller phản ứng, Spring không hề bỏ rơi chúng ta. Thật vậy, Spring đã giới thiệu `WebTestClient`, một tiện ích kiểm thử mới giúp việc viết các bài kiểm thử cho controller phản ứng được viết bằng Spring WebFlux trở nên dễ dàng hơn. Để xem cách viết các bài kiểm thử với `WebTestClient`, hãy bắt đầu bằng cách sử dụng nó để kiểm thử phương thức `recentTacos()` từ lớp `TacoController` mà bạn đã viết trong mục 12.1.2.
