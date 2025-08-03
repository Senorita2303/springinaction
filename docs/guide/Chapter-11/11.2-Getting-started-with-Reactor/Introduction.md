## 11.2 Bắt đầu với Reactor

Lập trình phản ứng (reactive programming) yêu cầu chúng ta phải suy nghĩ theo một cách rất khác so với lập trình tuần tự (imperative programming). Thay vì mô tả một tập hợp các bước cần thực hiện, lập trình phản ứng nghĩa là xây dựng một pipeline mà dữ liệu sẽ chảy qua. Khi dữ liệu đi qua pipeline, nó có thể được thay đổi hoặc sử dụng theo một cách nào đó.

Ví dụ, giả sử bạn muốn lấy tên của một người, chuyển tất cả các chữ cái sang chữ hoa, sử dụng nó để tạo một thông điệp chào hỏi, và cuối cùng in nó ra. Trong mô hình lập trình tuần tự, mã sẽ trông như thế này:

```java
String name = "Craig";
String capitalName = name.toUpperCase();
String greeting = "Hello, " + capitalName + "!";
System.out.println(greeting);
```

Trong mô hình tuần tự, mỗi dòng mã thực hiện một bước, lần lượt theo thứ tự, và chắc chắn là trong cùng một luồng (thread). Mỗi bước sẽ chặn luồng thực thi cho đến khi hoàn tất trước khi chuyển sang bước tiếp theo.

Ngược lại, mã phản ứng theo hướng hàm (functional reactive code) có thể đạt được điều tương tự như sau:

```java
Mono.just("Craig")
    .map(n -> n.toUpperCase())
    .map(cn -> "Hello, " + cn + "!")
    .subscribe(System.out::println);
```

Đừng quá lo lắng về chi tiết của ví dụ này; chúng ta sẽ sớm bàn về các thao tác `just()`, `map()` và `subscribe()`. Hiện tại, điều quan trọng là hiểu rằng mặc dù ví dụ phản ứng vẫn có vẻ như tuân theo mô hình từng bước, nhưng thật ra đó là một pipeline mà dữ liệu sẽ chảy qua. Ở mỗi giai đoạn của pipeline, dữ liệu sẽ được tinh chỉnh theo một cách nào đó, nhưng không thể giả định rằng các thao tác đó sẽ được thực hiện trên luồng nào. Chúng có thể là cùng một luồng... hoặc cũng có thể không.

`Mono` trong ví dụ là một trong hai kiểu lõi của Reactor. `Flux` là kiểu còn lại. Cả hai đều là các hiện thực của Publisher trong Reactive Streams. Một `Flux` đại diện cho một pipeline với không, một hoặc nhiều (thậm chí vô hạn) phần tử dữ liệu. Một `Mono` là một kiểu phản ứng chuyên biệt, được tối ưu hóa cho các trường hợp mà dữ liệu có nhiều nhất chỉ một phần tử.

> Reactor vs RxJava (ReactiveX)
>
> Nếu bạn đã quen với RxJava hoặc ReactiveX, bạn có thể đang nghĩ rằng `Mono` và `Flux` nghe khá giống với `Observable` và `Single`. Thật ra, chúng gần như tương đương về mặt ngữ nghĩa. Chúng thậm chí còn cung cấp nhiều thao tác giống nhau.
>
> Mặc dù chúng ta tập trung vào Reactor trong cuốn sách này, bạn có thể yên tâm rằng hoàn toàn có thể chuyển đổi giữa các kiểu của Reactor và RxJava. Hơn nữa, như bạn sẽ thấy trong các chương tiếp theo, Spring cũng có thể làm việc với các kiểu dữ liệu của RxJava.

Ví dụ trước thực tế chứa ba đối tượng `Mono`. Thao tác `just()` tạo ra đối tượng đầu tiên. Khi `Mono` này phát ra một giá trị, giá trị đó được đưa vào thao tác `map()` để được chuyển thành chữ hoa và dùng để tạo ra một `Mono` thứ hai. Khi `Mono` thứ hai phát ra dữ liệu, nó được đưa vào thao tác `map()` thứ hai để thực hiện nối chuỗi `String`, kết quả được dùng để tạo `Mono` thứ ba. Cuối cùng, lệnh gọi `subscribe()` sẽ đăng ký (subscribe) với `Mono`, nhận dữ liệu và in nó ra.
