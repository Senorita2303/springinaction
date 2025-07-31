## 13.3 Reactively persisting data in Cassandra

To get started with reactive persistence against a Cassandra database, you’ll need to add the following starter dependency to your project build. This dependency is in lieu of any Mongo or R2DBC dependencies we’ve used earlier.

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-cassandra-reactive</artifactId>
</dependency>
```

Then, you’ll need to declare some details about the Cassandra keyspace and how the schema should be managed. In your application.yml file, add the following lines:

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

This is the same YAML configuration we used in chapter 4 when working with nonreactive Cassandra repositories. The key thing to take note of is the `keyspace-name`. It is important that you create a keyspace with that name in your Cassandra cluster.

You’ll also need to have a Cassandra cluster running on your local machine listening on port 9042. The easiest way to do that is with Docker, as follows:

```bash
$ docker network create cassandra-net
$ docker run --name my-cassandra --network cassandra-net \
        -p 9042:9042 -d cassandra:latest
```

If your Cassandra cluster is on another machine or port, you’ll need to specify the contact points and port in application.yml, as shown in chapter 4. To create the keyspace, run the CQL shell and use the `create keyspace` command like this:

```bash
$ docker run -it --network cassandra-net --rm cassandra cqlsh my-cassandra
cqlsh> create keyspace tacocloud
WITH replication = {'class': ’SimpleStrategy', 'replication_factor' : 1};
```

Now that you have a Cassandra cluster, a new `tacocloud` keyspace, and the Spring Data Cassandra Reactive starter in your project, you’re ready to start defining the domain classes.


