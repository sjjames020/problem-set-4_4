# Problem Set 4-4

## Closures, Prototypes, Constructors, and Classes

1. What is a closure?
 In JavaScript a closure is a function that can access values outside of its own block.

2. What are the benefits of using a constructor functions to create object instances instead of a factory function?
When using a constructor function each instance can be created with its own unique properties and can inherit methods from that constructors prototype this means changes made to one instance, will not affect other instances.


3. What is the `__proto__` property and how does it differ from the `protoype` property?
Prototype is a hidden property that references an object’s prototype and __proto__ is a method that exposes the hidden Prototype property and allows you to modify it.

