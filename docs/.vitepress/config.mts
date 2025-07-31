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
  description: '简单高效的文件分享工具',
  lang: 'zh-CN',
  lastUpdated: true,
  ignoreDeadLinks: true,
  base: '/springinaction/',
  head: [['link', { rel: 'icon', href: '/springinaction/logo_small.png' }]],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'FileCodeBox',
      description: '匿名口令分享文本，文件',
      themeConfig: {
        logo: '/springinaction/logo_small.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/readme' },
          // { text: 'API', link: '/api/' },
          // { text: 'Demo', link: 'https://share.lanol.cn' },
          // {
          //   text: '了解更多',
          //   items: [
          //     { text: '更新日志', link: '/changelog' },
          //     { text: '贡献指南', link: '/contributing' },
          //   ],
          // },
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Spring 实战 (第 6 版) MEAP',
              link: '/guide/README'
            },
            {
              text: '欢迎',
              link: '/guide/Welcome'
            },
            {
              text: '第 1 章 Spring 入门',
              link: '/guide/Chapter-01/Introduction',
              collapsed: false,
              items: [
                { text: '1.1 什么是 Spring？', link: '/guide/Chapter-01/1.1-What-is-Spring' },
                {
                  text: '1.2 初始化 Spring 应用程序',
                  link: '/guide/Chapter-01/1.2-Initializing-a-Spring-application/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.2.1 使用 Spring Tool Suite 初始化 Spring 项目',
                      link: '/guide/Chapter-01/1.2-Initializing-a-Spring-application/1.2.1-Initializing-a-Spring-project-with-Spring-Tool-Suite',
                    },
                    {
                      text: '1.2.2 检查 Spring 项目结构',
                      link: '/guide/Chapter-01/1.2-Initializing-a-Spring-application/1.2.2-Examining-the-Spring-project-structure',
                    },
                  ],
                },
                {
                  text: '1.3 编写 Spring 应用程序',
                  link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.3.1 处理 web 请求',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.1-Handling-web-requests',
                    },
                    {
                      text: '1.3.2 定义视图',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.2-Defining-the-view',
                    },
                    {
                      text: '1.3.3 测试控制器',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.3-Testing-the-controller',
                    },
                    {
                      text: '1.3.4 构建并运行应用程序',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.4-Building-and-running-the-application',
                    },
                    {
                      text: '1.3.5 了解 Spring Boot DevTools',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.5-Getting-to-know-Spring-Boot-DevTools',
                    },
                    {
                      text: '1.3.6 回顾',
                      link: '/guide/Chapter-01/1.3-Writing-a-Spring-application/1.3.6-Let%27s-review',
                    },
                  ],
                },
                {
                  text: '1.4 俯瞰 Spring 风景线',
                  link: '/guide/Chapter-01/1.4-Surveying-the-Spring-landscape/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '1.4.1 Spring 核心框架',
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
                      text: '1.4.5 Spring Integration 和 Spring Batch',
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
                { text: '1.5 小结', link: '/guide/Chapter-01/1.5-Summary' },
              ],
            },
            {
              text: '第 2 章 开发 Web 应用程序',
              link: '/guide/Chapter-02/Introduction',
              collapsed: false,
              items: [
                {
                  text: '2.1 展示信息',
                  link: '/guide/Chapter-02/2.1-Displaying-information/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.1.1 建立领域实体',
                      link: '/guide/Chapter-02/2.1-Displaying-information/2.1.1-Establishing-the-domain',
                    },
                    {
                      text: '2.1.2 创建控制器类',
                      link: '/guide/Chapter-02/2.1-Displaying-information/2.1.2-Creating-a-controller-class',
                    },
                    {
                      text: '2.1.3 设计视图',
                      link: '/guide/Chapter-02/2.1-Displaying-information/2.1.3-Designing-the-view',
                    },
                  ],
                },
                { text: '2.2 处理表单提交', link: '/guide/Chapter-02/2.2-Processing-form-submission' },
                {
                  text: '2.3 验证表单输入',
                  link: '/guide/Chapter-02/2.3-Validating-form-input/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.3.1 声明验证规则',
                      link: '/guide/Chapter-02/2.3-Validating-form-input/2.3.1-Declaring-validation-rules',
                    },
                    {
                      text: '2.3.2 在表单绑定时执行验证',
                      link: '/guide/Chapter-02/2.3-Validating-form-input/2.3.2-Performing-validation-at-form-binding',
                    },
                    {
                      text: '2.3.3 显示验证错误',
                      link: '/guide/Chapter-02/2.3-Validating-form-input/2.3.3-Displaying-validation-errors',
                    },
                  ],
                },
                { text: '2.4 使用视图控制器', link: '/guide/Chapter-02/2.4-Working-with-view-controllers' },
                {
                  text: '2.5 选择视图模板库',
                  link: '/guide/Chapter-02/2.5-Choosing-a-view-template-library/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '2.5.1 缓存模板',
                      link: '/guide/Chapter-02/2.5-Choosing-a-view-template-library/2.5.1-Caching-templates',
                    }
                  ],
                },
                { text: '2.6 总结', link: '/guide/Chapter-02/2.6-Summary' },
              ],
            },
            {
              text: '第 3 章 处理数据',
              link: '/guide/Chapter-03/Introduction',
              collapsed: false,
              items: [
                {
                  text: '3.1 使用 JDBC 读写数据',
                  link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.1.1 为持久化改造领域实体',
                      link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.1-Adapting-the-domain-for-persistence',
                    },
                    {
                      text: '3.1.2 使用 JdbcTemplate',
                      link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.2-Working-with-JdbcTemplate',
                    },
                    {
                      text: '3.1.3 定义 schema 并预加载数据',
                      link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.3-Defining-a-schema-and-preloading-data',
                    },
                    {
                      text: '3.1.4 插入数据',
                      link: '/guide/Chapter-03/3.1-Reading-and-writing-data-with-JDBC/3.1.4-Inserting-data',
                    },
                  ],
                },
                {
                  text: '3.2 使用 Spring Data JDBC',
                  link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.2.1 添加 Spring Data JDBC 到项目构建中',
                      link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.1-Adding-Spring-Data-JDBC-to-the-build',
                    },
                    {
                      text: '3.2.2 定义 Repository 接口',
                      link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.2-Defining-repository-interfaces',
                    },
                    {
                      text: '3.2.3 为持久化注解领域实体',
                      link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.3-Annotating-the-domain-for-persistence',
                    },
                    {
                      text: '3.2.4 使用 CommandLineRunner 预加载数据',
                      link: '/guide/Chapter-03/3.2-Working-with-Spring-Data-JDBC/3.2.4-Preloading-data-with-CommandLineRunner',
                    },
                  ],
                },
                {
                  text: '3.3 使用 Spring Data JPA 持久化数据',
                  link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '3.3.1 添加 Spring Data JPA 到工程中',
                      link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.1-Adding-Spring-Data-JPA-to-the-project',
                    },
                    {
                      text: '3.3.2 注解领域实体',
                      link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.2-Annotating-the-domain-as-entities',
                    },
                    {
                      text: '3.3.3 声明 JPA Repository',
                      link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.3-Declaring-JPA-repositories',
                    },
                    {
                      text: '3.3.4 自定义 Repository',
                      link: '/guide/Chapter-03/3.3-Persisting-data-with-Spring-Data-JPA/3.3.4-Customizing-repositories',
                    },
                  ],
                },
                { text: '3.4 总结', link: '/guide/Chapter-03/3.4-Summary' },
              ],
            },
            {
              text: '第 4 章 处理非关系型数据',
              link: '/guide/Chapter-04/Introduction',
              collapsed: false,
              items: [
                {
                  text: '4.1 使用 Cassandra Repository',
                  link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '4.1.1 启用 Spring Data Cassandra',
                      link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.1-Enabling-Spring-Data-Cassandra',
                    },
                    {
                      text: '4.1.2 理解 Cassandra 数据模型',
                      link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.2-Understanding-Cassandra-data-modeling',
                    },
                    {
                      text: '4.1.3 Cassandra 持久化实体映射',
                      link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.3-Mapping-domain-types-for-Cassandra-persistence',
                    },
                    {
                      text: '4.1.4 编写 Cassandra Repository',
                      link: '/guide/Chapter-04/4.1-Working-with-Cassandra-repositories/4.1.4-Writing-Cassandra-repositories',
                    },
                  ],
                },
                {
                  text: '4.2 编写 MongoDB Repository',
                  link: '/guide/Chapter-04/4.2-Writing-MongoDB-repositories/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '4.2.1 启用 Spring Data MongonDB',
                      link: '/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.1-Enabling-Spring-Data-MongoDB',
                    },
                    {
                      text: '4.2.2 MongoDB 持久化实体映射',
                      link: '/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.2-Mapping-domain-types-to-documents',
                    },
                    {
                      text: '4.2.3 编写 MongoDB Repository 接口',
                      link: '/guide/Chapter-04/4.2-Writing-MongoDB-repositories/4.2.3-Writing-MongoDB-repository-interfaces',
                    },
                  ],
                },
                { text: '4.3 总结', link: '/guide/Chapter-04/4.3-Summary' },
              ],
            },
            {
              text: '第 5 章 Spring 安全',
              link: '/guide/Chapter-05/Introduction',
              collapsed: false,
              items: [
                { text: '5.1 启用 Spring Security', link: '/guide/Chapter-05/5.1-Enabling-Spring-Security' },
                {
                  text: '5.2 配置身份验证',
                  link: '/guide/Chapter-05/5.2-Configuring-authentication/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '5.2.1 内存用户详情服务',
                      link: '/guide/Chapter-05/5.2-Configuring-authentication/5.2.1-In-memory-user-details-service',
                    },
                    {
                      text: '5.2.2 自定义用户身份验证',
                      link: '/guide/Chapter-05/5.2-Configuring-authentication/5.2.2-Customizing-user-authentication',
                    },
                  ],
                },
                {
                  text: '5.3 保护 web 请求',
                  link: '/guide/Chapter-05/5.3-Securing-web-requests/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '5.3.1 保护请求',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.1-Securing-requests',
                    },
                    {
                      text: '5.3.2 创建自定义登录页面',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.2-Creating-a-custom-login-page',
                    },
                    {
                      text: '5.3.3 启用第三方验证',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.3-Enabling-third-party-authentication',
                    },
                    {
                      text: '5.3.4 登出',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.4-Logging-out',
                    },
                    {
                      text: '5.3.5 阻止跨站请求伪造攻击',
                      link: '/guide/Chapter-05/5.3-Securing-web-requests/5.3.5-Preventing-cross-site-request-forgery',
                    },
                  ],
                },
                { text: '5.4 启用方法级别保护', link: '/guide/Chapter-05/5.4-Applying-method-level-security' },
                { text: '5.5 了解您的用户', link: '/guide/Chapter-05/5.5-Knowing-your-user' },
                { text: '5.6 小结', link: '/guide/Chapter-05/5.6-Summary' },
              ],
            },
            {
              text: '第 6 章 使用配置属性',
              link: '/guide/Chapter-06/Introduction',
              collapsed: false,
              items: [
                {
                  text: '6.1 微调自动配置',
                  link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.1.1 理解 Spring 环境抽象',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.1-Understanding-Spring’s-environment-abstraction',
                    },
                    {
                      text: '6.1.2 配置数据源',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.2-Configuring-a-data-source',
                    },
                    {
                      text: '6.1.3 配置嵌入式服务器',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.3-Configuring-the-embedded-server',
                    },
                    {
                      text: '6.1.4 配置日志',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.4-Configuring-logging',
                    },
                    {
                      text: '6.1.5 使用特殊的属性值',
                      link: '/guide/Chapter-06/6.1-Fine-tuning-autoconfiguration/6.1.5-Using-special-property-values',
                    },
                  ],
                },
                {
                  text: '6.2 创建自己的配置属性',
                  link: '/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.2.1 定义配置属性持有者',
                      link: '/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/6.2.1-Defining-configuration-propertiesholders',
                    },
                    {
                      text: '6.2.2 声明配置属性元数据',
                      link: '/guide/Chapter-06/6.2-Creating-your-own-configuration-properties/6.2.2-Declaring-configuration-property-metadata',
                    },
                  ],
                },
                {
                  text: '6.3 使用 profile 进行配置',
                  link: '/guide/Chapter-06/6.3-Configuring-with-profiles/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '6.3.1 定义特定 profile 的属性',
                      link: '/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.1-Defining-profile-specific-properties',
                    },
                    {
                      text: '6.3.2 激活 profile',
                      link: '/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.2-Activating-profiles',
                    },
                    {
                      text: '6.3.3 有条件地使用 profile 创建 bean',
                      link: '/guide/Chapter-06/6.3-Configuring-with-profiles/6.3.3-Conditionally-creating-beans-with-profiles',
                    },
                  ],
                },
                { text: '6.4 小结', link: '/guide/Chapter-06/6.4-Summary' },
              ],
            },
            {
              text: '第 7 章 创建 REST 服务',
              link: '/guide/Chapter-07/Introduction',
              collapsed: false,
              items: [
                {
                  text: '7.1 编写 RESTful 控制器',
                  link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.1.1 从服务器获取数据',
                      link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.1-Retrieving-data-from-the-server',
                    },
                    {
                      text: '7.1.2 向服务器发送数据',
                      link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.2-Sending-data-to-the-server',
                    },
                    {
                      text: '7.1.3 更新服务器上的数据',
                      link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.3-Updating-data-on-the-server',
                    },
                    {
                      text: '7.1.4 删除服务器上的数据',
                      link: '/guide/Chapter-07/7.1-Writing-RESTful-controllers/7.1.4-Deleting-data-from-the-server',
                    },
                  ],
                },
                {
                  text: '7.2 启用后端数据服务',
                  link: '/guide/Chapter-07/7.2-Enabling-data-backed-services/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.2.1 调整资源路径和关系名称',
                      link: '/guide/Chapter-07/7.2-Enabling-data-backed-services/7.2.1-Adjusting-resource-paths-and-relation-names',
                    },
                    {
                      text: '7.2.2 分页和排序',
                      link: '/guide/Chapter-07/7.2-Enabling-data-backed-services/7.2.2-Paging-and-sorting',
                    },
                  ],
                },
                {
                  text: '7.3 使用 REST 服务',
                  link: '/guide/Chapter-07/7.3-Consuming-REST-services/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '7.3.1 GET 资源',
                      link: '/guide/Chapter-07/7.3-Consuming-REST-services/7.3.1-GETting-resources',
                    },
                    {
                      text: '7.3.2 PUT 资源',
                      link: '/guide/Chapter-07/7.3-Consuming-REST-services/7.3.2-PUTting-resources',
                    },
                    {
                      text: '7.3.3 DELETE 资源',
                      link: '/guide/Chapter-07/7.3-Consuming-REST-services/7.3.3-DELETEing-resources',
                    },
                    {
                      text: '7.3.4 POST 资源数据',
                      link: '/guide/Chapter-07/7.3-Consuming-REST-services/7.3.4-POSTing-resource-data',
                    },
                  ],
                },
                { text: '7.4 小结', link: '/guide/Chapter-07/7.4-Summary' },
              ],
            },
            {
              text: '第 8 章 保护 REST 服务',
              link: '/guide/Chapter-08/Introduction',
              collapsed: false,
              items: [
                { text: '8.1 OAuth 2 介绍', link: '/guide/Chapter-08/8.1-Introducing-OAuth-2' },
                { text: '8.2 创建验证服务器', link: '/guide/Chapter-08/8.2-Creating-an-Authorization-Server' },
                { text: '8.3 利用资源服务器保护 API', link: '/guide/Chapter-08/8.3-Securing-an-API-with-a-Resource-Server' },
                { text: '8.4 开发客户端', link: '/guide/Chapter-08/8.4-Developing-the-client' },
                { text: '8.5 小结', link: '/guide/Chapter-08/8.5-Summary' },
              ],
            },
            {
              text: '第 9 章 发送异步消息',
              link: '/guide/Chapter-09/Introduction',
              collapsed: false,
              items: [
                {
                  text: '9.1 使用 JMS 发送消息',
                  link: '/guide/Chapter-09/9.1-Sending-messages-with-JMS/Introduction',
                  collapsed: false,
                  items: [
                    { text: '9.1.1 设置 JMS', link: '/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.1-Setting-up-JMS' },
                    { text: '9.1.2 使用 JmsTemplate 发送消息', link: '/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.2-Sending-messages-with-JmsTemplate' },
                    { text: '9.1.3 接收 JMS 消息', link: '/guide/Chapter-09/9.1-Sending-messages-with-JMS/9.1.3-Receiving-JMS-messages' },
                  ],
                },
                {
                  text: '9.2 使用 RabbitMQ 和 AMQP',
                  link: '/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/Introduction',
                  collapsed: false,
                  items: [
                    { text: '9.2.1 添加 RabbitMQ 到 Spring 中', link: '/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.1-Adding-RabbitMQ-to-Spring' },
                    { text: '9.2.2 使用 RabbitTemplate 发送消息', link: '/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.2-Sending-messages-with-RabbitTemplate' },
                    { text: '9.2.3 从 RabbitMQ 接收消息', link: '/guide/Chapter-09/9.2-Working-with-RabbitMQ-and-AMQP/9.2.3-Receiving-message-from-RabbitMQ' },
                  ],
                },
                {
                  text: '9.3 使用 Kafka 发送消息',
                  link: '/guide/configuration',
                  collapsed: false,
                  items: [
                    { text: '9.3.1 在 Spring 中设置 Kafka', link: '/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.1-Setting-up-Spring-for-Kafka-messaging' },
                    { text: '9.3.2 使用 KafkaTemplate 发送消息', link: '/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.2-Sending-messages-with-KafkaTemplate' },
                    { text: '9.3.3 编写 Kafka 监听器', link: '/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.3-Writing-Kafka-listeners' },
                  ],
                },
                { text: '9.4 总结', link: '/guide/configuration' },
              ],
            },
            {
              text: '第 10 章 集成 Spring',
              link: '/guide/Chapter-10/Introduction',
              collapsed: false,
              items: [
                {
                  text: '10.1 声明简单的集成流',
                  link: '/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '10.1.1 使用 XML 定义集成流',
                      link: '/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.1-Defining-integration-flows-with-XML',
                    },
                    {
                      text: '10.1.2 在 Java 中配置集成流',
                      link: '/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.2-Configuring-integration-flows-in-Java',
                    },
                    {
                      text: '10.1.3 使用 Spring Integration 的 DSL 配置',
                      link: '/guide/Chapter-10/10.1-Declaring-a-simple-integration-flow/10.1.3-Using-Spring-Integration’s-DSL-configuration',
                    },
                  ],
                },
                {
                  text: '10.2 探索 Spring Integration',
                  link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '10.2.1 消息通道',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.1-Message-channels',
                    },
                    {
                      text: '10.2.2 过滤器',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.2-Filters',
                    },
                    {
                      text: '10.2.3 转换器',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.3-Transformers',
                    },
                    {
                      text: '10.2.4 路由',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.4-Routers',
                    },
                    {
                      text: '10.2.5 拆分器',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.5-Splitters',
                    },
                    {
                      text: '10.2.6 服务激活器',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.6-Service-activators',
                    },
                    {
                      text: '10.2.7 网关',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.7-Gateways',
                    },
                    {
                      text: '10.2.8 通道适配器',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.8-Channel-adapters',
                    },
                    {
                      text: '10.2.9 端点模块',
                      link: '/guide/Chapter-10/10.2-Surveying-the-Spring-Integration-landscape/10.2.9-Endpoint-modules',
                    },
                  ],
                },
                { text: '10.3 创建 Email 集成流', link: '/guide/Chapter-10/10.3-Creating-an-email-integration-flow' },
                { text: '10.4 总结', link: '/guide/Chapter-10/10.4-Summary' },
              ],
            },
            {
              text: '第 11 章 Reactor 介绍',
              link: '/guide/Chapter-11/Introduction',
              collapsed: false,
              items: [
                {
                  text: '11.1 理解响应式编程',
                  link: '/guide/Chapter-11/11.1-Understanding-reactive-programming/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.1.1 定义响应式流',
                      link: '/guide/Chapter-11/11.1-Understanding-reactive-programming/11.1.1-Defining-Reactive-Streams',
                    },
                  ],
                },
                {
                  text: '11.2 使用 Reactor',
                  link: '/guide/Chapter-11/11.2-Getting-started-with-Reactor/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.2.1 图解响应式流',
                      link: '/guide/Chapter-11/11.2-Getting-started-with-Reactor/11.2.1-Diagramming-reactive-flows',
                    },
                    {
                      text: '11.2.2 添加 Reactor 依赖',
                      link: '/guide/Chapter-11/11.2-Getting-started-with-Reactor/11.2.2-Adding-Reactor-dependencies',
                    },
                  ],
                },
                {
                  text: '11.3 通用响应式操作实战',
                  link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '11.3.1 创建响应式类型',
                      link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.1-Creating-reactive-types',
                    },
                    {
                      text: '11.3.2 响应式类型结合',
                      link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.2-Combining-reactive-types',
                    },
                    {
                      text: '11.3.3 转换和过滤响应式流',
                      link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.3-Transforming-and-filtering-reactive-streams',
                    },
                    {
                      text: '11.3.4 对响应类型执行逻辑操作',
                      link: '/guide/Chapter-11/11.3-Applying-common-reactive-operations/11.3.4-Performing-logic-operations-on-reactive-types',
                    },
                  ],
                },
                { text: '11.4 总结', link: '/guide/Chapter-11/11.4-Summary' },
              ],
            },
            {
              text: '第 12 章 开发响应式 API',
              link: '/guide/Chapter-12/Introduction',
              collapsed: false,
              items: [
                {
                  text: '12.1 使用 Spring WebFlux',
                  link: '/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.1.1 Spring WebFlux 介绍',
                      link: '/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/12.1.1-Introducing-Spring-WebFlux',
                    },
                    {
                      text: '12.1.2 编写响应式 Controller',
                      link: '/guide/Chapter-12/12.1-Working-with-Spring-WebFlux/12.1.2-Writing-reactive-controllers',
                    },
                  ],
                },
                { text: '12.2 定义函数式请求处理程序', link: '/guide/Chapter-12/12.2-Defining-functional-request-handlers' },
                {
                  text: '12.3 测试响应式 Controller',
                  link: '/guide/Chapter-12/12.3-Testing-reactive-controllers/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.3.1 测试 GET 请求',
                      link: '/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.1-Testing-GET-requests',
                    },
                    {
                      text: '12.3.2 测试 POST 请求',
                      link: '/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.2-Testing-POST-requests',
                    },
                    {
                      text: '12.3.3 使用线上服务器进行测试',
                      link: '/guide/Chapter-12/12.3-Testing-reactive-controllers/12.3.3-Testing-with-a-live-server',
                    },
                  ],
                },
                {
                  text: '12.4 响应式消费 REST API',
                  link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.4.1 获取资源',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.1-GETting-resources',
                    },
                    {
                      text: '12.4.2 发送资源',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.2-Sending-resources',
                    },
                    {
                      text: '12.4.3 删除资源',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.3-Deleting-resources',
                    },
                    {
                      text: '12.4.4 处理错误',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.4-Handling-errors',
                    },
                    {
                      text: '12.4.5 请求转换',
                      link: '/guide/Chapter-12/12.4-Consuming-REST-APIs-reactively/12.4.5-Exchanging-requests',
                    },
                  ],
                },
                {
                  text: '12.5 保护响应式 web API',
                  link: '/guide/Chapter-12/12.5-Securing-reactive-web-APIs/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '12.5.1 配置响应式 Web 安全',
                      link: '/guide/Chapter-12/12.5-Securing-reactive-web-APIs/12.5.1-Configuring-reactive-web-security',
                    },
                    {
                      text: '12.5.2 配置响应式用户信息服务',
                      link: '/guide/Chapter-12/12.5-Securing-reactive-web-APIs/12.5.2-Configuring-a-reactive-user-details-service',
                    },
                  ],
                },
                { text: '12.6 总结', link: '/guide/Chapter-12/12.6-Summary' },
              ],
            },
            {
              text: '第 13 章 响应式持久化数据',
              link: '/guide/Chapter-13/Introduction',
              collapsed: false,
              items: [
                {
                  text: '13.1 使用 R2DBC',
                  link: '/guide/Chapter-13/13.1-Working-with-R2DBC/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.1.1 为 R2DBC 定义实体',
                      link: '/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.1-Defining-domain-entities-for-R2DBC',
                    },
                    {
                      text: '13.1.2 定义响应式 Repository',
                      link: '/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.2-Defining-reactive-repositories',
                    },
                    {
                      text: '13.1.3 测试 R2DBC Repository',
                      link: '/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.3-Testing-R2DBC-repositories',
                    },
                    {
                      text: '13.1.4 定义 OrderRepository 聚合根服务',
                      link: '/guide/Chapter-13/13.1-Working-with-R2DBC/13.1.4-Defining-an-OrderRepository-aggregate-root-service',
                    },
                  ],
                },
                {
                  text: '13.2 使用 MongoDB 响应式保存文档',
                  link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.2.1 定义文档类型',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.1-Defining-domain-document-types',
                    },
                    {
                      text: '13.2.2 定义响应式 MongoDB Repository',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.2-Defining-reactive-MongoDB-repositories',
                    },
                    {
                      text: '13.2.3 测试响应式 MongoDB Repository',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.3-Testing-reactive-MongoDB-repositories',
                    },
                  ],
                },
                {
                  text: '13.3 使用 Cassandra 响应式保存数据',
                  link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '13.2.1 为 Cassandra 定义实体类',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.1-Defining-domain-document-types',
                    },
                    {
                      text: '13.2.2 创建响应式 Cassandra Repository',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.2-Defining-reactive-MongoDB-repositories',
                    },
                    {
                      text: '13.2.3 测试响应式 Cassandra Repository',
                      link: '/guide/Chapter-13/13.2-Persisting-document-data-reactively-with-MongoDB/13.2.3-Testing-reactive-MongoDB-repositories',
                    },
                  ],
                },
                { text: '13.4 总结', link: '/guide/Chapter-13/13.4-Summary' },
              ],
            },
            {
              text: '第 14 章 使用 RSocket',
              link: '/guide/Chapter-14/Introduction',
              collapsed: false,
              items: [
                { text: '14.1 介绍 RSocket', link: '/guide/Chapter-14/14.1-Introducing-RSocket' },
                {
                  text: '14.2 创建一个简单的 RSocket 服务端和客户端',
                  link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '14.2.1 使用 请求/响应 模型',
                      link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.1-Working-with-Request-Response',
                    },
                    {
                      text: '14.2.2 处理 请求/流 消息',
                      link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.2-Handling-request-stream-messaging',
                    },
                    {
                      text: '14.2.3 发送 即发即忘 消息',
                      link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.3-Sending-Fire-and-Forget-messages',
                    },
                    {
                      text: '14.2.4 双向发送消息',
                      link: '/guide/Chapter-14/14.2-Creating-a-simple-RSocket-server-and-client/14.2.4-Sending-messages-bidirectionally',
                    },
                  ],
                },
                { text: '14.3 在 WebSocket 上传输 RSocket', link: '/guide/Chapter-14/14.3-Transporting-RSocket-over-WebSocket' },
                { text: '14.4 总结', link: '/guide/Chapter-14/14.4-Summary' },
              ],
            },
            {
              text: '第 15 章 使用 Spring Boot Actuator',
              link: '/guide/Chapter-15/Introduction',
              collapsed: false,
              items: [
                {
                  text: '15.1 介绍 Actuator',
                  link: '/guide/Chapter-15/15.1-Introducing-Actuator/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.1.1 配置 Actuator 基本路径',
                      link: '/guide/Chapter-15/15.1-Introducing-Actuator/15.1.1-Configuring-Actuator%27s-base-path',
                    },
                    {
                      text: '15.1.2 启用和禁用 Actuator 端点',
                      link: '/guide/Chapter-15/15.1-Introducing-Actuator/15.1.2-Enabling-and-disabling-Actuator-endpoints',
                    },
                  ],
                },
                {
                  text: '15.2 使用 Actuator 端点',
                  link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.2.1 获取重要的应用程序信息',
                      link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.1-Fetching-essential-application-information',
                    },
                    {
                      text: '15.2.2 查看配置详细信息',
                      link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.2-Viewing-configuration-details',
                    },
                    {
                      text: '15.2.3 查看应用程序活动',
                      link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.3-Viewing-application-activity',
                    },
                    {
                      text: '15.2.4 利用运行时指标',
                      link: '/guide/Chapter-15/15.2-Consuming-Actuator-endpoints/15.2.4-Tapping-runtime-metrics',
                    },
                  ],
                },
                {
                  text: '15.3 自定义 Actuator',
                  link: '/guide/Chapter-15/15.3-Customizing-Actuator/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '15.3.1 向 /info 端点提供信息',
                      link: '/guide/Chapter-15/15.3-Customizing-Actuator/15.3.1-Contributing-information-to-the-info-endpoint',
                    },
                    {
                      text: '15.3.2 自定义健康指标',
                      link: '/guide/Chapter-15/15.3-Customizing-Actuator/15.3.2-Defining-custom-health-indicators',
                    },
                    {
                      text: '15.3.3 注册自定义指标',
                      link: '/guide/Chapter-15/15.3-Customizing-Actuator/15.3.3-Registering-custom-metrics',
                    },
                    {
                      text: '15.3.4 创建自定义端点',
                      link: '/guide/Chapter-15/15.3-Customizing-Actuator/15.3.4-Creating-custom-endpoints',
                    },
                  ],
                },
                { text: '15.4 保护 Actuator', link: '/guide/Chapter-15/15.4-Securing-Actuator' },
                { text: '15.5 总结', link: '/guide/Chapter-15/15.5-Summary' },
              ],
            },
            {
              text: '第 16 章 管理 Spring',
              link: '/guide/Chapter-16/Introduction',
              collapsed: false,
              items: [
                {
                  text: '16.1 使用 SpringBoot Admin',
                  link: '/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.1.1 创建 Admin 服务端',
                      link: '/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/16.1.1-Creating-an-Admin-server',
                    },
                    {
                      text: '16.1.2 注册 Admin 客户端',
                      link: '/guide/Chapter-16/16.1-Using-Spring-Boot-Admin/16.1.2-Registering-Admin-clients',
                    },
                  ],
                },
                {
                  text: '16.2 深入 Admin 服务端',
                  link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.2.1 查看普通应用程序运行状况和信息',
                      link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.1-Viewing-general-application-health-and-information',
                    },
                    {
                      text: '16.2.2 观察关键指标',
                      link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.2-Watching-key-metrics',
                    },
                    {
                      text: '16.2.3 检查环境属性',
                      link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.3-Examining-environment-properties',
                    },
                    {
                      text: '16.2.4 查看并设置 log 级别',
                      link: '/guide/Chapter-16/16.2-Exploring-the-Admin-server/16.2.4-Viewing-and-setting-logging-levels',
                    },
                  ],
                },
                {
                  text: '16.3 保护 Admin 服务端',
                  link: '/guide/Chapter-16/16.3-Securing-the-Admin-server/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '16.3.1 在 Admin 服务端中启用登录',
                      link: '/guide/Chapter-16/16.3-Securing-the-Admin-server/16.3.1-Enabling-login-in-the-Admin-server',
                    },
                    {
                      text: '16.3.2 使用 Actuator 进行认证',
                      link: '/guide/Chapter-16/16.3-Securing-the-Admin-server/16.3.2-Authenticating-with-the-Actuator',
                    },
                  ],
                },
                { text: '16.4 总结', link: '/guide/Chapter-16/16.4-Summary' },
              ],
            },
            {
              text: '第 17 章 使用 JMX 监控 Spring',
              link: '/guide/Chapter-17/Introduction',
              collapsed: false,
              items: [
                { text: '17.1 使用 Actuator MBean', link: '/guide/Chapter-17/17.1-Working-with-Actuator-MBeans' },
                { text: '17.2 创建自己的 MBean', link: '/guide/Chapter-17/17.2-Creating-your-own-MBeans' },
                { text: '17.3 发送通知', link: '/guide/Chapter-17/17.3-Sending-notifications' },
                { text: '17.4 总结', link: '/guide/Chapter-17/17.4-Summary' },
              ],
            },
            {
              text: '第 18 章 部署 Spring',
              link: '/guide/Chapter-18/Introduction',
              collapsed: false,
              items: [
                { text: '18.1 权衡部署选项', link: '/guide/Chapter-18/18.1-Weighing-deployment-options' },
                { text: '18.2 构建可执行 JAR 文件', link: '/guide/Chapter-18/18.2-Building-executable-JAR-files' },
                {
                  text: '18.3 构建容器镜像',
                  link: '/guide/Chapter-18/18.3-Building-container-images/Introduction',
                  collapsed: false,
                  items: [
                    {
                      text: '18.3.1 部署到 Kubernetes',
                      link: '/guide/Chapter-18/18.3-Building-container-images/18.3.1-Deploying-to-Kubernetes',
                    },
                    {
                      text: '18.3.2 启用优雅关闭',
                      link: '/guide/Chapter-18/18.3-Building-container-images/18.3.2-Enabling-graceful-shutdown',
                    },
                    {
                      text: '18.3.3 应用存活性和就绪性',
                      link: '/guide/Chapter-18/18.3-Building-container-images/18.3.3-Working-with-application-liveness-and-readiness',
                    },
                  ],
                },
                { text: '18.4 构建并部署 WAR 文件', link: '/guide/Chapter-18/18.4-Building-and-deploying-WAR-files' },
                { text: '18.5 终章', link: '/guide/Chapter-18/18.5-The-end-is-where-we-begin' },
                { text: '18.6 总结', link: '/guide/Chapter-18/18.6-Summary' },
              ],
            },
          ],
          '/api/': [
            {
              text: 'API 参考',
              collapsed: false,
              items: [
                { text: '分享接口', link: '/api/#分享接口' },
                { text: '管理接口', link: '/api/#管理接口' },
                { text: '错误响应', link: '/api/#错误响应' },
                { text: '状态码说明', link: '/api/#状态码说明' },
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
          // { text: 'API', link: '/en/api/' },
          // { text: 'Demo', link: 'https://share.lanol.cn' },
          // {
          //   text: 'More',
          //   items: [
          //     { text: 'Changelog', link: '/en/changelog' },
          //     { text: 'Contributing', link: '/en/contributing' },
          //   ],
          // },
        ],

        sidebar: {
          '/en/guide/': [
            {
              text: 'Spring 实战 (第 6 版) MEAP',
              link: '/en/guide/README'
            },
            {
              text: '欢迎',
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
                  link: '/en/guide/configuration',
                  collapsed: false,
                  items: [
                    { text: '9.3.1 Setting up Spring for Kafka messaging', link: '/en/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.1-Setting-up-Spring-for-Kafka-messaging' },
                    { text: '9.3.2 Sending messages with KafkaTemplate', link: '/en/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.2-Sending-messages-with-KafkaTemplate' },
                    { text: '9.3.3 Writing Kafka listeners', link: '/en/guide/Chapter-09/9.3-Messaging-with-Kafka/9.3.3-Writing-Kafka-listeners' },
                  ],
                },
                { text: '9.4 Summary', link: '/en/guide/configuration' },
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
          '/en/api/': [
            {
              text: 'API Reference',
              collapsed: false,
              items: [
                { text: 'Share API', link: '/en/api/#share-api' },
                { text: 'Admin API', link: '/en/api/#admin-api' },
                { text: 'Error Response', link: '/en/api/#error-response' },
                { text: 'Status Codes', link: '/en/api/#status-codes' },
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
    // 语言切换器
    langMenuLabel: '切换语言',

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Senorita2303/springinaction' },
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Senorita2303',
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
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
