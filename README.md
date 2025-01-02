# React + TypeScript + Vite

React is a JavaScript Library known for front-end development (or user interface). It is popular due to its component-based architecture, Single Page Applications (SPAs) and Virtual DOM for building web applications that are fast, efficient, and scalable.

- Uses a `virtual DOM` to optimize updates, making applications faster and more efficient.

- Enforces a `one-way data` flow, making the application predictable and easier to debug.

- It uses `JSX` which combines HTML-like syntax with JavaScript's functionality, making it easy to shift to React from JavaScript.

## Virtual DOM

ReactJS Virtual DOM is an in-memory representation of the actual DOM (Document Object Model).React uses this lightweight JavaScript object to track changes in the application state and efficiently update the actual DOM only where necessary.

### How Does the Virtual DOM Work?

1. `Rendering the Virtual DOM`: React creates a virtual representation of the UI as a tree of JavaScript objects.

2. `Updating State`: It generates a new Virtual DOM tree to reflect the updated state when the application state changes.

3. `Diffing Algorithm`: React compares the new Virtual DOM tree with the previous one using its efficient diffing algorithm to identify the minimal set of changes required.

4. `Updating the Real DOM` : React applies only the necessary changes to the real DOM, optimizing rendering performance.

- Reconciliation Process: React’s reconciliation efficiently updates the UI based on changes in the Virtual DOM.

- Batching Updates: Multiple state updates are batched into a single re-render cycle, avoiding unnecessary computations.

## How does React work?

React operates by creating an in-memory virtual DOM rather than directly manipulating the browser’s DOM. It performs necessary manipulations within this virtual representation before applying changes to the actual browser DOM.

## Features of React

- Component-Based Architecture
- JSX (JavaScript Syntax Extension)
- Virtual DOM
- One-way Data Binding

## ReactJS Lifecycle

Each component in React has a lifecycle that you can monitor and manipulate during its three main phases :
Mounting, Updating, and Unmounting.

- Initialization phase: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.

- Mounting Phase: This phase begins when a component is created and inserted into the DOM.

- Updating Phase: This occurs when a component is re-rendered due to changes in props or state.

- Unmounting Phase: This is the final phase when a component is removed from the DOM.

## React JSX

JSX is basically a syntax extension of JavaScript.

## React Components

React components are independent, reusable building blocks in a React application that define what gets displayed on the UI.

There are two primary types of React components:

1. Functional Components

Functional components are simpler and preferred for most use cases. They are JavaScript functions that return React elements.

2. Class Components

Class components are ES6 classes that extend React.Component. They include additional features like state management and lifecycle methods.

- State Management: State is managed using the this.state property.

- Lifecycle Methods: Includes methods like componentDidMount, componentDidUpdate, etc.

### Props in React Components

Props (short for properties) are read-only inputs passed from a parent component to a child component.They enable dynamic data flow and reusability.

- Props are immutable.

- They enable communication between components.

### State in React Components

### Rendering a Component

Rendering a component refers to displaying it on the browser. React components can be rendered using the ReactDOM.render() method or by embedding them inside other components.

- _If you're using multiple ReactDOM.render() calls, state and context cannot be shared between the separate React trees._

- _Each ReactDOM.render() creates a separate React tree, which might lead to inefficiencies if your app requires frequent communication between components._

## Prop Drilling

Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.

- ### Solve Prop Drilling with UseContext Hook

## Context API

Context API is used to pass global variables anywhere in the code without the prop drilling.To work with Context API we need React.createContext. It has two properties Provider and Consumer.The Provider acts as a parent it passes the state to its children whereas the Consumer uses the state that has been passed.

## React Hooks

React Hooks are functions that enable functional components to use React state and lifecycle features.

1. State Hooks:useState allows functional components to manage local state.

2. Context Hooks: useContext enable functional components to access the React Context API and share data across the component tree.

3. Ref Hooks: Ref Hooks like useRef provide access to DOM nodes or persist values without causing re-renders.

4. Effect Hooks: Effect Hooks like useEffect handle side effects like fetching data, subscriptions, and DOM manipulation.

5. Performance Hooks: useMemo and useCallback optimize rendering by memoizing values or functions.

- useReducer: For complex state management.

### Custom Hooks

Custom Hooks are user-defined functions that encapsulate reusable logic. They enhance code reusability and readability by sharing behavior between components.

## React events

React events are the actions due to user interaction or system events. React allows developers to handle these events using a declarative approach, making it easier to create interactive and dynamic user interfaces.
