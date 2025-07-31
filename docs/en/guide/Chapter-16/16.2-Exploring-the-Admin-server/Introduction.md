## 16.2 Exploring the Admin server

Once you’ve registered all of the Spring Boot applications as Admin server clients, the Admin server makes a wealth of information available for seeing what’s going on inside each application, including the following:

* General health and information
* Any metrics published through Micrometer and the /metrics endpoint
* Environment properties
* Logging levels for packages and classes

In fact, almost anything that the Actuator exposes can be viewed in the Admin server, albeit in a much more human-friendly format. This includes graphs and filters to help distill the information. The amount of information presented in the Admin server is far richer than the space we’ll have in this chapter to cover it in detail. But let me use the rest of this section to share a few of the highlights of the Admin server.