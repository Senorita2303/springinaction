## 16.3 Securing the Admin server

As we discussed in the previous chapter, the information exposed by the Actuator’s endpoints isn’t intended for general consumption. They contain information that exposes details about an application that only an application administrator should see. Moreover, some of the endpoints allow changes that certainly shouldn’t be exposed to just anyone.

Just as security is important to the Actuator, it’s also important to the Admin server. What’s more, if the Actuator endpoints require authentication, then the Admin server needs to know the credentials to be able to access those endpoints. Let’s see how to add a little security to the Admin server. We’ll start by requiring authentication.

