## 18.3 Building container images

Docker [https://www.docker.com/](https://www.docker.com/) has become the de facto standard for distributing applications of all kinds for deployment in the cloud. Many different cloud environments, including AWS, Microsoft Azure, and Google Cloud Platform (to name a few) accept Docker containers for deploying applications.

The idea of containerized applications, such as those created with Docker, draws analogies from real-world intermodal containers that are used to ship items all over the world. Intermodal containers all have a standard size and format, regardless of their contents. Because of that, intermodal containers are easily stacked on ships, carried on trains, or pulled by trucks. In a similar way, containerized applications share a common container format that can be deployed and run anywhere, regardless of the application inside.

The most basic way to create an image from your Spring Boot application is to use the docker build command and a Dockerfile that copies the executable JAR file from the project build into the container image. The following extremely simple Dockerfile does exactly that:

```bash
FROM openjdk:11.0.12-jre
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

The Dockerfile describes how the container image will be created. Because it’s so brief, let’s examine this Dockerfile line by line:

* _Line 1_ — Declares that the image we create will be based on a predefined container image that provides (among other things) the Open JDK 11 Java runtime.
* _Line 2_ — Creates a variable that references all JAR files in the project’s target/ directory. For most Maven builds, there should be only one JAR file in there. By using a wildcard, however, we decouple the Dockerfile definition from the JAR file’s name and version. The path to the JAR file assumes that the Dockerfile is in the root of the Maven project.
* _Line 3_ — Copies the JAR file from the project’s target/ directory into the container image with a generic name of app.jar.
* _Line 4_ — Defines an entry point—that is, defines a command to run when a container created from this image starts—to run the JAR file with `java -jar /app.jar`.

With this Dockerfile in hand, you can create the image using the Docker commandline tool like this:

```bash
$ docker build . -t habuma/tacocloud:0.0.19-SNAPSHOT
```

The . in this command references the relative path to the location of the Dockerfile. If you are running `docker build` from a different path, replace the . with the path to the Dockerfile (without the filename). For example, if you are running docker build from the parent of the project, you will use docker build like this:

```bash
$ docker build tacocloud -t habuma/tacocloud:0.0.19-SNAPSHOT
```

The value given after the -t argument is the image tag, which is made up of a name and version. In this case, the image name is habuma/tacocloud and the version is 0.0.19-SNAPSHOT. If you’d like to try it out, you can use docker run to run this newly created image:

```bash
$ docker run -p8080:8080 habuma/tacocloud:0.0.19-SNAPSHOT
```

The `-p8080:8080` forwards requests to port 8080 on the host machine (e.g., your machine where you’re running Docker) to the container’s port 8080 (where Tomcat or Netty is listening for requests).

While building a Docker image this way is easy enough if you already have an executable JAR file handy, it’s not the easiest way to create an image from a Spring Boot application. Beginning with Spring Boot 2.3.0, you can build container images without adding any special dependencies or configuration files, or editing your project in any way. That’s because the Spring Boot build plugins for both Maven and Gradle support the building of container images directly. To build your Maven-built Spring project into a container image, you use the `build-image` goal from the Spring Boot Maven plugin like this:

```bash
$ mvnw spring-boot:build-image
```

Likewise, a Gradle-built project can be built into a container image like this:

```bash
$ gradlew bootBuildImage
```

This builds an image with a default tag based on the `<artifactId>` and `<version>` properties in the pom.xml file. For the Taco Cloud application, this will be something like library/tacocloud:0.0.19-SNAPSHOT. We’ll see in a moment how to specify a custom image tag.

Spring Boot’s build plugins rely on Docker to create images. Therefore, you’ll need to have the Docker runtime installed on the machine building the image. But once the image has been created, you can run it like this:

```bash
$ docker run -p8080:8080 library/tacocloud:0.0.19-SNAPSHOT
```

This runs the image and exposes the image’s port 8080 (which the embedded Tomcat or Netty server is listening on) to the host machine’s port 8080.

The default format of the tag is docker.io/library/ ${project.artifactId}:${project.version}, which explains why the tag began with “library.” That’s fine if you’ll only ever be running the image locally. But you’ll most likely want to push the image to an image registry such as DockerHub and will need the image to be built with a tag that references your image repository’s name.

For example, suppose that your organization’s repository name in DockerHub is tacocloud. In that case, you’ll want the image name to be tacocloud/tacocloud:0.0.19-SNAPSHOT, effectively replacing the “library” default prefix with “tacocloud.” To make that happen, you just need to specify a build property when building the image. For Maven, you’ll specify the image name using the `spring-boot.build-image.imageName` JVM system property like this:

```bash
$ mvnw spring-boot:build-image \
    -Dspring-boot.build-image.imageName=tacocloud/tacocloud:0.0.19-SNAPSHOT
```

For a Gradle-built project, it’s slightly simpler. You specify the image name using an `--imageName` parameter like this:

```bash
$ gradlew bootBuildImage --imageName=tacocloud/tacocloud:0.0.19-SNAPSHOT
```

Either of these ways of specifying the image name requires you to remember to do them when building the image and requires that you not make a mistake. To make things even easier, you can specify the image name as part of the build itself.

In Maven, you specify the image name as a configuration entry in the Spring Boot Maven Plugin. For example, the following snippet from the project’s pom.xml file shows how to specify the image name as a `<configuration>` block:

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

Notice, that rather than hardcoding the artifact ID and version, we can leverage build variables to make those values reference what is already specified elsewhere in the build. This removes any need to manually bump the version number in the image name as a project evolves. For a Gradle-built project, the following entry in build.gradle achieves the same effect:

```yaml
bootBuildImage {
  imageName = "habuma/${rootProject.name}:${version}"
}
```

With this configuration in place in the project build specification, you can build the image at the command line without specifying the image name, as we did earlier. At this point, you can run the image with docker run as before (referencing the image by its new name) or you can use docker push to push the image to an image registry such as DockerHub, as shown here:

```bash
$ docker push habuma/tacocloud:0.0.19-SNAPSHOT
```

Once the image is in an image registry, it can be pulled and run from any environment that has access to that registry. An increasingly common place to run images is in Kubernetes. Let’s take a look at how to run an image in Kubernetes.