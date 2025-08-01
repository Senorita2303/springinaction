## 6.3 Cấu hình với profile

Khi ứng dụng được triển khai đến các môi trường runtime khác nhau, thường có một số chi tiết cấu hình khác biệt. Ví dụ, chi tiết kết nối cơ sở dữ liệu có thể không giống nhau giữa môi trường phát triển và môi trường kiểm thử chất lượng, và lại càng khác nữa trong môi trường sản xuất. Một cách để cấu hình thuộc tính khác biệt giữa các môi trường là sử dụng biến môi trường để chỉ định các thuộc tính cấu hình thay vì định nghĩa chúng trong `application.properties` hoặc `application.yml`.

Chẳng hạn, trong quá trình phát triển, bạn có thể sử dụng cơ sở dữ liệu H2 nhúng được tự động cấu hình. Nhưng trong môi trường sản xuất, bạn có thể thiết lập các thuộc tính cấu hình cơ sở dữ liệu thông qua biến môi trường như sau:

```bash
% export SPRING_DATASOURCE_URL=jdbc:mysql://localhost/tacocloud
% export SPRING_DATASOURCE_USERNAME=tacouser
% export SPRING_DATASOURCE_PASSWORD=tacopassword
```

Mặc dù cách làm này sẽ hoạt động, nhưng việc chỉ định nhiều hơn một hoặc hai thuộc tính cấu hình bằng biến môi trường là khá rườm rà. Hơn nữa, không có cách nào tốt để theo dõi các thay đổi đối với biến môi trường hoặc dễ dàng quay lui khi có lỗi xảy ra.

Thay vào đó, tôi thích tận dụng Spring profiles. Profiles là một loại cấu hình có điều kiện, nơi các bean, lớp cấu hình, và thuộc tính cấu hình khác nhau sẽ được áp dụng hoặc bỏ qua dựa trên các profile nào đang được kích hoạt khi runtime.

Ví dụ, giả sử rằng cho mục đích phát triển và gỡ lỗi, bạn muốn sử dụng cơ sở dữ liệu H2 nhúng và thiết lập mức ghi log cho mã Taco Cloud ở mức `DEBUG`. Nhưng trong sản xuất, bạn muốn sử dụng cơ sở dữ liệu MySQL bên ngoài và thiết lập mức ghi log thành `WARN`. Trong môi trường phát triển, bạn chỉ cần không thiết lập thuộc tính datasource nào và hệ thống sẽ sử dụng H2 được tự động cấu hình. Còn để bật log mức debug, bạn có thể thiết lập thuộc tính `logging.level.tacos` cho package gốc tacos thành `DEBUG` trong file `application.yml` như sau:

```yaml
logging:
  level:
    tacos: DEBUG
```

Đây chính xác là những gì bạn cần cho mục đích phát triển. Nhưng nếu bạn triển khai ứng dụng này trong môi trường sản xuất mà không thay đổi thêm gì trong `application.yml`, bạn sẽ vẫn có log debug cho package tacos và vẫn dùng cơ sở dữ liệu H2 nhúng. Điều bạn cần làm là định nghĩa một profile với các thuộc tính phù hợp cho sản xuất.
