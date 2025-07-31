# Chapter 17. Monitoring Spring with JMX

This chapter covers

* Working with Actuator endpoint MBeans
* Exposing Spring beans as MBeans
* Publishing notifications

For over a decade and a half, Java Management Extensions (JMX) has been the standard means of monitoring and managing Java applications. By exposing managed components known as MBeans (managed beans), an external JMX client can manage an application by invoking operations, inspecting properties, and monitoring events from MBeans.

We’ll start exploring Spring and JMX by looking at how Actuator endpoints are exposed as MBeans.

