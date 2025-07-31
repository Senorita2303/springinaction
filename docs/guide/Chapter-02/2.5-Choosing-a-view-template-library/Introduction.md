## 2.5 Choosing a view template library

For the most part, your choice of a view template library is a matter of personal taste. Spring is flexible and supports many common templating options. With only a few small exceptions, the template library you choose will itself have no idea that it’s even working with Spring

**Table 2.2 Supported template options**

| Template | Spring Boot starter dependency |
| :--- | :--- |
| FreeMarker | spring-boot-starter-freemarker |
| Groovy Templates | spring-boot-starter-groovy-templates |
| JavaServer Page （JSP） | None （provided by Tomcat or Jetty） |
| Mustache | spring-boot-starter-mustache |
| Thymeleaf | spring-boot-starter-thymeleaf |

Generally speaking, you select the view template library you want, add it as a dependency in your build, and start writing templates in the /templates directory (under the src/main/resources directory in a Maven or Gradle project). Spring Boot detects your chosen template library and automatically configures the components required for it to serve views for your Spring MVC controllers.

You’ve already done this with Thymeleaf for the Taco Cloud application. In chapter 1, you selected the Thymeleaf check box when initializing the project. This resulted in Spring Boot’s Thymeleaf starter being included in the pom.xml file. When the application starts up, Spring Boot autoconfiguration detects the presence of Thymeleaf and automatically configures the Thymeleaf beans for you. All you had to do was start writing templates in /templates.

If you’d rather use a different template library, you simply select it at project initialization or edit your existing project build to include the newly chosen template library.

For example, let’s say you wanted to use Mustache instead of Thymeleaf. No problem. Just visit the project pom.xml file and replace this

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

with this：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mustache</artifactId>
</dependency>
```

Of course, you’d need to make sure that you write all the templates with Mustache syntax instead of Thymeleaf tags. The specifics of working with Mustache (or any of the template language choices) is well outside of the scope of this book, but to give you an idea of what to expect, here’s a snippet from a Mustache template that will render one of the ingredient groups in the taco design form:

```html
<h3>Designate your wrap:</h3>
<div>
  <input name="ingredients" type="checkbox" value="{{id}}" />
  <span>{{name}}</span><br/>
</div>
```

This is the Mustache equivalent of the Thymeleaf snippet in section 2.1.3. The `wrap` block (which concludes with `/wrap`) iterates through a collection in the request attribute whose key is wrap and renders the embedded HTML for each item. The `{{id}}` and `{{name}}` tags reference the id and name properties of the item (which should be an `Ingredient`).

You’ll notice in table 2.2 that JSP doesn’t require any special dependency in the build. That’s because the servlet container itself (Tomcat by default) implements the JSP specification,

But there’s a gotcha if you choose to use JSP. As it turns out, Java servlet containers—including embedded Tomcat and Jetty containers—usually look for JSPs somewhere under /WEB-INF. But if you’re building your application as an executable JAR file, there’s no way to satisfy that requirement. Therefore, JSP is an option only if you’re building your application as a WAR file and deploying it in a traditional servlet container. If you’re building an executable JAR file, you must choose Thymeleaf, FreeMarker, or one of the other options in table 2.2.
