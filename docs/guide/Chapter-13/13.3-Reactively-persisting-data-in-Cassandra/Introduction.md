## 13.3 Lưu trữ dữ liệu một cách phản ứng trong Cassandra

Để bắt đầu với việc lưu trữ phản ứng (reactive persistence) đối với cơ sở dữ liệu Cassandra, bạn sẽ cần thêm phần phụ thuộc starter sau vào cấu hình build của dự án. Phần phụ thuộc này sẽ thay thế cho bất kỳ phần phụ thuộc Mongo hoặc R2DBC nào mà chúng ta đã sử dụng trước đó.

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-cassandra-reactive</artifactId>
</dependency>
```

Sau đó, bạn sẽ cần khai báo một số chi tiết về keyspace của Cassandra và cách mà schema sẽ được quản lý. Trong tệp `application.yml`, thêm các dòng sau:

```yaml
spring:
  data:
    rest:
      base-path: /data-api
    cassandra:
      keyspace-name: tacocloud
      schema-action: recreate
      local-datacenter: datacenter1
```

Đây là cấu hình YAML giống với cấu hình mà chúng ta đã sử dụng trong chương 4 khi làm việc với các repository Cassandra không phản ứng. Điều quan trọng cần lưu ý là `keyspace-name`. Việc bạn tạo một keyspace với tên đó trong cụm Cassandra của mình là rất cần thiết.

Bạn cũng sẽ cần có một cụm Cassandra đang chạy trên máy cục bộ của mình và lắng nghe tại cổng 9042. Cách dễ nhất để làm điều đó là sử dụng Docker như sau:

```bash
$ docker network create cassandra-net
$ docker run --name my-cassandra --network cassandra-net \
        -p 9042:9042 -d cassandra:latest
```

Nếu cụm Cassandra của bạn nằm trên một máy hoặc cổng khác, bạn sẽ cần chỉ rõ các contact points và cổng trong `application.yml`, như đã trình bày trong chương 4. Để tạo keyspace, chạy CQL shell và sử dụng lệnh `create keyspace` như sau:

```bash
$ docker run -it --network cassandra-net --rm cassandra cqlsh my-cassandra
cqlsh> create keyspace tacocloud
WITH replication = {'class': ’SimpleStrategy', 'replication_factor' : 1};
```

Bây giờ bạn đã có một cụm Cassandra, một keyspace `tacocloud` mới và starter Spring Data Cassandra Reactive trong dự án của mình, bạn đã sẵn sàng bắt đầu định nghĩa các lớp miền (domain classes).
