## 7.2 Kích hoạt các dịch vụ có hỗ trợ dữ liệu

Như bạn đã thấy trong chương 3, Spring Data thực hiện một loại "phép thuật" đặc biệt bằng cách tự động tạo các triển khai repository dựa trên các interface mà bạn định nghĩa trong mã của mình. Nhưng Spring Data còn có thêm một "chiêu" nữa có thể giúp bạn định nghĩa các API cho ứng dụng của mình.

**Spring Data REST** là một thành viên khác trong họ Spring Data, tự động tạo ra các REST API cho các repository được tạo bởi Spring Data. Chỉ cần thêm Spring Data REST vào quá trình build, bạn sẽ có ngay một API với các thao tác dành cho mỗi interface repository mà bạn đã định nghĩa.

Để bắt đầu sử dụng Spring Data REST, hãy thêm dependency sau vào phần build của bạn:

```html
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-rest</artifactId>
</dependency>
```

Tin hay không tùy bạn, chỉ cần vậy là đủ để công khai một REST API trong một dự án đã sử dụng Spring Data để tạo repository tự động. Bằng cách chỉ đơn giản đưa Spring Data REST starter vào trong phần build, ứng dụng của bạn sẽ nhận được cấu hình tự động cho phép tạo REST API tự động cho bất kỳ repository nào đã được tạo bởi Spring Data (bao gồm Spring Data JPA, Spring Data Mongo, v.v.).

Các endpoint REST mà Spring Data REST tạo ra ít nhất cũng tốt như (thậm chí có thể tốt hơn) các endpoint mà bạn tự viết. Vì vậy, tại thời điểm này, bạn hoàn toàn có thể "dọn dẹp" và xóa bất kỳ lớp nào có annotation `@RestController` mà bạn đã tạo trước đó trước khi tiếp tục.

Để thử nghiệm các endpoint được cung cấp bởi Spring Data REST, bạn có thể khởi động ứng dụng và thử gọi một vài URL. Dựa trên các repository mà bạn đã định nghĩa cho Taco Cloud, bạn nên có thể thực hiện các yêu cầu `GET` cho tacos, ingredients, orders và users.

Ví dụ, bạn có thể lấy danh sách tất cả nguyên liệu bằng cách thực hiện một yêu cầu `GET` tới `/ingredients`. Sử dụng `curl`, bạn có thể nhận được một phản hồi trông giống như sau (rút gọn để chỉ hiển thị nguyên liệu đầu tiên):

```bash
$ curl localhost:8080/ingredients
{
  "_embedded" : {
    "ingredients" : [ {
      "name" : "Flour Tortilla",
      "type" : "WRAP",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/ingredients/FLTO"
        },
        "ingredient" : {
          "href" : "http://localhost:8080/ingredients/FLTO"
        }
      }
    },
    ...
    ]
  },
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/ingredients"
    },
    "profile" : {
      "href" : "http://localhost:8080/profile/ingredients"
    }
  }
}
```

Wow! Bạn chỉ cần thêm một dependency vào phần build mà đã có được một endpoint cho ingredients, và tài nguyên phản hồi còn chứa cả **hyperlink**! Những hyperlink này là hiện thực của mô hình Hypermedia as the Engine of Application State, hay viết tắt là **HATEOAS**. Một client sử dụng API này có thể (tùy chọn) sử dụng những hyperlink này để điều hướng qua API và thực hiện các yêu cầu tiếp theo.

Dự án [Spring HATEOAS](https://spring.io/projects/spring-hateoas) cung cấp hỗ trợ tổng quát để thêm liên kết hypermedia trong phản hồi từ controller Spring MVC của bạn. Nhưng Spring Data REST sẽ tự động thêm các liên kết này trong các phản hồi từ các API mà nó tạo ra.

>Có nên dùng HATEOAS hay không?
>
>Ý tưởng chung của HATEOAS là cho phép một client điều hướng qua API giống như cách con người điều hướng một website: bằng cách nhấp vào các liên kết. Thay vì mã hóa chi tiết API vào client và yêu cầu client phải tự tạo URL cho từng yêu cầu, client có thể chọn một liên kết theo tên từ danh sách các hyperlink và sử dụng nó để thực hiện yêu cầu tiếp theo. Theo cách này, client không cần được lập trình để biết trước cấu trúc của API và thay vào đó có thể dùng chính API như bản đồ để điều hướng.
>Tuy nhiên, các liên kết này cũng làm payload tăng lên một chút và đòi hỏi client phải biết cách xử lý chúng. Vì lý do đó, các lập trình viên API thường bỏ qua HATEOAS, và lập trình viên client cũng thường lờ đi các hyperlink nếu có.
>Ngoại trừ các hyperlink miễn phí bạn nhận được từ Spring Data REST, chúng ta sẽ **bỏ qua HATEOAS** và tập trung vào các API đơn giản, không sử dụng hypermedia.

Giả vờ là một client của API này, bạn cũng có thể sử dụng `curl` để theo dõi liên kết `self` cho mục `flour tortilla` như sau:

```bash
$ curl http://localhost:8080/ingredients/FLTO
{
  "name" : "Flour Tortilla",
  "type" : "WRAP",
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/ingredients/FLTO"
    },
    "ingredient" : {
      "href" : "http://localhost:8080/ingredients/FLTO"
    }
  }
}
```

Để tránh bị xao nhãng, chúng ta sẽ không mất thêm thời gian để đào sâu từng endpoint và tùy chọn mà Spring Data REST đã tạo. Nhưng bạn nên biết rằng nó cũng hỗ trợ các phương thức `POST`, `PUT` và `DELETE` cho các endpoint mà nó tạo ra. Đúng vậy: bạn có thể `POST` tới `/ingredients` để tạo một nguyên liệu mới, và `DELETE /ingredients/FLTO` để xóa bánh tortilla khỏi menu.

Một việc bạn có thể muốn làm là đặt một đường dẫn gốc (base path) cho API để các endpoint của nó rõ ràng và không bị trùng với bất kỳ controller nào bạn viết. Để điều chỉnh đường dẫn gốc cho API, hãy đặt thuộc tính `spring.data.rest.base-path` như sau:

```yaml
spring:
  data:
    rest:
      base-path: /api
```

Điều này sẽ đặt đường dẫn gốc cho các endpoint Spring Data REST là `/data-api`. Mặc dù bạn có thể đặt base path là bất kỳ giá trị nào bạn muốn, nhưng lựa chọn `/data-api` sẽ đảm bảo rằng các endpoint được Spring Data REST công khai không bị trùng với bất kỳ controller nào khác, bao gồm cả những controller có đường dẫn bắt đầu bằng “/api” mà chúng ta đã tạo trước đó trong chương này. Do đó, endpoint cho ingredients bây giờ sẽ là `/data-api/ingredients`. Giờ hãy thử nghiệm base path mới này bằng cách yêu cầu danh sách tacos như sau:

```bash
$ curl http://localhost:8080/data-api/tacos
{
  "timestamp": "2018-02-11T16:22:12.381+0000",
  "status": 404,
  "error": "Not Found",
  "message": "No message available",
  "path": "/api/tacos"
}
```

Ôi không! Điều đó đã không hoạt động như mong đợi. Bạn có một entity `Ingredient` và một interface `IngredientRepository`, điều mà Spring Data REST đã công khai qua endpoint `/data-api/ingredients`. Vậy nếu bạn có một entity `Taco` và một interface `TacoRepository`, tại sao Spring Data REST lại không cung cấp một endpoint `/data-api/tacos`?
