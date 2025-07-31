## 11.3 Applying common reactive operations

`Flux` and `Mono` are the most essential building blocks provided by Reactor, and the operations those two reactive types offer are the mortar that binds them together to create pipelines through which data can flow. `Flux` and `Mono` offer more than 500 operations, which can be loosely categorized as follows:

* Creation
* Combination
* Transformation
* Logic

As much fun as it would be to poke at each of the 500 operations to see how they tick, there’s simply not enough room in this chapter. I’ve selected a few of the most useful operations to experiment with in this section. We’ll start with creation operations.

> NOTE：Where are the `Mono` examples? `Mono` and `Flux` share many of the same operations, so it’s mostly unnecessary to show the same operation twice, once for `Mono` and again for `Flux`. Moreover, although the `Mono` operations are useful, they’re slightly less interesting to look at than the same operations when given a `Flux`. Most of the examples we’ll work with will involve `Flux`. Just know that `Mono` often has equivalent operations.


