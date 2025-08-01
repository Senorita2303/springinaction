import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
  title: 'FileCodeBox',
  description: 'Công cụ chia sẻ tệp đơn giản và hiệu quả',
  lang: 'vi-VN',
  lastUpdated: true,
  ignoreDeadLinks: true,
  base: '/springinaction/',
  head: [['link', { rel: 'icon', href: '/springinaction/logo_small.png' }]],
  locales: {
    root: {
      label: 'Tiếng Việt',
      lang: 'vi-VN',
      title: 'FileCodeBox',
      description: 'Chia sẻ mật khẩu ẩn danh văn bản, tập tin',
      themeConfig: {
        logo: '/springinaction/logo_small.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/readme' },
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Spring in Action (6th Edition)',
              link: '/guide/README'
            },
            {
              text: 'Chào mừng',
              link: '/guide/Welcome'
            },
            {
              text: 'Chương 1 Bắt đầu với Spring',
              link: '/guide/Chapter-01/Introduction',
              collapsed: false,
              items: [
                { text: '1.1 Spring là gì?', link: '/guide/Chapter-01/1.1-What-is-Spring' },
                {
                  text: '1.2 Khởi tạo một ứng dụng Spring',
                  link: '/guide/Chapter-01/1.2-Initializing-a-Spring-application/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.2.1 Khởi tạo một project Spring với Spring Tool Suite',
                      link: '/guide/Chapter-01/1.2-Initializing-a-Spring-application/1.2.1-Initializing-a-Spring-project-with-Spring-Tool-Suite',
                    },
                    {
                      text: '1.2.2 Xem cấu trúc project Spring',
                      link: '/guide/Chapter-01/1.2-Initializing-a-Spring-application/1.2.2-Examining-the-Spring-project-structure',
                    },
                  ],
                },
                {
                  text: '1.3 Viết một ứng dụng Spring',
                  link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.3.1 Xử lý web requests',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.1-Handling-web-requests',
                    },
                    {
                      text: '1.3.2 Định nghĩa view',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.2-Defining-the-view',
                    },
                    {
                      text: '1.3.3 Kiểm thử controller',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.3-Testing-the-controller',
                    },
                    {
                      text: '1.3.4 Build và chạy ứng dụng',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.4-Building-and-running-the-application',
                    },
                    {
                      text: '1.3.5 Làm quen với Spring Boot DevTools',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.5-Getting-to-know-Spring-Boot-DevTools',
                    },
                    {
                      text: '1.3.6 Ôn tập',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.6-Let%27s-review',
                    },
                  ],
                },
                {
                  text: '1.4 Khảo sát hệ sinh thái Spring',
                  link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.4.1 Core Spring Framework',
                      link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.1-The-core-Spring-Framework',
                    },
                    {
                      text: '1.4.2 Spring Boot',
                      link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.2-Spring-Boot',
                    },
                    {
                      text: '1.4.3 Spring Data',
                      link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.3-Spring-Data',
                    },
                    {
                      text: '1.4.4 Spring Security',
                      link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.4-Spring-Security',
                    },
                    {
                      text: '1.4.5 Spring Integration và Spring Batch',
                      link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.5-Spring-Integration-and-Spring-Batch',
                    },
                    {
                      text: '1.4.6 Spring Cloud',
                      link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.6-Spring-Cloud',
                    },
                    {
                      text: '1.4.7 Spring Native',
                      link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.7-Spring-Native',
                    },
                  ],
                },
                { text: '1.5 Tóm tắt', link: '/guide/Chapter-01/1.5-Summary' },
              ],
            },
            {
              text: 'Chương 2 Phát triển ứng dụng web',
              link: '/guide/Chapter-02/Introduction',
              collapsed: false,
              items: [
                {
                  text: '2.1 Hiển thị thông tin',
                  link: '/guide/Chapter-02/2.1-Displaying-information/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.1.1 Thiết lập domain',
                      link: '/guide/Chapter-02/2.1-Displaying-information/2.1.1-Establishing-the-domain',
                    },
                    {
                      text: '2.1.2 Tạo controller class',
                      link: '/guide/Chapter-02/2.1-Displaying-information/2.1.2-Creating-a-controller-class',
                    },
                    {
                      text: '2.1.3 Thiết kế view',
                      link: '/guide/Chapter-02/2.1-Displaying-information/2.1.3-Designing-the-view',
                    },
                  ],
                },
                { text: '2.2 Xử lý form submission', link: '/guide/Chapter-02/2.2-Processing-form-submission' },
                {
                  text: '2.3 Xác thực dữ liệu nhập từ form',
                  link: '/guide/Chapter-02/2.3-Validating-form-input/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.3.1 Khai báo các quy tắc validation',
                      link: '/guide/Chapter-02/2.3-Validating-form-input/2.3.1-Declaring-validation-rules',
                    },
                    {
                      text: '2.3.2 Thực hiện validation khi binding form',
                      link: '/guide/Chapter-02/2.3-Validating-form-input/2.3.2-Performing-validation-at-form-binding',
                    },
                    {
                      text: '2.3.3 Hiển thị lỗi validation',
                      link: '/guide/Chapter-02/2.3-Validating-form-input/2.3.3-Displaying-validation-errors',
                    },
                  ],
                },
                { text: '2.4 Làm việc với view controllers', link: '/guide/Chapter-02/2.4-Working-with-view-controllers' },
                {
                  text: '2.5 Lựa chọn thư viện template cho view',
                  link: '/guide/Chapter-02/2.5-Choosing-a-view-template-library/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.5.1 Caching templates',
                      link: '/guide/Chapter-02/2.5-Choosing-a-view-template-library/2.5.1-Caching-templates',
                    }
                  ],
                },
                { text: '2.6 Tóm tắt', link: '/guide/Chapter-02/2.6-Summary' },
              ],
            },
            {
              text: 'Chương 3 Làm việc với dữ liệu',
              link: '/guide/Chapter-03/Introduction',
              collapsed: false,
              items: [
                {
                  text: '3.1 Đọc và ghi dữ liệu với JDBC',
                  link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.1.1 Đọc và ghi dữ liệu với JDBC',
                      link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.1-Adapting-the-domain-for-persistence',
                    },
                    {
                      text: '3.1.2 Làm việc với JdbcTemplate',
                      link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.2-Working-with-JdbcTemplate',
                    },
                    {
                      text: '3.1.3 Định nghĩa schema và preload dữ liệu',
                      link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.3-Defining-a-schema-and-preloading-data',
                    },
                    {
                      text: '3.1.4 Thêm dữ liệu',
                      link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.4-Inserting-data',
                    },
                  ],
                },
                {
                  text: '3.2 Làm việc với Spring Data JDBC',
                  link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.2.1 Thêm Spring Data JDBC vào build',
                      link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.1-Adding-Spring-Data-JDBC-to-the-build',
                    },
                    {
                      text: '3.2.2 Định nghĩa repository interfaces',
                      link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.2-Defining-repository-interfaces',
                    },
                    {
                      text: '3.2.3 Gắn annotation cho domain để lưu trữ',
                      link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.3-Annotating-the-domain-for-persistence',
                    },
                    {
                      text: '3.2.4 Preload dữ liệu với CommandLineRunner',
                      link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.4-Preloading-data-with-CommandLineRunner',
                    },
                  ],
                },
                {
                  text: '3.3 Lưu trữ dữ liệu với Spring Data JPA',
                  link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.3.1 Thêm Spring Data JPA vào project',
                      link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.1-Adding-Spring-Data-JPA-to-the-project',
                    },
                    {
                      text: '3.3.2 Gắn annotation domain thành entities',
                      link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.2-Annotating-the-domain-as-entities',
                    },
                    {
                      text: '3.3.3 Khai báo JPA Repository',
                      link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.3-Declaring-JPA-repositories',
                    },
                    {
                      text: '3.3.4 Tùy chỉnh repositories',
                      link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.4-Customizing-repositories',
                    },
                  ],
                },
                { text: '3.4 Tóm tắt', link: '/guide/Chapter-03/3.4-Summary' },
              ],
            },
            {
              text: 'Chương 4 Làm việc với dữ liệu phi quan hệ',
              link: '/guide/Chapter-04/Introduction',
              collapsed: false,
              items: [
                {
                  text: '4.1 Làm việc với Cassandra repositories',
                  link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '4.1.1 Kích hoạt Spring Data Cassandra',
                      link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.1-Enabling-Spring-Data-Cassandra',
                    },
                    {
                      text: '4.1.2 Hiểu mô hình dữ liệu Cassandra',
                      link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.2-Understanding-Cassandra-data-modeling',
                    },
                    {
                      text: '4.1.3 Ánh xạ domain cho lưu trữ Cassandra',
                      link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.3-Mapping-domain-types-for-Cassandra-persistence',
                    },
                    {
                      text: '4.1.4 Viết Cassandra repositories',
                      link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.4-Writing-Cassandra-repositories',
                    },
                  ],
                },
                {
                  text: '4.2 Viết MongoDB repositories',
                  link: '/guide/Chapter-04/4.2-Writing-MongoDB-repositories/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '4.2.1 Kích hoạt Spring Data MongonDB',
                      link: '/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.1-Enabling-Spring-Data-MongoDB',
                    },
                    {
                      text: '4.2.2 Ánh xạ domain sang document',
                      link: '/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.2-Mapping-domain-types-to-documents',
                    },
                    {
                      text: '4.2.3 Viết MongoDB repository interfaces',
                      link: '/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.3-Writing-MongoDB-repository-interfaces',
                    },
                  ],
                },
                { text: '4.3 Tóm tắt', link: '/guide/Chapter-04/4.3-Summary' },
              ],
            },
            {
              text: 'Chương 5 Bảo mật Spring',
              link: '/guide/Chapter-05/Introduction',
              collapsed: false,
              items: [
                { text: '5.1 Kích hoạt Spring Security', link: '/guide/Chapter-05/5.1-Enabling-Spring-Security' },
                {
                  text: '5.2 Cấu hình xác thực (authentication)',
                  link: '/guide/Chapter-05/5.2-Configuring-authentication/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '5.2.1 Dịch vụ user details trong bộ nhớ (in-memory)',
                      link: '/guide/Chapter-05/5.2-Configuring-authentication/5.2.1-In-memory-user-details-service',
                    },
                    {
                      text: '5.2.2 Tùy chỉnh xác thực người dùng',
                      link: '/guide/Chapter-05/5.2-Configuring-authentication/5.2.2-Customizing-user-authentication',
                    },
                  ],
                },
                {
                  text: '5.3 Bảo mật web requests',
                  link: '/guide/Chapter-05/5.3-Securing-web-requests/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '5.3.1 Bảo mật requests',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.1-Securing-requests',
                    },
                    {
                      text: '5.3.2 Tạo trang đăng nhập tùy chỉnh',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.2-Creating-a-custom-login-page',
                    },
                    {
                      text: '5.3.3 Kích hoạt xác thực từ bên thứ ba',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.3-Enabling-third-party-authentication',
                    },
                    {
                      text: '5.3.4 Đăng xuất',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.4-Logging-out',
                    },
                    {
                      text: '5.3.5 Ngăn chặn cross-site request forgery',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.5-Preventing-cross-site-request-forgery',
                    },
                  ],
                },
                { text: '5.4 Áp dụng bảo mật cấp phương thức', link: '/guide/Chapter-05/5.4-Applying-method-level-security' },
                { text: '5.5 Nhận biết người dùng của bạn', link: '/guide/Chapter-05/5.5-Knowing-your-user' },
                { text: '5.6 Tóm tắt', link: '/guide/Chapter-05/5.6-Summary' },
              ],
            },
            {
              text: 'Chương 6 Làm việc với configuration properties',
              link: '/guide/Chapter-06/Introduction',
              collapsed: false,
              items: [
                {
                  text: '6.1 Tinh chỉnh configuration',
                  link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.1.1 Hiểu abstraction môi trường của Spring',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.1-Understanding-Spring’s-environment-abstraction',
                    },
                    {
                      text: '6.1.2 Cấu hình data source',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.2-Configuring-a-data-source',
                    },
                    {
                      text: '6.1.3 Cấu hình embedded server',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.3-Configuring-the-embedded-server',
                    },
                    {
                      text: '6.1.4 Cấu hình logging',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.4-Configuring-logging',
                    },
                    {
                      text: '6.1.5 Sử dụng các giá trị property đặc biệt',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.5-Using-special-property-values',
                    },
                  ],
                },
                {
                  text: '6.2 Tạo configuration properties của riêng bạn',
                  link: '/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.2.1 Định nghĩa configuration property holders',
                      link: '/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/6.2.1-Defining-configuration-propertiesholders',
                    },
                    {
                      text: '6.2.2 Khai báo metadata cho property',
                      link: '/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/6.2.2-Declaring-configuration-property-metadata',
                    },
                  ],
                },
                {
                  text: '6.3 Cấu hình với profiles',
                  link: '/guide/Chapter-06/6.3-Configuring-with-profiles/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.3.1 Định nghĩa properties theo profile',
                      link: '/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.1-Defining-profile-specific-properties',
                    },
                    {
                      text: '6.3.2 Kích hoạt profile',
                      link: '/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.2-Activating-profiles',
                    },
                    {
                      text: '6.3.3 Tạo beans có điều kiện theo profile',
                      link: '/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.3-Conditionally-creating-beans-with-profiles',
                    },
                  ],
                },
                { text: '6.4 Tóm tắt', link: '/guide/Chapter-06/6.4-Summary' },
              ],
            },
            {
              text: 'Chương 7 Tạo REST services',
              link: '/guide/Chapter-07/Introduction',
              collapsed: false,
              items: [
                {
                  text: '7.1 Viết RESTful controllers',
                  link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.1.1 Truy xuất dữ liệu từ server',
                      link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.1-Retrieving-data-from-the-server',
                    },
                    {
                      text: '7.1.2 Gửi dữ liệu lên server',
                      link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.2-Sending-data-to-the-server',
                    },
                    {
                      text: '7.1.3 Cập nhật dữ liệu trên server',
                      link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.3-Updating-data-on-the-server',
                    },
                    {
                      text: '7.1.4 Xóa dữ liệu từ server',
                      link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.4-Deleting-data-from-the-server',
                    },
                  ],
                },
                {
                  text: '7.2 Kích hoạt các dịch vụ dựa trên dữ liệu',
                  link: '/guide/Chapter-07/7.2-Enabling-data-backed-services/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.2.1 Điều chỉnh resource paths và tên quan hệ',
                      link: '/guide/Chapter-07/7.2-Enabling-data-backed-services/7.2.1-Adjusting-resource-paths-and-relation-names',
                    },
                    {
                      text: '7.2.2 Phân trang và sắp xếp',
                      link: '/guide/Chapter-07/7.2-Enabling-data-backed-services/7.2.2-Paging-and-sorting',
                    },
                  ],
                },
                {
                  text: '7.3 Tiêu thụ REST services',
                  link: '/guide/Chapter-07/7.3-Consuming-REST-services/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.3.1 GET tài nguyên',
                      link: '/guide/Chapter-07/7.3-Consuming-REST-services/7.3.1-GETting-resources',
                    },
                    {
                      text: '7.3.2 PUT tài nguyên',
                      link: '/guide/Chapter-07/7.3-Consuming-REST-services/7.3.2-PUTting-resources',
                    },
                    {
                      text: '7.3.3 DELETE tài nguyên',
                      link: '/guide/Chapter-07/7.3-Consuming-REST-services/7.3.3-DELETEing-resources',
                    },
                    {
                      text: '7.3.4 POST dữ liệu tài nguyên',
                      link: '/guide/Chapter-07/7.3-Consuming-REST-services/7.3.4-POSTing-resource-data',
                    },
                  ],
                },
                { text: '7.4 Tóm tắt', link: '/guide/Chapter-07/7.4-Summary' },
              ],
            },
            {
              text: 'Chương 8 Bảo mật REST',
              link: '/guide/Chapter-08/Introduction',
              collapsed: false,
              items: [
                { text: '8.1 Giới thiệu OAuth 2', link: '/guide/Chapter-08/8.1-Introducing-OAuth-2' },
                { text: '8.2 Tạo authorization server', link: '/guide/Chapter-08/8.2-Creating-an-Authorization-Server' },
                { text: '8.3 Bảo vệ API với resource server', link: '/guide/Chapter-08/8.3-Securing-an-API-with-a-Resource-Server' },
                { text: '8.4 Phát triển client', link: '/guide/Chapter-08/8.4-Developing-the-client' },
                { text: '8.5 Tóm tắt', link: '/guide/Chapter-08/8.5-Summary' },
              ],
            },
            {
              text: 'Chương 9 Gửi tin nhắn bất đồng bộ',
              link: '/guide/Chapter-09/Introduction',
              collapsed: false,
              items: [
                {
                  text: '9.1 Gửi tin nhắn với JMS',
                  link: '/guide/Chapter-09/9.1-Sending-messages-with-JMS/Introduction',
                  collapsed: false,
                  items: [
                    { text: '9.1.1 Thiết lập JMS', link: '/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.1-Setting-up-JMS' },
                    { text: '9.1.2 Gửi tin nhắn với JmsTemplate', link: '/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.2-Sending-messages-with-JmsTemplate' },
                    { text: '9.1.3 Nhận tin nhắn JMS', link: '/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.3-Receiving-JMS-messages' },
                  ],
                },
                {
                  text: '9.2 Làm việc với RabbitMQ và AMQP',
                  link: '/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/Introduction',
                  collapsed: false,
                  items: [
                    { text: '9.2.1 Thêm RabbitMQ vào Spring', link: '/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.1-Adding-RabbitMQ-to-Spring' },
                    { text: '9.2.2 Gửi tin nhắn với RabbitTemplate', link: '/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.2-Sending-messages-with-RabbitTemplate' },
                    { text: '9.2.3 Nhận tin nhắn từ RabbitMQ', link: '/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.3-Receiving-message-from-RabbitMQ' },
                  ],
                },
                {
                  text: '9.3 Nhắn tin với Kafka',
                  link: '/guide/Chapter-09/9.3-Messaging-with-Kafka/Introduction',
                  collapsed: false,
                  items: [
                    { text: '9.3.1 Thiết lập Spring cho Kafka', link: '/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.1-Setting-up-Spring-for-Kafka-messaging' },
                    { text: '9.3.2 Gửi tin nhắn với KafkaTemplate', link: '/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.2-Sending-messages-with-KafkaTemplate' },
                    { text: '9.3.3 Viết Kafka listeners', link: '/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.3-Writing-Kafka-listeners' },
                  ],
                },
                { text: '9.4 Tóm tắt', link: '/guide/Chapter-09/9.4-Summary' },
              ],
            },
            {
              text: 'Chương 10 Tích hợp Spring',
              link: '/guide/Chapter-10/Introduction',
              collapsed: false,
              items: [
                {
                  text: '10.1 Khai báo một integration flow đơn giản',
                  link: '/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '10.1.1 Định nghĩa integration flow bằng XML',
                      link: '/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.1-Defining-integration-flows-with-XML',
                    },
                    {
                      text: '10.1.2 Cấu hình integration flow trong Java',
                      link: '/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.2-Configuring-integration-flows-in-Java',
                    },
                    {
                      text: '10.1.3 Sử dụng Spring Integration\'s DSL configuration',
                      link: '/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.3-Using-Spring-Integration’s-DSL-configuration',
                    },
                  ],
                },
                {
                  text: '10.2 Khảo sát hệ sinh thái Spring Integration',
                  link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '10.2.1 Message channels',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.1-Message-channels',
                    },
                    {
                      text: '10.2.2 Filters',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.2-Filters',
                    },
                    {
                      text: '10.2.3 Transformers',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.3-Transformers',
                    },
                    {
                      text: '10.2.4 Routers',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.4-Routers',
                    },
                    {
                      text: '10.2.5 Splitters',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.5-Splitters',
                    },
                    {
                      text: '10.2.6 Service activators',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.6-Service-activators',
                    },
                    {
                      text: '10.2.7 Gateways',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.7-Gateways',
                    },
                    {
                      text: '10.2.8 Channel adapters',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.8-Channel-adapters',
                    },
                    {
                      text: '10.2.9 Endpoint modules',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.9-Endpoint-modules',
                    },
                  ],
                },
                { text: '10.3 Tạo một email integration flow', link: '/guide/Chapter-10/10.3-Creating-an-email-integration-flow' },
                { text: '10.4 Tóm tắt', link: '/guide/Chapter-10/10.4-Summary' },
              ],
            },
            {
              text: 'Chương 11 Giới thiệu Reactor',
              link: '/guide/Chapter-11/Introduction',
              collapsed: false,
              items: [
                {
                  text: '11.1 Hiểu lập trình reactive',
                  link: '/guide/Chapter-11/11.1-Understanding-reactive-programming/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.1.1 Định nghĩa Reactive Streams',
                      link: '/guide/Chapter-11/11.1-Understanding-reactive-programming/11.1.1-Defining-Reactive-Streams',
                    },
                  ],
                },
                {
                  text: '11.2 Bắt đầu với Reactor',
                  link: '/guide/Chapter-11/11.2-Getting-started-with-Reactor/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.2.1 Vẽ sơ đồ reactive flows',
                      link: '/guide/Chapter-11/11.2-Getting-started-with-Reactor/11.2.1-Diagramming-reactive-flows',
                    },
                    {
                      text: '11.2.2 Thêm dependencies cho Reactor',
                      link: '/guide/Chapter-11/11.2-Getting-started-with-Reactor/11.2.2-Adding-Reactor-dependencies',
                    },
                  ],
                },
                {
                  text: '11.3 Áp dụng các thao tác reactive phổ biến',
                  link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.3.1 Tạo các reactive types',
                      link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.1-Creating-reactive-types',
                    },
                    {
                      text: '11.3.2 Kết hợp các reactive types',
                      link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.2-Combining-reactive-types',
                    },
                    {
                      text: '11.3.3 Biến đổi và lọc reactive streams',
                      link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.3-Transforming-and-filtering-reactive-streams',
                    },
                    {
                      text: '11.3.4 Thực hiện các thao tác logic trên reactive types',
                      link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.4-Performing-logic-operations-on-reactive-types',
                    },
                  ],
                },
                { text: '11.4 Tóm tắt', link: '/guide/Chapter-11/11.4-Summary' },
              ],
            },
            {
              text: 'Chương 12 Phát triển reactive APIs',
              link: '/guide/Chapter-12/Introduction',
              collapsed: false,
              items: [
                {
                  text: '12.1 Làm việc với Spring WebFlux',
                  link: '/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.1.1 Giới thiệu Spring WebFlux',
                      link: '/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/12.1.1-Introducing-Spring-WebFlux',
                    },
                    {
                      text: '12.1.2 Viết reactive controllers',
                      link: '/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/12.1.2-Writing-reactive-controllers',
                    },
                  ],
                },
                { text: '12.2 Định nghĩa functional request handlers', link: '/guide/Chapter-12/12.2-Defining-functional-request-handlers' },
                {
                  text: '12.3 Kiểm thử reactive controllers',
                  link: '/guide/Chapter-12/12.3-Testing-reactive-controllers/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.3.1 Kiểm thử các yêu cầu GET',
                      link: '/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.1-Testing-GET-requests',
                    },
                    {
                      text: '12.3.2 Kiểm thử các yêu cầu POST',
                      link: '/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.2-Testing-POST-requests',
                    },
                    {
                      text: '12.3.3 Kiểm thử với server thật',
                      link: '/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.3-Testing-with-a-live-server',
                    },
                  ],
                },
                {
                  text: '12.4 Tiêu thụ REST APIs theo cách reactive',
                  link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.4.1 GET tài nguyên',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.1-GETting-resources',
                    },
                    {
                      text: '12.4.2 Gửi tài nguyên',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.2-Sending-resources',
                    },
                    {
                      text: '12.4.3 Xóa tài nguyên',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.3-Deleting-resources',
                    },
                    {
                      text: '12.4.4 Xử lý lỗi',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.4-Handling-errors',
                    },
                    {
                      text: '12.4.5 Exchanging requests',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.5-Exchanging-requests',
                    },
                  ],
                },
                {
                  text: '12.5 Bảo mật reactive web APIs',
                  link: '/guide/Chapter-12/12.5-Securing-reactive-web-APIs/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.5.1 Cấu hình reactive web security',
                      link: '/guide/Chapter-12/12.5-Securing-reactive-web-APIs/12.5.1-Configuring-reactive-web-security',
                    },
                    {
                      text: '12.5.2 Cấu hình reactive user details service',
                      link: '/guide/Chapter-12/12.5-Securing-reactive-web-APIs/12.5.2-Configuring-a-reactive-user-details-service',
                    },
                  ],
                },
                { text: '12.6 Tóm tắt', link: '/guide/Chapter-12/12.6-Summary' },
              ],
            },
            {
              text: 'Chương 13 Lưu trữ dữ liệu theo cách reactive',
              link: '/guide/Chapter-13/Introduction',
              collapsed: false,
              items: [
                {
                  text: '13.1 Làm việc với R2DBC',
                  link: '/guide/Chapter-13/13.1-Working-with-R2DBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.1.1 Định nghĩa domain entities cho R2DBC',
                      link: '/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.1-Defining-domain-entities-for-R2DBC',
                    },
                    {
                      text: '13.1.2 Định nghĩa reactive repositories',
                      link: '/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.2-Defining-reactive-repositories',
                    },
                    {
                      text: '13.1.3 Kiểm thử R2DBC repositories',
                      link: '/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.3-Testing-R2DBC-repositories',
                    },
                    {
                      text: '13.1.4 Định nghĩa một OrderRepository aggregate root service',
                      link: '/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.4-Defining-an-OrderRepository-aggregate-root-service',
                    },
                  ],
                },
                {
                  text: '13.2 Lưu trữ dữ liệu document một cách reactive với MongoDB',
                  link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.2.1 Định nghĩa domain document types',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.1-Defining-domain-document-types',
                    },
                    {
                      text: '13.2.2 Định nghĩa reactive MongoDB repositories',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.2-Defining-reactive-MongoDB-repositories',
                    },
                    {
                      text: '13.2.3 Kiểm thử reactive MongoDB repositories',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.3-Testing-reactive-MongoDB-repositories',
                    },
                  ],
                },
                {
                  text: '13.3 Lưu trữ dữ liệu reactive trong Cassandra',
                  link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.2.1 Định nghĩa domain classes cho Cassandra',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.1-Defining-domain-document-types',
                    },
                    {
                      text: '13.2.2 Tạo reactive Cassandra repositories',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.2-Defining-reactive-MongoDB-repositories',
                    },
                    {
                      text: '13.2.3 Kiểm thử reactive Cassandra repositories',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.3-Testing-reactive-MongoDB-repositories',
                    },
                  ],
                },
                { text: '13.4 Tóm tắt', link: '/guide/Chapter-13/13.4-Summary' },
              ],
            },
            {
              text: 'Chương 14 Làm việc với RSocket',
              link: '/guide/Chapter-14/Introduction',
              collapsed: false,
              items: [
                { text: '14.1 Giới thiệu RSocket', link: '/guide/Chapter-14/14.1-Introducing-RSocket' },
                {
                  text: '14.2 Tạo một RSocket server và client đơn giản',
                  link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '14.2.1 Làm việc với request-response',
                      link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.1-Working-with-Request-Response',
                    },
                    {
                      text: '14.2.2 Xử lý request-stream',
                      link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.2-Handling-request-stream-messaging',
                    },
                    {
                      text: '14.2.3 Gửi fire-and-forget messages',
                      link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.3-Sending-Fire-and-Forget-messages',
                    },
                    {
                      text: '14.2.4 Gửi tin nhắn hai chiều (bidirectionally)',
                      link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.4-Sending-messages-bidirectionally',
                    },
                  ],
                },
                { text: '14.3 Truyền tải WebSocket qua RSocket', link: '/guide/Chapter-14/14.3-Transporting-RSocket-over-WebSocket' },
                { text: '14.4 Tóm tắt', link: '/guide/Chapter-14/14.4-Summary' },
              ],
            },
            {
              text: 'Chương 15 Làm việc với Spring Boot Actuator',
              link: '/guide/Chapter-15/Introduction',
              collapsed: false,
              items: [
                {
                  text: '15.1 Giới thiệu Actuator',
                  link: '/guide/Chapter-15/15.1-Introducing-Actuator/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.1.1 Cấu hình đường dẫn cơ bản của Actuator',
                      link: '/guide/Chapter-15/15.1-Introducing-Actuator/15.1.1-Configuring-Actuator%27s-base-path',
                    },
                    {
                      text: '15.1.2 Bật/tắt các Actuator endpoints',
                      link: '/guide/Chapter-15/15.1-Introducing-Actuator/15.1.2-Enabling-and-disabling-Actuator-endpoints',
                    },
                  ],
                },
                {
                  text: '15.2 Tiêu thụ các Actuator endpoints',
                  link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.2.1 Truy xuất thông tin cơ bản của ứng dụng',
                      link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.1-Fetching-essential-application-information',
                    },
                    {
                      text: '15.2.2 Xem chi tiết cấu hình',
                      link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.2-Viewing-configuration-details',
                    },
                    {
                      text: '15.2.3 Xem hoạt động của ứng dụng',
                      link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.3-Viewing-application-activity',
                    },
                    {
                      text: '15.2.4 Theo dõi runtime metrics',
                      link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.4-Tapping-runtime-metrics',
                    },
                  ],
                },
                {
                  text: '15.3 Tùy chỉnh Actuator',
                  link: '/guide/Chapter-15/15.3-Customizing-Actuator/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.3.1 Thêm thông tin vào endpoint /info',
                      link: '/guide/Chapter-15/15.3-Customizing-Actuator/15.3.1-Contributing-information-to-the-info-endpoint',
                    },
                    {
                      text: '15.3.2 Định nghĩa custom metrics',
                      link: '/guide/Chapter-15/15.3-Customizing-Actuator/15.3.2-Defining-custom-health-indicators',
                    },
                    {
                      text: '15.3.3 Đăng ký custom metrics',
                      link: '/guide/Chapter-15/15.3-Customizing-Actuator/15.3.3-Registering-custom-metrics',
                    },
                    {
                      text: '15.3.4 Tạo custom endpoints',
                      link: '/guide/Chapter-15/15.3-Customizing-Actuator/15.3.4-Creating-custom-endpoints',
                    },
                  ],
                },
                { text: '15.4 Bảo mật Actuator', link: '/guide/Chapter-15/15.4-Securing-Actuator' },
                { text: '15.5 Tóm tắt', link: '/guide/Chapter-15/15.5-Summary' },
              ],
            },
            {
              text: 'Chương 16 Quản trị Spring',
              link: '/guide/Chapter-16/Introduction',
              collapsed: false,
              items: [
                {
                  text: '16.1 Sử dụng SpringBoot Admin',
                  link: '/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.1.1 Tạo Admin server',
                      link: '/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/16.1.1-Creating-an-Admin-server',
                    },
                    {
                      text: '16.1.2 Đăng ký các Admin clients',
                      link: '/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/16.1.2-Registering-Admin-clients',
                    },
                  ],
                },
                {
                  text: '16.2 Khám phá Admin server',
                  link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.2.1 Xem tình trạng sức khỏe và thông tin ứng dụng',
                      link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.1-Viewing-general-application-health-and-information',
                    },
                    {
                      text: '16.2.2 Theo dõi các chỉ số quan trọng',
                      link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.2-Watching-key-metrics',
                    },
                    {
                      text: '16.2.3 Kiểm tra các thuộc tính môi trường',
                      link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.3-Examining-environment-properties',
                    },
                    {
                      text: '16.2.4 Xem và điều chỉnh mức đọ logging',
                      link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.4-Viewing-and-setting-logging-levels',
                    },
                  ],
                },
                {
                  text: '16.3 Bảo mật Admin server',
                  link: '/guide/Chapter-16/16.3-Securing-the-Admin-server/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.3.1 Kích hoạt đăng nhập trong Admin server',
                      link: '/guide/Chapter-16/16.3-Securing-the-Admin-server/16.3.1-Enabling-login-in-the-Admin-server',
                    },
                    {
                      text: '16.3.2 Xác thực với Actuator',
                      link: '/guide/Chapter-16/16.3-Securing-the-Admin-server/16.3.2-Authenticating-with-the-Actuator',
                    },
                  ],
                },
                { text: '16.4 Tóm tắt', link: '/guide/Chapter-16/16.4-Summary' },
              ],
            },
            {
              text: 'Chương 17 Giám sát Spring với JMX',
              link: '/guide/Chapter-17/Introduction',
              collapsed: false,
              items: [
                { text: '17.1 Làm việc với Actuator MBeans', link: '/guide/Chapter-17/17.1-Working-with-Actuator-MBeans' },
                { text: '17.2 Tạo MBeans của riêng bạn', link: '/guide/Chapter-17/17.2-Creating-your-own-MBeans' },
                { text: '17.3 Gửi notification', link: '/guide/Chapter-17/17.3-Sending-notifications' },
                { text: '17.4 Tóm tắt', link: '/guide/Chapter-17/17.4-Summary' },
              ],
            },
            {
              text: 'Chương 18 Triển khai Spring',
              link: '/guide/Chapter-18/Introduction',
              collapsed: false,
              items: [
                { text: '18.1 Cân nhắc các tùy chọn triển khai', link: '/guide/Chapter-18/18.1-Weighing-deployment-options' },
                { text: '18.2 Build file JAR có thể thực thi', link: '/guide/Chapter-18/18.2-Building-executable-JAR-files' },
                {
                  text: '18.3 Build container image',
                  link: '/guide/Chapter-18/18.3-Building-container-images/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '18.3.1 Triển khai lên Kubernetes',
                      link: '/guide/Chapter-18/18.3-Building-container-images/18.3.1-Deploying-to-Kubernetes',
                    },
                    {
                      text: '18.3.2 Kích hoạt shutdown an toàn',
                      link: '/guide/Chapter-18/18.3-Building-container-images/18.3.2-Enabling-graceful-shutdown',
                    },
                    {
                      text: '18.3.3 Làm việc với liveness và readiness của ứng dụng',
                      link: '/guide/Chapter-18/18.3-Building-container-images/18.3.3-Working-with-application-liveness-and-readiness',
                    },
                  ],
                },
                { text: '18.4 Build và triển khai file WAR', link: '/guide/Chapter-18/18.4-Building-and-deploying-WAR-files' },
                { text: '18.5 Kết thúc là khởi đầu mới', link: '/guide/Chapter-18/18.5-The-end-is-where-we-begin' },
                { text: '18.6 Tóm tắt', link: '/guide/Chapter-18/18.6-Summary' },
              ],
            },
          ],
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Senorita2303/springinaction' },
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2025-present Senorita2303',
        },
        search: {
          provider: 'local',
        },
        outline: {
          level: [2, 3],
          label: 'On this page',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'FileCodeBox',
      description: 'Simple and efficient file sharing tool',
      themeConfig: {
        logo: '/springinaction/logo_small.png',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/README' },
        ],

        sidebar: {
          '/en/guide/': [
            {
              text: 'Spring in Action (6th Edition)',
              link: '/en/guide/README'
            },
            {
              text: 'Welcome',
              link: '/en/guide/Welcome'
            },
            {
              text: 'Chapter 1. Getting started with Spring',
              link: '/en/guide/Chapter-01/Introduction',
              collapsed: false,
              items: [
                { text: '1.1 What is Spring?', link: '/en/guide/Chapter-01/1.1-What-is-Spring' },
                {
                  text: '1.2 Initializing a Spring application',
                  link: '/en/guide/Chapter-01/1.2-Initializing-a-Spring-application/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.2.1 Initializing a Spring project with Spring Tool Suite',
                      link: '/en/guide/Chapter-01/1.2-Initializing-a-Spring-application/1.2.1-Initializing-a-Spring-project-with-Spring-Tool-Suite',
                    },
                    {
                      text: '1.2.2 Examining the Spring project structure',
                      link: '/en/guide/Chapter-01/1.2-Initializing-a-Spring-application/1.2.2-Examining-the-Spring-project-structure',
                    },
                  ],
                },
                {
                  text: '1.3 Writing a Spring application',
                  link: '/en/guide/Chapter-01/1.3-Writing-a-Spring-application/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.3.1 Handling web requests',
                      link: '/en/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.1-Handling-web-requests',
                    },
                    {
                      text: '1.3.2 Defining the view',
                      link: '/en/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.2-Defining-the-view',
                    },
                    {
                      text: '1.3.3 Testing the controller',
                      link: '/en/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.3-Testing-the-controller',
                    },
                    {
                      text: '1.3.4 Building and running the application',
                      link: '/en/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.4-Building-and-running-the-application',
                    },
                    {
                      text: '1.3.5 Getting to know Spring Boot DevTools',
                      link: '/en/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.5-Getting-to-know-Spring-Boot-DevTools',
                    },
                    {
                      text: '1.3.6  Let’s review',
                      link: '/en/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.6-Let%27s-review',
                    },
                  ],
                },
                {
                  text: '1.4 Surveying the Spring landscape',
                  link: '/en/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.4.1 The core Spring Framework',
                      link: '/en/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.1-The-core-Spring-Framework',
                    },
                    {
                      text: '1.4.2 Spring Boot',
                      link: '/en/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.2-Spring-Boot',
                    },
                    {
                      text: '1.4.3 Spring Data',
                      link: '/en/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.3-Spring-Data',
                    },
                    {
                      text: '1.4.4 Spring Security',
                      link: '/en/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.4-Spring-Security',
                    },
                    {
                      text: '1.4.5 Spring Integration and Spring Batch',
                      link: '/en/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.5-Spring-Integration-and-Spring-Batch',
                    },
                    {
                      text: '1.4.6 Spring Cloud',
                      link: '/en/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.6-Spring-Cloud',
                    },
                    {
                      text: '1.4.7 Spring Native',
                      link: '/en/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/1.4.7-Spring-Native',
                    },
                  ],
                },
                { text: '1.5 Summary', link: '/en/guide/Chapter-01/1.5-Summary' },
              ],
            },
            {
              text: 'Chapter 2. Developing web applications',
              link: '/en/guide/Chapter-02/Introduction',
              collapsed: false,
              items: [
                {
                  text: '2.1 Displaying information',
                  link: '/en/guide/Chapter-02/2.1-Displaying-information/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.1.1 Establishing the domain',
                      link: '/en/guide/Chapter-02/2.1-Displaying-information/2.1.1-Establishing-the-domain',
                    },
                    {
                      text: '2.1.2 Creating a controller class',
                      link: '/en/guide/Chapter-02/2.1-Displaying-information/2.1.2-Creating-a-controller-class',
                    },
                    {
                      text: '2.1.3 Designing the view',
                      link: '/en/guide/Chapter-02/2.1-Displaying-information/2.1.3-Designing-the-view',
                    },
                  ],
                },
                { text: '2.2 Processing form submission', link: '/en/guide/Chapter-02/2.2-Processing-form-submission' },
                {
                  text: '2.3. Validating form input',
                  link: '/en/guide/Chapter-02/2.3-Validating-form-input/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.3.1 Declaring validation rules',
                      link: '/en/guide/Chapter-02/2.3-Validating-form-input/2.3.1-Declaring-validation-rules',
                    },
                    {
                      text: '2.3.2 Performing validation at form binding',
                      link: '/en/guide/Chapter-02/2.3-Validating-form-input/2.3.2-Performing-validation-at-form-binding',
                    },
                    {
                      text: '2.3.3 Displaying validation errors',
                      link: '/en/guide/Chapter-02/2.3-Validating-form-input/2.3.3-Displaying-validation-errors',
                    },
                  ],
                },
                { text: '2.4 Working with view controllers', link: '/en/guide/Chapter-02/2.4-Working-with-view-controllers' },
                {
                  text: '2.5 Choosing a view template library',
                  link: '/en/guide/Chapter-02/2.5-Choosing-a-view-template-library/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.5.1 Caching templates',
                      link: '/en/guide/Chapter-02/2.5-Choosing-a-view-template-library/2.5.1-Caching-templates',
                    }
                  ],
                },
                { text: '2.6 Summary', link: '/en/guide/Chapter-02/2.6-Summary' },
              ],
            },
            {
              text: 'Chapter 3. Working with data',
              link: '/en/guide/Chapter-03/Introduction',
              collapsed: false,
              items: [
                {
                  text: '3.1 Reading and writing data with JDBC',
                  link: '/en/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.1.1 Adapting the domain for persistence',
                      link: '/en/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.1-Adapting-the-domain-for-persistence',
                    },
                    {
                      text: '3.1.2 Working with Jdbc Template',
                      link: '/en/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.2-Working-with-JdbcTemplate',
                    },
                    {
                      text: '3.1.3 Defining a schema and preloading data',
                      link: '/en/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.3-Defining-a-schema-and-preloading-data',
                    },
                    {
                      text: '3.1.4 Inserting data',
                      link: '/en/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.4-Inserting-data',
                    },
                  ],
                },
                {
                  text: '3.2 Working with Spring Data JDBC',
                  link: '/en/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.2.1 Adding Spring Data JDBC to the build',
                      link: '/en/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.1-Adding-Spring-Data-JDBC-to-the-build',
                    },
                    {
                      text: '3.2.2 Defining repository interfaces',
                      link: '/en/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.2-Defining-repository-interfaces',
                    },
                    {
                      text: '3.2.3 Annotating the domain for persistence',
                      link: '/en/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.3-Annotating-the-domain-for-persistence',
                    },
                    {
                      text: '3.2.4 Preloading data with CommandLineRunner',
                      link: '/en/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.4-Preloading-data-with-CommandLineRunner',
                    },
                  ],
                },
                {
                  text: '3.3 Persisting data with Spring Data JPA',
                  link: '/en/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.3.1 Adding Spring Data JPA to the project',
                      link: '/en/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.1-Adding-Spring-Data-JPA-to-the-project',
                    },
                    {
                      text: '3.3.2 Annotating the domain as entities',
                      link: '/en/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.2-Annotating-the-domain-as-entities',
                    },
                    {
                      text: '3.3.3 Declaring JPA Repositories',
                      link: '/en/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.3-Declaring-JPA-repositories',
                    },
                    {
                      text: '3.3.4 Customizing repositories',
                      link: '/en/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.4-Customizing-repositories',
                    },
                  ],
                },
                { text: '3.4 Summary', link: '/en/guide/Chapter-03/3.4-Summary' },
              ],
            },
            {
              text: 'Chapter 4. Working with nonrelational data',
              link: '/en/guide/Chapter-04/Introduction',
              collapsed: false,
              items: [
                {
                  text: '4.1 Working with Cassandra repositories',
                  link: '/en/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '4.1.1 Enabling Spring Data Cassandra',
                      link: '/en/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.1-Enabling-Spring-Data-Cassandra',
                    },
                    {
                      text: '4.1.2 Understanding Cassandra data modeling',
                      link: '/en/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.2-Understanding-Cassandra-data-modeling',
                    },
                    {
                      text: '4.1.3 Mapping domain types for Cassandra persistence',
                      link: '/en/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.3-Mapping-domain-types-for-Cassandra-persistence',
                    },
                    {
                      text: '4.1.4 Writing Cassandra repositories',
                      link: '/en/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.4-Writing-Cassandra-repositories',
                    },
                  ],
                },
                {
                  text: '4.2 Writing MongoDB repositories',
                  link: '/en/guide/Chapter-04/4.2-Writing-MongoDB-repositories/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '4.2.1 Enabling Spring Data MongonDB',
                      link: '/en/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.1-Enabling-Spring-Data-MongoDB',
                    },
                    {
                      text: '4.2.2 Mapping domain types to documents',
                      link: '/en/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.2-Mapping-domain-types-to-documents',
                    },
                    {
                      text: '4.2.3 Writing MongoDB repository interfaces',
                      link: '/en/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.3-Writing-MongoDB-repository-interfaces',
                    },
                  ],
                },
                { text: '4.3 Summary', link: '/en/guide/Chapter-04/4.3-Summary' },
              ],
            },
            {
              text: 'Chapter 5. Securing Spring',
              link: '/en/guide/Chapter-05/Introduction',
              collapsed: false,
              items: [
                { text: '5.1 Enabling Spring Security', link: '/en/guide/Chapter-05/5.1-Enabling-Spring-Security' },
                {
                  text: '5.2 Configuring authentication',
                  link: '/en/guide/Chapter-05/5.2-Configuring-authentication/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '5.2.1 In-memory user details service',
                      link: '/en/guide/Chapter-05/5.2-Configuring-authentication/5.2.1-In-memory-user-details-service',
                    },
                    {
                      text: '5.2.2 Customizing user authentication',
                      link: '/en/guide/Chapter-05/5.2-Configuring-authentication/5.2.2-Customizing-user-authentication',
                    },
                  ],
                },
                {
                  text: '5.3 Securing web requests',
                  link: '/en/guide/Chapter-05/5.3-Securing-web-requests/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '5.3.1 Securing requests',
                      link: '/en/guide/Chapter-05/5.3-Securing-web-requests/5.3.1-Securing-requests',
                    },
                    {
                      text: '5.3.2 Creating a custom login page',
                      link: '/en/guide/Chapter-05/5.3-Securing-web-requests/5.3.2-Creating-a-custom-login-page',
                    },
                    {
                      text: '5.3.3 Enabling third-party authentication',
                      link: '/en/guide/Chapter-05/5.3-Securing-web-requests/5.3.3-Enabling-third-party-authentication',
                    },
                    {
                      text: '5.3.4 Logging out',
                      link: '/en/guide/Chapter-05/5.3-Securing-web-requests/5.3.4-Logging-out',
                    },
                    {
                      text: '5.3.5 Preventing cross-site request forgery',
                      link: '/en/guide/Chapter-05/5.3-Securing-web-requests/5.3.5-Preventing-cross-site-request-forgery',
                    },
                  ],
                },
                { text: '5.4 Applying method-level security', link: '/en/guide/Chapter-05/5.4-Applying-method-level-security' },
                { text: '5.5 Knowing your user', link: '/en/guide/Chapter-05/5.5-Knowing-your-user' },
                { text: '5.6 Summary', link: '/en/guide/Chapter-05/5.6-Summary' },
              ],
            },
            {
              text: 'Chapter 6. Working with configuration properties',
              link: '/en/guide/Chapter-06/Introduction',
              collapsed: false,
              items: [
                {
                  text: '6.1 Fine-tuning autoconfiguration',
                  link: '/en/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.1.1 Understanding Spring\'s environment abstraction',
                      link: '/en/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.1-Understanding-Spring’s-environment-abstraction',
                    },
                    {
                      text: '6.1.2 Configuring a data source',
                      link: '/en/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.2-Configuring-a-data-source',
                    },
                    {
                      text: '6.1.3 Configuring the embedded server',
                      link: '/en/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.3-Configuring-the-embedded-server',
                    },
                    {
                      text: '6.1.4 Configuring logging',
                      link: '/en/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.4-Configuring-logging',
                    },
                    {
                      text: '6.1.5 Using special property values',
                      link: '/en/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.5-Using-special-property-values',
                    },
                  ],
                },
                {
                  text: '6.2 Creating your own configuration properties',
                  link: '/en/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.2.1 Defining configuration property holders',
                      link: '/en/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/6.2.1-Defining-configuration-propertiesholders',
                    },
                    {
                      text: '6.2.2 Declaring configuration property metadata',
                      link: '/en/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/6.2.2-Declaring-configuration-property-metadata',
                    },
                  ],
                },
                {
                  text: '6.3 Configuring with profiles',
                  link: '/en/guide/Chapter-06/6.3-Configuring-with-profiles/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.3.1 Defining profile-specific properties',
                      link: '/en/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.1-Defining-profile-specific-properties',
                    },
                    {
                      text: '6.3.2 Activating profile',
                      link: '/en/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.2-Activating-profiles',
                    },
                    {
                      text: '6.3.3 Conditionally creating beans with profiles',
                      link: '/en/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.3-Conditionally-creating-beans-with-profiles',
                    },
                  ],
                },
                { text: '6.4 Summary', link: '/en/guide/Chapter-06/6.4-Summary' },
              ],
            },
            {
              text: 'Chapter 7. Creating REST services',
              link: '/en/guide/Chapter-07/Introduction',
              collapsed: false,
              items: [
                {
                  text: '7.1 Writing RESTful controllers',
                  link: '/en/guide/Chapter-07/7.1-Writing-RESTful-controllers/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.1.1 Retrieving data from the server',
                      link: '/en/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.1-Retrieving-data-from-the-server',
                    },
                    {
                      text: '7.1.2 Sending data to the server',
                      link: '/en/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.2-Sending-data-to-the-server',
                    },
                    {
                      text: '7.1.3 Updating data on the server',
                      link: '/en/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.3-Updating-data-on-the-server',
                    },
                    {
                      text: '7.1.4 Deleting data from the server',
                      link: '/en/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.4-Deleting-data-from-the-server',
                    },
                  ],
                },
                {
                  text: '7.2 Enabling data-backed services',
                  link: '/en/guide/Chapter-07/7.2-Enabling-data-backed-services/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.2.1 Adjusting resource paths and relation names',
                      link: '/en/guide/Chapter-07/7.2-Enabling-data-backed-services/7.2.1-Adjusting-resource-paths-and-relation-names',
                    },
                    {
                      text: '7.2.2 Paging and sorting',
                      link: '/en/guide/Chapter-07/7.2-Enabling-data-backed-services/7.2.2-Paging-and-sorting',
                    },
                  ],
                },
                {
                  text: '7.3 Consuming REST services',
                  link: '/en/guide/Chapter-07/7.3-Consuming-REST-services/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.3.1 GETting resources',
                      link: '/en/guide/Chapter-07/7.3-Consuming-REST-services/7.3.1-GETting-resources',
                    },
                    {
                      text: '7.3.2 PUTting resources',
                      link: '/en/guide/Chapter-07/7.3-Consuming-REST-services/7.3.2-PUTting-resources',
                    },
                    {
                      text: '7.3.3 DELETEing resources',
                      link: '/en/guide/Chapter-07/7.3-Consuming-REST-services/7.3.3-DELETEing-resources',
                    },
                    {
                      text: '7.3.4 POSTing resource data',
                      link: '/en/guide/Chapter-07/7.3-Consuming-REST-services/7.3.4-POSTing-resource-data',
                    },
                  ],
                },
                { text: '7.4 Summary', link: '/en/guide/Chapter-07/7.4-Summary' },
              ],
            },
            {
              text: 'Chapter 8. Securing REST',
              link: '/en/guide/Chapter-08/Introduction',
              collapsed: false,
              items: [
                { text: '8.1 Introducing OAuth 2', link: '/en/guide/Chapter-08/8.1-Introducing-OAuth-2' },
                { text: '8.2 Creating an authorization server', link: '/en/guide/Chapter-08/8.2-Creating-an-Authorization-Server' },
                { text: '8.3 Securing an API with a resource server', link: '/en/guide/Chapter-08/8.3-Securing-an-API-with-a-Resource-Server' },
                { text: '8.4 Developing the client', link: '/en/guide/Chapter-08/8.4-Developing-the-client' },
                { text: '8.5 Summary', link: '/en/guide/Chapter-08/8.5-Summary' },
              ],
            },
            {
              text: 'Chapter 9. Sending messages asynchronously',
              link: '/en/guide/Chapter-09/Introduction',
              collapsed: false,
              items: [
                {
                  text: '9.1 Sending messages with JMS',
                  link: '/en/guide/Chapter-09/9.1-Sending-messages-with-JMS/Introduction',
                  collapsed: false,
                  items: [
                    { text: '9.1.1 Setting up JMS', link: '/en/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.1-Setting-up-JMS' },
                    { text: '9.1.2 Sending messages with JmsTemplate', link: '/en/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.2-Sending-messages-with-JmsTemplate' },
                    { text: '9.1.3 Receiving JMS messages', link: '/en/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.3-Receiving-JMS-messages' },
                  ],
                },
                {
                  text: '9.2 Working with RabbitMQ and AMQP',
                  link: '/en/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/Introduction',
                  collapsed: false,
                  items: [
                    { text: '9.2.1 Adding RabbitMQ to Spring', link: '/en/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.1-Adding-RabbitMQ-to-Spring' },
                    { text: '9.2.2 Sending messages with RabbitTemplate', link: '/en/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.2-Sending-messages-with-RabbitTemplate' },
                    { text: '9.2.3 Receiving messages from RabbitMQ', link: '/en/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.3-Receiving-message-from-RabbitMQ' },
                  ],
                },
                {
                  text: '9.3 Messaging with Kafka',
                  link: '/en/guide/Chapter-09/9.3-Messaging-with-Kafka/Introduction',
                  collapsed: false,
                  items: [
                    { text: '9.3.1 Setting up Spring for Kafka messaging', link: '/en/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.1-Setting-up-Spring-for-Kafka-messaging' },
                    { text: '9.3.2 Sending messages with KafkaTemplate', link: '/en/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.2-Sending-messages-with-KafkaTemplate' },
                    { text: '9.3.3 Writing Kafka listeners', link: '/en/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.3-Writing-Kafka-listeners' },
                  ],
                },
                { text: '9.4 Summary', link: '/en/guide/Chapter-09/9.4-Summary' },
              ],
            },
            {
              text: 'Chapter 10. Integrating Spring',
              link: '/en/guide/Chapter-10/Introduction',
              collapsed: false,
              items: [
                {
                  text: '10.1 Declaring a simple intergration flow',
                  link: '/en/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '10.1.1 Defining integration flows with XML',
                      link: '/en/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.1-Defining-integration-flows-with-XML',
                    },
                    {
                      text: '10.1.2 Configuring integration flows in Java',
                      link: '/en/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.2-Configuring-integration-flows-in-Java',
                    },
                    {
                      text: '10.1.3 Using Spring Integration\'s DSL configuration',
                      link: '/en/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.3-Using-Spring-Integration’s-DSL-configuration',
                    },
                  ],
                },
                {
                  text: '10.2 Surveying the Spring Integration landscape',
                  link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '10.2.1 Message channels',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.1-Message-channels',
                    },
                    {
                      text: '10.2.2 Filters',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.2-Filters',
                    },
                    {
                      text: '10.2.3 Transformers',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.3-Transformers',
                    },
                    {
                      text: '10.2.4 Routers',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.4-Routers',
                    },
                    {
                      text: '10.2.5 Splitters',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.5-Splitters',
                    },
                    {
                      text: '10.2.6 Service activators',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.6-Service-activators',
                    },
                    {
                      text: '10.2.7 Gateways',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.7-Gateways',
                    },
                    {
                      text: '10.2.8 Channel adapters',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.8-Channel-adapters',
                    },
                    {
                      text: '10.2.9 Endpoint modules',
                      link: '/en/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.9-Endpoint-modules',
                    },
                  ],
                },
                { text: '10.3 Creating an email integration flow', link: '/en/guide/Chapter-10/10.3-Creating-an-email-integration-flow' },
                { text: '10.4 Summary', link: '/en/guide/Chapter-10/10.4-Summary' },
              ],
            },
            {
              text: 'Chapter 11. Introducing Reactor',
              link: '/en/guide/Chapter-11/Introduction',
              collapsed: false,
              items: [
                {
                  text: '11.1 Understanding reactive programming',
                  link: '/en/guide/Chapter-11/11.1-Understanding-reactive-programming/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.1.1 Defining Reactive Streams',
                      link: '/en/guide/Chapter-11/11.1-Understanding-reactive-programming/11.1.1-Defining-Reactive-Streams',
                    },
                  ],
                },
                {
                  text: '11.2 Getting startedd with Reactor',
                  link: '/en/guide/Chapter-11/11.2-Getting-started-with-Reactor/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.2.1 Diagramming reactive flows',
                      link: '/en/guide/Chapter-11/11.2-Getting-started-with-Reactor/11.2.1-Diagramming-reactive-flows',
                    },
                    {
                      text: '11.2.2 Adding Reactor dependencies',
                      link: '/en/guide/Chapter-11/11.2-Getting-started-with-Reactor/11.2.2-Adding-Reactor-dependencies',
                    },
                  ],
                },
                {
                  text: '11.3 Applying common reactive operations',
                  link: '/en/guide/Chapter-11/11.3-Applying-common-reactive-operations/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.3.1 Creating reactive types',
                      link: '/en/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.1-Creating-reactive-types',
                    },
                    {
                      text: '11.3.2 Combining reactive types',
                      link: '/en/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.2-Combining-reactive-types',
                    },
                    {
                      text: '11.3.3 Transforming and filtering reactive streams',
                      link: '/en/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.3-Transforming-and-filtering-reactive-streams',
                    },
                    {
                      text: '11.3.4 Performing logic operations on reactive types',
                      link: '/en/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.4-Performing-logic-operations-on-reactive-types',
                    },
                  ],
                },
                { text: '11.4 Summary', link: '/en/guide/Chapter-11/11.4-Summary' },
              ],
            },
            {
              text: 'Chapter 12. Developing reactive APIs',
              link: '/en/guide/Chapter-12/Introduction',
              collapsed: false,
              items: [
                {
                  text: '12.1 Wroking with Spring WebFlux',
                  link: '/en/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.1.1 Introducing Spring WebFlux',
                      link: '/en/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/12.1.1-Introducing-Spring-WebFlux',
                    },
                    {
                      text: '12.1.2 Writing reactive controllers',
                      link: '/en/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/12.1.2-Writing-reactive-controllers',
                    },
                  ],
                },
                { text: '12.2 Defining functional request handlers', link: '/en/guide/Chapter-12/12.2-Defining-functional-request-handlers' },
                {
                  text: '12.3 Testing reactive controllers',
                  link: '/en/guide/Chapter-12/12.3-Testing-reactive-controllers/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.3.1 Testing GET requests',
                      link: '/en/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.1-Testing-GET-requests',
                    },
                    {
                      text: '12.3.2 Testing POST requests',
                      link: '/en/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.2-Testing-POST-requests',
                    },
                    {
                      text: '12.3.3 Testing with a live server',
                      link: '/en/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.3-Testing-with-a-live-server',
                    },
                  ],
                },
                {
                  text: '12.4 Consuming REST APIs reactively',
                  link: '/en/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.4.1 GETting resources',
                      link: '/en/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.1-GETting-resources',
                    },
                    {
                      text: '12.4.2 Sending reesources',
                      link: '/en/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.2-Sending-resources',
                    },
                    {
                      text: '12.4.3 Deleting resources',
                      link: '/en/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.3-Deleting-resources',
                    },
                    {
                      text: '12.4.4 Handling errors',
                      link: '/en/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.4-Handling-errors',
                    },
                    {
                      text: '12.4.5 Exchanging requests',
                      link: '/en/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.5-Exchanging-requests',
                    },
                  ],
                },
                {
                  text: '12.5 Securing reactive web APIs',
                  link: '/en/guide/Chapter-12/12.5-Securing-reactive-web-APIs/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.5.1 Configuring reactive web security',
                      link: '/en/guide/Chapter-12/12.5-Securing-reactive-web-APIs/12.5.1-Configuring-reactive-web-security',
                    },
                    {
                      text: '12.5.2 Configuring a reactive user details service',
                      link: '/en/guide/Chapter-12/12.5-Securing-reactive-web-APIs/12.5.2-Configuring-a-reactive-user-details-service',
                    },
                  ],
                },
                { text: '12.6 Summary', link: '/en/guide/Chapter-12/12.6-Summary' },
              ],
            },
            {
              text: 'Chapter 13. Persisting data reactively',
              link: '/en/guide/Chapter-13/Introduction',
              collapsed: false,
              items: [
                {
                  text: '13.1 Working with R2DBC',
                  link: '/en/guide/Chapter-13/13.1-Working-with-R2DBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.1.1 Defining domain entities for R2DBC',
                      link: '/en/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.1-Defining-domain-entities-for-R2DBC',
                    },
                    {
                      text: '13.1.2 Defining reactive repositories',
                      link: '/en/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.2-Defining-reactive-repositories',
                    },
                    {
                      text: '13.1.3 Testing R2DBC repositories',
                      link: '/en/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.3-Testing-R2DBC-repositories',
                    },
                    {
                      text: '13.1.4 Defining an OrderRepository aggregate root service',
                      link: '/en/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.4-Defining-an-OrderRepository-aggregate-root-service',
                    },
                  ],
                },
                {
                  text: '13.2 Persisting document data reactively with MongoDB',
                  link: '/en/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.2.1 Defining domain document types',
                      link: '/en/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.1-Defining-domain-document-types',
                    },
                    {
                      text: '13.2.2 Defining reactive MongoDB repositories',
                      link: '/en/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.2-Defining-reactive-MongoDB-repositories',
                    },
                    {
                      text: '13.2.3 Testing reactive MongoDB repositories',
                      link: '/en/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.3-Testing-reactive-MongoDB-repositories',
                    },
                  ],
                },
                {
                  text: '13.3 Reactively persisting data in Cassandra',
                  link: '/en/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.3.1 Defining domain classes Cassandra persistence',
                      link: '/en/guide/Chapter-13/13.3-Reactively-persisting-data-in-Cassandra/13.3.1-Defining-domain-classes-for-Cassandra-persistence',
                    },
                    {
                      text: '13.3.2 Creating reactive Cassandra repositories',
                      link: '/en/guide/Chapter-13/13.3-Reactively-persisting-data-in-Cassandra/13.3.2-Creating-reactive-Cassandra-repositories',
                    },
                    {
                      text: '13.3.3 Testing reactive Cassandra repositories',
                      link: '/en/guide/Chapter-13/13.3-Reactively-persisting-data-in-Cassandra/13.3.3-Testing-reactive-Cassandra-repositories',
                    },
                  ],
                },
                { text: '13.4 Summary', link: '/en/guide/Chapter-13/13.4-Summary' },
              ],
            },
            {
              text: 'Chapter 14. Working with RSocket',
              link: '/en/guide/Chapter-14/Introduction',
              collapsed: false,
              items: [
                { text: '14.1 Introducing RSocket', link: '/en/guide/Chapter-14/14.1-Introducing-RSocket' },
                {
                  text: '14.2 Creating a simple RSocket server and client',
                  link: '/en/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '14.2.1 Working with request-response',
                      link: '/en/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.1-Working-with-Request-Response',
                    },
                    {
                      text: '14.2.2 Handling request-stream messaging',
                      link: '/en/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.2-Handling-request-stream-messaging',
                    },
                    {
                      text: '14.2.3 Sending fire-and-forget messages',
                      link: '/en/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.3-Sending-Fire-and-Forget-messages',
                    },
                    {
                      text: '14.2.4 Sending messages bidirectionally',
                      link: '/en/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.4-Sending-messages-bidirectionally',
                    },
                  ],
                },
                { text: '14.3 Transporting RSocket over WebSocket', link: '/en/guide/Chapter-14/14.3-Transporting-RSocket-over-WebSocket' },
                { text: '14.4 Summary', link: '/en/guide/Chapter-14/14.4-Summary' },
              ],
            },
            {
              text: 'Chapter 15. Working with Spring Boot Actuator',
              link: '/en/guide/Chapter-15/Introduction',
              collapsed: false,
              items: [
                {
                  text: '15.1 Introducing Actuator',
                  link: '/en/guide/Chapter-15/15.1-Introducing-Actuator/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.1.1 Configuring Actuator\'s base path',
                      link: '/en/guide/Chapter-15/15.1-Introducing-Actuator/15.1.1-Configuring-Actuator%27s-base-path',
                    },
                    {
                      text: '15.1.2 Enabling and disabling Actuator endpoints',
                      link: '/en/guide/Chapter-15/15.1-Introducing-Actuator/15.1.2-Enabling-and-disabling-Actuator-endpoints',
                    },
                  ],
                },
                {
                  text: '15.2 Consuming Actuator endpoints',
                  link: '/en/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.2.1 Fetching essential application information',
                      link: '/en/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.1-Fetching-essential-application-information',
                    },
                    {
                      text: '15.2.2 Viewing configuration details',
                      link: '/en/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.2-Viewing-configuration-details',
                    },
                    {
                      text: '15.2.3 Viewing application activity',
                      link: '/en/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.3-Viewing-application-activity',
                    },
                    {
                      text: '15.2.4 Tapping runtime metrics',
                      link: '/en/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.4-Tapping-runtime-metrics',
                    },
                  ],
                },
                {
                  text: '15.3 Customizing Actuator',
                  link: '/en/guide/Chapter-15/15.3-Customizing-Actuator/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.3.1 Contributing information to the /info endpoint',
                      link: '/en/guide/Chapter-15/15.3-Customizing-Actuator/15.3.1-Contributing-information-to-the-info-endpoint',
                    },
                    {
                      text: '15.3.2 Defining custom metrics',
                      link: '/en/guide/Chapter-15/15.3-Customizing-Actuator/15.3.2-Defining-custom-health-indicators',
                    },
                    {
                      text: '15.3.3 Registering custom metrics',
                      link: '/en/guide/Chapter-15/15.3-Customizing-Actuator/15.3.3-Registering-custom-metrics',
                    },
                    {
                      text: '15.3.4 Creating custom endpoints',
                      link: '/en/guide/Chapter-15/15.3-Customizing-Actuator/15.3.4-Creating-custom-endpoints',
                    },
                  ],
                },
                { text: '15.4 Securing Actuator', link: '/en/guide/Chapter-15/15.4-Securing-Actuator' },
                { text: '15.5 Summary', link: '/en/guide/Chapter-15/15.5-Summary' },
              ],
            },
            {
              text: 'Chapter 16. Administering Spring',
              link: '/en/guide/Chapter-16/Introduction',
              collapsed: false,
              items: [
                {
                  text: '16.1 Using Spring Boot Admin',
                  link: '/en/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.1.1 Creating an Admin server',
                      link: '/en/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/16.1.1-Creating-an-Admin-server',
                    },
                    {
                      text: '16.1.2 Registering Admin clients',
                      link: '/en/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/16.1.2-Registering-Admin-clients',
                    },
                  ],
                },
                {
                  text: '16.2 Exploring the Admin server',
                  link: '/en/guide/Chapter-16/16.2-Exploring-the-Admin-server/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.2.1 Viewing general application heatlh and information',
                      link: '/en/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.1-Viewing-general-application-health-and-information',
                    },
                    {
                      text: '16.2.2 Watching key metrics',
                      link: '/en/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.2-Watching-key-metrics',
                    },
                    {
                      text: '16.2.3 Examining environment properties',
                      link: '/en/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.3-Examining-environment-properties',
                    },
                    {
                      text: '16.2.4 Viewing and setting logging levels',
                      link: '/en/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.4-Viewing-and-setting-logging-levels',
                    },
                  ],
                },
                {
                  text: '16.3 Securing the Admin server',
                  link: '/en/guide/Chapter-16/16.3-Securing-the-Admin-server/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.3.1 Enabling login in the Admin server',
                      link: '/en/guide/Chapter-16/16.3-Securing-the-Admin-server/16.3.1-Enabling-login-in-the-Admin-server',
                    },
                    {
                      text: '16.3.2 Authenticating with the Actuator',
                      link: '/en/guide/Chapter-16/16.3-Securing-the-Admin-server/16.3.2-Authenticating-with-the-Actuator',
                    },
                  ],
                },
                { text: '16.4 Summary', link: '/en/guide/Chapter-16/16.4-Summary' },
              ],
            },
            {
              text: 'Chapter 17. Monitoring Spring with JMX',
              link: '/en/guide/Chapter-17/Introduction',
              collapsed: false,
              items: [
                { text: '17.1 Working with Actuator MBeans', link: '/en/guide/Chapter-17/17.1-Working-with-Actuator-MBeans' },
                { text: '17.2 Creating your own MBeans', link: '/en/guide/Chapter-17/17.2-Creating-your-own-MBeans' },
                { text: '17.3 Sending notifications', link: '/en/guide/Chapter-17/17.3-Sending-notifications' },
                { text: '17.4 Summary', link: '/en/guide/Chapter-17/17.4-Summary' },
              ],
            },
            {
              text: 'Chapter 18. Deploying Spring',
              link: '/en/guide/Chapter-18/Introduction',
              collapsed: false,
              items: [
                { text: '18.1 Weighing deployment options', link: '/en/guide/Chapter-18/18.1-Weighing-deployment-options' },
                { text: '18.2 Building executable JAR files', link: '/en/guide/Chapter-18/18.2-Building-executable-JAR-files' },
                {
                  text: '18.3 Building container images',
                  link: '/en/guide/Chapter-18/18.3-Building-container-images/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '18.3.1 Deploying to Kubernetes',
                      link: '/en/guide/Chapter-18/18.3-Building-container-images/18.3.1-Deploying-to-Kubernetes',
                    },
                    {
                      text: '18.3.2 Enabling graceful shutdown',
                      link: '/en/guide/Chapter-18/18.3-Building-container-images/18.3.2-Enabling-graceful-shutdown',
                    },
                    {
                      text: '18.3.3 Working with application liveness and readiness',
                      link: '/en/guide/Chapter-18/18.3-Building-container-images/18.3.3-Working-with-application-liveness-and-readiness',
                    },
                  ],
                },
                { text: '18.4 Building and deploying WAR files', link: '/en/guide/Chapter-18/18.4-Building-and-deploying-WAR-files' },
                { text: '18.5 The end is where we begin', link: '/en/guide/Chapter-18/18.5-The-end-is-where-we-begin' },
                { text: '18.6 Summary', link: '/en/guide/Chapter-18/18.6-Summary' },
              ],
            },
          ],
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Senorita2303/springinaction' },
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2025-present Senorita2303',
        },
        search: {
          provider: 'local',
        },
        outline: {
          level: [2, 3],
          label: 'On this page',
        },
      },
    },
  },

  themeConfig: {
    langMenuLabel: 'Chuyển đổi ngôn ngữ',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Senorita2303/springinaction' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Senorita2303',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm tài liệu',
                buttonAriaLabel: 'Tìm kiếm tài liệu',
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả liên quan',
                resetButtonTitle: 'Xóa điều kiện tìm kiếm',
                footer: {
                  selectText: 'Chọn',
                  navigateText: 'Chuyển đổi',
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search docs',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                },
              },
            },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },
  },
})
