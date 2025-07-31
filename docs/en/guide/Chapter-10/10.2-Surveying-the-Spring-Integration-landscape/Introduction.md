## 10.2 Surveying the Spring Integration landscape

Spring Integration covers a lot of ground with a multitude of integration scenarios. Trying to include all of it in a single chapter would be like trying to fit an elephant in an envelope. Instead of a comprehensive treatment of Spring Integration, I’ll present a photograph of the Spring Integration elephant to give you some idea of how it works. Then you’ll create one more integration flow that adds functionality to the Taco Cloud application.

An integration flow is composed of one or more of the following components. Before you write any more code, we’ll take a brief look at the role each of these components plays in an integration flow:

* _Channels_ —— Passes messages from one element to another
* _Filters_ —— Conditionally allows messages to pass through the flow based on some
criteria
* _Transformers_ —— Changes message values and/or converts message payloads from
one type to another
* _Routers_ —— Directs messages to one of several channels, typically based on message
headers
* _Splitters_ —— Splits incoming messages into two or more messages, each sent to different channels
* _Aggregators_ —— The opposite of a splitter; combines multiple messages coming in
from separate channels into a single message
* _Service activators_ —— Hands a message off to some Java method for processing, and
then publishes the return value on an output channel
* _Channel adapters_ —— Connects a channel to some external system or transport; can
either accept input or write to the external system
* _Gateways_ —— Passes data into an integration flow via an interface

You’ve already seen a few of these components in play when you defined the filewriting integration flow. The `FileWriterGateway` interface was the gateway through which an application submitted text to be written to a file. You also defined a transformer to convert the given text to uppercase; then you declared a service gateway that performed the task of writing the text to a file. And the flow had two channels, `textInChannel` and `fileWriterChannel`, that connected the other components with each other. Now, a quick tour of the integration flow components, as promised.

