# Chương 15. Làm việc với Spring Boot Actuator

Chương này bao gồm:

* Kích hoạt Actuator trong các dự án Spring Boot  
* Khám phá các endpoint của Actuator  
* Tùy chỉnh Actuator  
* Bảo mật Actuator  

Bạn đã bao giờ cố gắng đoán xem bên trong một món quà được gói kín là gì chưa? Bạn lắc nó, cân nó, đo nó. Và bạn thậm chí có thể có một ý tưởng khá rõ ràng về những gì bên trong. Nhưng cho đến khi bạn mở nó ra, thì không có cách nào để biết chắc chắn được.

Một ứng dụng đang chạy cũng giống như một món quà được gói kín. Bạn có thể "chọc ngoáy" vào nó và đưa ra những phỏng đoán hợp lý về những gì đang diễn ra bên trong. Nhưng làm sao để bạn biết chắc chắn? Giá mà có cách nào đó để bạn có thể nhìn vào bên trong một ứng dụng đang chạy, xem nó hoạt động thế nào, kiểm tra tình trạng của nó, và thậm chí là kích hoạt các thao tác ảnh hưởng đến cách nó chạy!

Trong chương này, chúng ta sẽ khám phá Spring Boot Actuator. Actuator cung cấp các tính năng sẵn sàng cho môi trường sản xuất như giám sát và đo lường cho các ứng dụng Spring Boot. Các tính năng của Actuator được cung cấp thông qua nhiều endpoint, được truy cập thông qua HTTP cũng như JMX MBeans. Chương này chủ yếu tập trung vào các endpoint HTTP, còn các endpoint JMX sẽ được đề cập trong chương 18.
