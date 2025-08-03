## 12.1 Làm việc với Spring WebFlux

Các framework web dựa trên servlet thông thường, chẳng hạn như Spring MVC, có bản chất là chặn (blocking) và đa luồng, sử dụng một luồng duy nhất cho mỗi kết nối. Khi các yêu cầu được xử lý, một luồng làm việc sẽ được lấy ra từ một nhóm luồng để xử lý yêu cầu đó. Trong khi đó, luồng yêu cầu sẽ bị chặn cho đến khi được thông báo bởi luồng làm việc rằng nó đã hoàn thành.

Do đó, các framework web dạng blocking sẽ không mở rộng hiệu quả khi có khối lượng yêu cầu lớn. Độ trễ trong các luồng làm việc chậm sẽ làm mọi thứ tệ hơn vì sẽ mất nhiều thời gian hơn để luồng làm việc được trả về nhóm và sẵn sàng xử lý một yêu cầu khác. Trong một số trường hợp sử dụng, mô hình này hoàn toàn chấp nhận được. Trên thực tế, phần lớn các ứng dụng web đã được phát triển theo cách này trong hơn một thập kỷ. Nhưng thời thế đang thay đổi.

Các client của những ứng dụng web đó đã chuyển từ việc con người thỉnh thoảng truy cập trang web sang thường xuyên tiêu thụ nội dung và sử dụng các ứng dụng phối hợp với các API HTTP. Và ngày nay, cái gọi là _Internet of Things_ (nơi con người thậm chí không tham gia) bao gồm ô tô, động cơ phản lực và các client phi truyền thống khác liên tục trao đổi dữ liệu với các web API. Khi số lượng client tiêu thụ ứng dụng web ngày càng tăng, khả năng mở rộng trở nên quan trọng hơn bao giờ hết.

Ngược lại, các framework web bất đồng bộ (asynchronous) đạt được khả năng mở rộng cao hơn với ít luồng hơn—thường là một luồng cho mỗi lõi CPU. Bằng cách áp dụng một kỹ thuật được gọi là _vòng lặp sự kiện_ (event looping) (như minh họa trong hình 12.1), các framework này có thể xử lý nhiều yêu cầu trên mỗi luồng, giúp giảm chi phí trên mỗi kết nối.

![Hình 12.1](../../assets/12.1.png)  
**Hình 12.1 Các framework web bất đồng bộ áp dụng vòng lặp sự kiện để xử lý nhiều yêu cầu với ít luồng hơn.**

Trong một vòng lặp sự kiện, mọi thứ được xử lý như một sự kiện, bao gồm cả các yêu cầu và các callback từ những thao tác tốn kém như truy vấn cơ sở dữ liệu và thao tác mạng. Khi cần thực hiện một thao tác tốn kém, vòng lặp sự kiện sẽ đăng ký một callback để thao tác đó được thực thi song song, trong khi nó tiếp tục xử lý các sự kiện khác.

Khi thao tác đó hoàn thành, nó sẽ được xử lý như một sự kiện bởi vòng lặp sự kiện, giống như các yêu cầu. Kết quả là, các framework web bất đồng bộ có khả năng mở rộng tốt hơn khi có nhiều yêu cầu, với ít luồng hơn, dẫn đến giảm chi phí quản lý luồng.

Spring cung cấp một framework web bất đồng bộ, không chặn, dựa chủ yếu vào Project Reactor để đáp ứng nhu cầu mở rộng cao hơn cho các ứng dụng web và API. Hãy cùng tìm hiểu Spring WebFlux—một framework web phản ứng dành cho Spring.
