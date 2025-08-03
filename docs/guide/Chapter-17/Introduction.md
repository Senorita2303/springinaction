# Chương 17. Giám sát Spring với JMX

Chương này bao gồm

* Làm việc với các MBean của endpoint trong Actuator  
* Expose các bean của Spring dưới dạng MBean  
* Gửi (publish) các thông báo (notification)  

Trong hơn một thập kỷ rưỡi qua, Java Management Extensions (JMX) đã là chuẩn chung để giám sát và quản lý các ứng dụng Java. Bằng cách expose các thành phần được quản lý, gọi là MBean (managed bean), một client JMX bên ngoài có thể quản lý ứng dụng bằng cách gọi các thao tác (operations), kiểm tra các thuộc tính (properties) và theo dõi các sự kiện (events) từ MBean.

Chúng ta sẽ bắt đầu khám phá Spring và JMX bằng cách tìm hiểu cách các endpoint của Actuator được expose dưới dạng MBean.
