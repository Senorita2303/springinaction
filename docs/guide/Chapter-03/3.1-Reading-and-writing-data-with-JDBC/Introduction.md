## 3.1 Đọc và ghi dữ liệu với JDBC

Trong nhiều thập kỷ, cơ sở dữ liệu quan hệ và SQL đã giữ vững vị trí là lựa chọn hàng đầu cho việc lưu trữ dữ liệu. Mặc dù đã có nhiều loại cơ sở dữ liệu thay thế xuất hiện trong những năm gần đây, cơ sở dữ liệu quan hệ vẫn là lựa chọn hàng đầu cho một kho lưu trữ dữ liệu đa năng và khó có thể bị thay thế trong tương lai gần.

Khi làm việc với dữ liệu quan hệ, các lập trình viên Java có một vài lựa chọn. Hai lựa chọn phổ biến nhất là JDBC và JPA. Spring hỗ trợ cả hai thông qua các lớp trừu tượng, giúp việc làm việc với JDBC hoặc JPA dễ dàng hơn nhiều so với khi không có Spring. Trong phần này, chúng ta sẽ tập trung vào cách Spring hỗ trợ JDBC, và sau đó sẽ tìm hiểu hỗ trợ JPA trong phần 3.2.

Hỗ trợ JDBC của Spring dựa trên lớp `JdbcTemplate`. `JdbcTemplate` cung cấp một cách để các lập trình viên thực hiện các thao tác SQL với cơ sở dữ liệu quan hệ mà không cần tất cả những đoạn mã rườm rà và lặp lại thường thấy khi làm việc với JDBC.

Để thấy được sự hữu ích của `JdbcTemplate`, hãy bắt đầu với một ví dụ về cách thực hiện một truy vấn đơn giản trong Java mà không sử dụng `JdbcTemplate`.

**Listing 3.1 Truy vấn cơ sở dữ liệu mà không dùng JdbcTemplate**

```java
@Override
public Optional<Ingredient> findById(String id) {
  Connection connection = null;
  PreparedStatement statement = null;
  ResultSet resultSet = null;
  try {
    connection = dataSource.getConnection();
    statement = connection.prepareStatement(
        "select id, name, type from Ingredient");
    statement.setString(1, id);
    resultSet = statement.executeQuery();
    Ingredient ingredient = null;
    if(resultSet.next()) {
      ingredient = new Ingredient(
        resultSet.getString("id"),
        resultSet.getString("name"),
        Ingredient.Type.valueOf(resultSet.getString("type")));
    }
    return Optional.of(ingredient);
  } catch (SQLException e) {
    // ??? What should be done here ???
  } finally {
    if (resultSet != null) {
      try {
        resultSet.close();
      } catch (SQLException e) {}
    }
    if (statement != null) {
      try {
        statement.close();
      } catch (SQLException e) {}
    }
    if (connection != null) {
      try {
        connection.close();
      } catch (SQLException e) {}
    }
  }
  return null;
}
```

Tôi đảm bảo rằng đâu đó trong đoạn mã ở listing 3.1 có một vài dòng thực hiện truy vấn cơ sở dữ liệu để lấy nguyên liệu. Nhưng có lẽ bạn đã rất khó khăn để tìm ra câu truy vấn đó giữa đống mã JDBC phức tạp. Nó bị bao quanh bởi những đoạn mã để tạo kết nối, tạo câu lệnh và dọn dẹp sau khi thực hiện truy vấn bằng cách đóng kết nối, câu lệnh và `ResultSet`.

Tồi tệ hơn nữa, có rất nhiều điều có thể xảy ra lỗi khi tạo kết nối, tạo câu lệnh hoặc thực hiện truy vấn. Điều này đòi hỏi bạn phải bắt ngoại lệ `SQLException`, mà có thể hoặc không giúp ích trong việc xác định lỗi gì đã xảy ra hoặc cách khắc phục nó.

`SQLException` là một checked exception, điều đó nghĩa là bạn buộc phải xử lý nó trong khối `catch`. Nhưng phần lớn các lỗi phổ biến, như không thể kết nối đến cơ sở dữ liệu hoặc câu truy vấn bị sai cú pháp, thực tế không thể xử lý một cách hợp lý trong khối `catch` và thường cần được ném lại để xử lý ở cấp cao hơn. Trái lại, hãy xem xét phương thức dưới đây sử dụng `JdbcTemplate` của Spring.

**Listing 3.2 Truy vấn cơ sở dữ liệu với JdbcTemplate**

```java
private JdbcTemplate jdbcTemplate;

public Optional<Ingredient> findById(String id) {
  List<Ingredient> results = jdbcTemplate.query(
    "select id, name, type from Ingredient where id=?",
    this::mapRowToIngredient,
    id);
  return results.size() == 0 ?
      Optional.empty() :
      Optional.of(results.get(0));
}
private Ingredient mapRowToIngredient(ResultSet row, int rowNum)
    throws SQLException {
  return new Ingredient(
    row.getString("id"),
    row.getString("name"),
    Ingredient.Type.valueOf(row.getString("type")));
}
```

Đoạn mã trong listing 3.2 rõ ràng đơn giản hơn nhiều so với ví dụ JDBC thuần túy trong listing 3.1; không có bất kỳ `Statement` hay `Connection` nào được tạo thủ công. Và sau khi phương thức hoàn tất, cũng không cần dọn dẹp các đối tượng đó. Cuối cùng, cũng không cần xử lý những ngoại lệ không thể xử lý hợp lý trong khối `catch`. Phần còn lại là đoạn mã tập trung duy nhất vào việc thực hiện truy vấn (gọi phương thức `query()` của `JdbcTemplate`) và ánh xạ kết quả sang đối tượng `Ingredient` (được xử lý bởi phương thức `mapRowToIngredient()`).

Đoạn mã trong listing 3.2 là một phần ví dụ về những gì bạn cần làm để sử dụng `JdbcTemplate` nhằm lưu trữ và đọc dữ liệu trong ứng dụng Taco Cloud. Hãy tiếp tục với các bước cần thiết tiếp theo để trang bị khả năng lưu trữ dữ liệu bằng JDBC cho ứng dụng. Chúng ta sẽ bắt đầu bằng cách thực hiện một vài điều chỉnh nhỏ đối với các đối tượng miền (domain objects).
