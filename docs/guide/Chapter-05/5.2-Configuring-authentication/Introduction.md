## 5.2 Cấu hình xác thực

Qua nhiều năm, đã có một số cách khác nhau để cấu hình Spring Security, bao gồm cả cấu hình XML dài dòng. May mắn thay, trong một vài phiên bản gần đây, Spring Security đã hỗ trợ cấu hình bằng Java, dễ đọc và dễ viết hơn rất nhiều.

Trước khi kết thúc chương này, bạn sẽ cấu hình toàn bộ nhu cầu bảo mật của Taco Cloud bằng cấu hình Java cho Spring Security. Nhưng để bắt đầu, bạn sẽ làm quen dần bằng cách viết lớp cấu hình như được hiển thị trong danh sách dưới đây.

**Danh sách 5.1 Một lớp cấu hình cơ bản cho Spring Security**

```java
package tacos.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {

  @Bean
  public PasswordEncoder passwordEncoder() {
  return new BCryptPasswordEncoder();
  }

}
```

Lớp cấu hình bảo mật cơ bản này mang lại điều gì cho bạn? Thực ra là không nhiều. Điều chính mà nó làm là khai báo một bean `PasswordEncoder`, mà chúng ta sẽ sử dụng khi tạo người dùng mới cũng như khi xác thực người dùng lúc đăng nhập. Trong trường hợp này, chúng ta sử dụng `BCryptPasswordEncoder`, một trong số những trình mã hóa mật khẩu được Spring Security cung cấp, bao gồm:

* _BCryptPasswordEncoder_ —— Áp dụng mã hóa băm mạnh bcrypt
* _NoOpPasswordEncoder_ —— Không áp dụng mã hóa
* _Pbkdf2PasswordEncoder_ —— Áp dụng mã hóa PBKDF2
* _SCryptPasswordEncoder_ —— Áp dụng mã hóa băm Scrypt
* _StandardPasswordEncoder_ —— Áp dụng mã hóa băm SHA-256

Dù bạn sử dụng trình mã hóa mật khẩu nào, điều quan trọng cần hiểu là mật khẩu trong cơ sở dữ liệu sẽ không bao giờ được giải mã. Thay vào đó, mật khẩu mà người dùng nhập khi đăng nhập sẽ được mã hóa bằng cùng thuật toán, và sau đó được so sánh với mật khẩu đã mã hóa trong cơ sở dữ liệu. Việc so sánh này được thực hiện trong phương thức `matches()` của `PasswordEncoder`.

Ngoài trình mã hóa mật khẩu, chúng ta sẽ bổ sung thêm nhiều bean vào lớp cấu hình này để định nghĩa cụ thể các yếu tố bảo mật cho ứng dụng. Chúng ta sẽ bắt đầu bằng việc cấu hình một kho người dùng có thể xử lý nhiều người dùng.

Để cấu hình kho người dùng cho mục đích xác thực, bạn cần khai báo một bean `UserDetailsService`. Giao diện `UserDetailsService` khá đơn giản, chỉ bao gồm một phương thức cần được triển khai. Dưới đây là giao diện của `UserDetailsService`:

```java
public interface UserDetailsService {

  UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

}

```

Phương thức `loadUserByUsername()` chấp nhận một tên người dùng và sử dụng nó để tìm kiếm một đối tượng `UserDetails`. Nếu không tìm thấy người dùng với tên đăng nhập đã cho, thì nó sẽ ném ra ngoại lệ `UsernameNotFoundException`.

Hóa ra, Spring Security cung cấp sẵn một số hiện thực của `UserDetailsService`, bao gồm:

* An in-memory user store
* A JDBC user store
* An LDAP user store

Hoặc, bạn cũng có thể tự tạo một hiện thực phù hợp với nhu cầu bảo mật cụ thể của ứng dụng của mình.

Để bắt đầu, hãy thử sử dụng hiện thực `UserDetailsService` trong bộ nhớ (in-memory).
