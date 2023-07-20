# angular-message-bus

In Angular, there are several ways to communicate between two components. The best approach depends on the specific use case and the relationship between the components. Here are some commonly used methods:

Parent-to-Child Communication (Input Binding):
If one component is the parent of the other, you can communicate by using input binding. The parent component can bind a property value to an input property of the child component. Any changes in the parent component will automatically propagate to the child component.

Child-to-Parent Communication (Event Emitter):
If the child component needs to notify the parent component about an event or send data back, you can use event emitters. The child component can emit events using an EventEmitter and the parent component can listen to these events and respond accordingly.

Sharing Data through a Service (Shared Service):
If two components are not directly related in a parent-child relationship, you can create a shared service that acts as a communication channel. The service can have properties or methods to hold and manipulate shared data, and the components can inject and use this service to communicate with each other.

Using NgRx (State Management):
If the components need to share complex state and handle interactions asynchronously, you can use NgRx for state management. NgRx provides a centralized store to manage the application state, and components can dispatch actions and select state using selectors to communicate and synchronize data.

Using a Message Bus/Event Bus:
You can create a message bus or event bus service that acts as a mediator between components. Components can publish events or messages to the bus, and other components can subscribe to those events to receive and respond to them.

Consider the specific requirements and complexity of your application when choosing the best communication approach. For simple scenarios, input/output binding or event emitters may suffice, while for more complex scenarios involving state management or inter-component communication, services or state management libraries like NgRx may be more appropriate.

A message bus is a communication pattern that facilitates the exchange of messages between different components or services within an application. It acts as a central hub where components can publish messages and other components can subscribe to those messages. This decouples the sender and receiver, allowing them to communicate without having direct knowledge of each other. Here's a basic implementation of a message bus in Angular:

1. Create a message bus service
2. Publish and subscribe to messages in components
