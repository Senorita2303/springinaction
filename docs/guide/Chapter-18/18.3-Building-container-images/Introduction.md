## 18.3 Xây dựng các image container

Docker [https://www.docker.com/](https://www.docker.com/) đã trở thành tiêu chuẩn thực tế để phân phối các ứng dụng thuộc mọi loại nhằm triển khai trên đám mây. Nhiều môi trường đám mây khác nhau, bao gồm AWS, Microsoft Azure và Google Cloud Platform (chỉ kể tên một vài cái), đều chấp nhận các container Docker để triển khai ứng dụng.

Ý tưởng về các ứng dụng được container hóa, như những ứng dụng được tạo bằng Docker, được ví như các container liên phương thức trong thế giới thực dùng để vận chuyển hàng hóa trên toàn thế giới. Các container liên phương thức đều có kích thước và định dạng tiêu chuẩn, bất kể bên trong chứa gì. Vì vậy, chúng có thể dễ dàng xếp chồng trên tàu, chở bằng tàu hỏa, hoặc kéo bằng xe tải. Tương tự, các ứng dụng được container hóa có định dạng container chung có thể được triển khai và chạy ở bất cứ đâu, bất kể ứng dụng bên trong là gì.

Cách đơn giản nhất để tạo một image từ ứng dụng Spring Boot là sử dụng lệnh `docker build` và một tệp Dockerfile sao chép tệp JAR thực thi từ bản build của dự án vào image container. Dockerfile cực kỳ đơn giản sau đây thực hiện đúng điều đó:

```bash
FROM openjdk:11.0.12-jre
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

Dockerfile mô tả cách mà image container sẽ được tạo ra. Vì nó rất ngắn, chúng ta hãy cùng phân tích từng dòng:

* _Dòng 1_ — Khai báo rằng image chúng ta tạo sẽ được dựa trên một image container đã được định nghĩa sẵn, cung cấp (trong số những thứ khác) môi trường runtime Java Open JDK 11.
* _Dòng 2_ — Tạo một biến tham chiếu đến tất cả các tệp JAR trong thư mục `target/` của dự án. Với hầu hết các build Maven, sẽ chỉ có một tệp JAR duy nhất ở đó. Tuy nhiên, việc sử dụng ký tự đại diện giúp chúng ta tách biệt định nghĩa Dockerfile khỏi tên và phiên bản cụ thể của tệp JAR. Đường dẫn đến tệp JAR giả định rằng Dockerfile nằm ở thư mục gốc của dự án Maven.
* _Dòng 3_ — Sao chép tệp JAR từ thư mục `target/` của dự án vào image container với tên chung là `app.jar`.
* _Dòng 4_ — Định nghĩa điểm vào (entry point) — tức là, định nghĩa lệnh sẽ được chạy khi một container được tạo từ image này bắt đầu — để chạy tệp JAR bằng lệnh `java -jar /app.jar`.

Với Dockerfile này, bạn có thể tạo image bằng công cụ dòng lệnh Docker như sau:

```bash
docker build . -t habuma/tacocloud:0.0.19-SNAPSHOT
```

Dấu `.` trong lệnh này tham chiếu đến đường dẫn tương đối đến vị trí của Dockerfile. Nếu bạn đang chạy `docker build` từ một vị trí khác, hãy thay `.` bằng đường dẫn đến thư mục chứa Dockerfile (không bao gồm tên tệp). Ví dụ, nếu bạn đang chạy `docker build` từ thư mục cha của dự án, bạn sẽ sử dụng `docker build` như sau:

```bash
docker build tacocloud -t habuma/tacocloud:0.0.19-SNAPSHOT
```

Giá trị được cung cấp sau đối số `-t` là tag của image, bao gồm tên và phiên bản. Trong ví dụ này, tên image là `habuma/tacocloud` và phiên bản là `0.0.19-SNAPSHOT`. Nếu bạn muốn chạy thử, bạn có thể dùng `docker run` để chạy image vừa tạo:

```bash
docker run -p8080:8080 habuma/tacocloud:0.0.19-SNAPSHOT
```

Tùy chọn `-p8080:8080` sẽ chuyển tiếp các yêu cầu đến cổng 8080 trên máy chủ (ví dụ: máy bạn đang chạy Docker) đến cổng 8080 của container (nơi Tomcat hoặc Netty đang lắng nghe yêu cầu).

Mặc dù việc tạo một Docker image theo cách này là đủ đơn giản nếu bạn đã có sẵn một tệp JAR thực thi, nhưng đó không phải là cách dễ nhất để tạo image từ ứng dụng Spring Boot. Bắt đầu từ Spring Boot 2.3.0, bạn có thể xây dựng image container mà không cần thêm bất kỳ dependency hay tệp cấu hình đặc biệt nào, hoặc chỉnh sửa dự án theo bất kỳ cách nào. Điều đó là nhờ plugin build của Spring Boot cho cả Maven và Gradle đều hỗ trợ trực tiếp việc tạo image container. Để build dự án Spring dùng Maven thành một image container, bạn sử dụng mục tiêu `build-image` từ plugin Spring Boot Maven như sau:

```bash
mvnw spring-boot:build-image
```

Tương tự, một dự án được build bằng Gradle có thể được tạo thành một image container như sau:

```bash
gradlew bootBuildImage
```

Lệnh này sẽ tạo một image với tag mặc định dựa trên các thuộc tính `<artifactId>` và `<version>` trong tệp `pom.xml`. Đối với ứng dụng Taco Cloud, tag sẽ có dạng `library/tacocloud:0.0.19-SNAPSHOT`. Chúng ta sẽ tìm hiểu ngay sau đây cách chỉ định một tag tùy chỉnh cho image.

Các plugin build của Spring Boot dựa vào Docker để tạo image. Do đó, bạn cần cài đặt Docker runtime trên máy dùng để build image. Nhưng một khi image đã được tạo, bạn có thể chạy nó như sau:

```bash
docker run -p8080:8080 library/tacocloud:0.0.19-SNAPSHOT
```

Lệnh này sẽ chạy image và mở cổng 8080 của image (nơi máy chủ nhúng Tomcat hoặc Netty đang lắng nghe) ra cổng 8080 của máy chủ host.

Định dạng mặc định của tag là: `docker.io/library/${project.artifactId}:${project.version}`. Điều này giải thích tại sao tag bắt đầu với “library.” Điều này hoàn toàn ổn nếu bạn chỉ chạy image ở môi trường cục bộ. Nhưng trong hầu hết các trường hợp, bạn sẽ muốn đẩy image đó lên một image registry như DockerHub và cần image được build với tag tham chiếu đến tên repository của bạn.

Ví dụ, giả sử tên repository của tổ chức bạn trên DockerHub là `tacocloud`. Trong trường hợp đó, bạn sẽ muốn tên image là: `tacocloud/tacocloud:0.0.19-SNAPSHOT` tức là thay thế tiền tố mặc định “library” bằng “tacocloud.” Để làm được điều này, bạn chỉ cần chỉ định một thuộc tính khi build image. Đối với Maven, bạn chỉ định tên image bằng cách sử dụng thuộc tính hệ thống JVM `spring-boot.build-image.imageName` như sau:

```bash
$ mvnw spring-boot:build-image \
    -Dspring-boot.build-image.imageName=tacocloud/tacocloud:0.0.19-SNAPSHOT
```

Đối với một dự án được build bằng Gradle, cách làm còn đơn giản hơn một chút. Bạn chỉ cần chỉ định tên image bằng tham số `--imageName` như sau:

```bash
gradlew bootBuildImage --imageName=tacocloud/tacocloud:0.0.19-SNAPSHOT
```

Cả hai cách chỉ định tên image này đều yêu cầu bạn phải nhớ thực hiện khi build image, và phải chắc chắn không mắc lỗi. Để đơn giản hơn nữa, bạn có thể cấu hình sẵn tên image trong quá trình build.

Trong Maven, bạn chỉ định tên image dưới dạng một mục cấu hình trong plugin Spring Boot Maven. Ví dụ, đoạn trích sau trong tệp `pom.xml` của dự án cho thấy cách chỉ định tên image bằng một khối `<configuration>`:

```xml
<plugin>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-maven-plugin</artifactId>
  <configuration>
    <image>
      <name>tacocloud/${project.artifactId}:${project.version}</name>
    </image>
  </configuration>
</plugin>
```

Lưu ý rằng thay vì gán cứng giá trị artifact ID và version, chúng ta có thể tận dụng các biến trong quá trình build để tham chiếu đến các giá trị đã được khai báo ở nơi khác trong quá trình build. Điều này loại bỏ nhu cầu phải chỉnh tay số phiên bản trong tên image khi dự án thay đổi. Đối với dự án được build bằng Gradle, đoạn cấu hình sau trong `build.gradle` sẽ đạt được hiệu quả tương tự:

```yaml
bootBuildImage {
  imageName = "habuma/${rootProject.name}:${version}"
}
```

Với cấu hình này có sẵn trong file build của dự án, bạn có thể tạo image từ dòng lệnh mà không cần chỉ định tên image như lúc trước. Tại thời điểm này, bạn có thể chạy image bằng `docker run` như trước (tham chiếu image theo tên mới) hoặc sử dụng `docker push` để đẩy image lên image registry như DockerHub, như minh họa dưới đây:

```bash
docker push habuma/tacocloud:0.0.19-SNAPSHOT
```

Một khi image đã được đẩy lên image registry, nó có thể được kéo và chạy từ bất kỳ môi trường nào có quyền truy cập đến registry đó. Một nơi ngày càng phổ biến để chạy image là Kubernetes. Hãy cùng tìm hiểu cách chạy image trong Kubernetes.
