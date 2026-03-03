# react-code-evolution
## Introduction 
- React is a library
- Flexible
- Fast and light weight 
- Easy to learn quickly
- Installation of NodeJs and Editor VsCode 


## React Learning Content 
- Fundamentals
- HTTP
- Routing 
- Redux 
- Utilities


## Hello App
- Creating new project using npx create-react-app <app-name>
- Change the text and check the UI 


## Component
- Component Types
- Component are the part of the user interface
- They are re useable and can be nested inside other components 
1. Stateless Functional Component 
2. Stateful Class Component 


## Functional Component
- Functional component are just javascript function 
- They can have a function parameters which can be a string, boolean, object or array etc.
- It contain HTML and JS which know as JSX
- Created Greet.js
- default export & named export  
- When we return a template we should always return a single wrapper HTML element


## Class Component
- They can have a function parameters which can be a string, boolean, object or array etc.
- A class component can maintain its private internal data state to show some data in UI which is private to that component only.
- It contain HTML and JS which know as JSX
- Created Welcome.js


## Functional vs Class Component
1. Functional 
- Use a functional component as much as possible 
- Absence of 'this' keyword in functional 
- It will force to have a solution without having state
- Mainly responsible for the UI
- Stateless Component

2. Class
- More feature rich
- Maintain their own private data state
- Complex UI logic
- Provide Life Cycle Hooks
- Stateful Component


## JSX
- Javascript XML - Extension of Javascript language syntax
- Write XML like code for elements and components
- JSX have tag names, attributes & children
- JSX is not a necessity for the React application 
- JSX make your react code simpler and elegant 
- JSX transpile the code into Javascript which is understood by browser
- Create HelloWithJsx.js and HelloWithoutJxs.js (Mostly we will be using JSX syntax in React Component)


## Props
- Props stands for properties 
- Its a option input for the component to accept 
- Its allow components to dynamic 
- Updated Greet.js & App.js to pass data from App.js to Greet.js 
- props are immutable - In simpler words we cant change value of props in GreetJs file
- If props are not set in AppJs in UI it will not that value os props even though we have mapped props.name in GreetJs  


## State
- Created Message.js class based component to use state
- Added state in constructor
- Updated state when user click on button  
- Notes on setState()
- Never modify the state directly this.state.count += 1 instead use setState() method to update it. 
- If we set directly react will not re-render the component 
- Call to the setState() is asynchronous so In simple terms code below that will execute first then this will get execute 
- ex: console.log() execute first then setState() method is executed dut to that render value is different then logged value.
```
this.setState((prevState) => ({
    count: prevState.count + 1
}), () => {
    console.log(this.state.count)
})
console.log("This will execute first then setState")
```
- setState() take 2 parameters => 1st is state object, 2nd is callback function where we can add code which we want to execute after the state has been updated as per given above example
- When we have to update the state on previous state pass function as argument instead of object like below example
- ex: 
```
this.setState((prevState) => ({
    count: prevState.count + 1
}), () => {
    console.log(this.state.count)
})
```
- If the new state is dependent on props data we can use the props as given in below example 
- ex: 
```
this.setState((prevState, props) => ({
    count: prevState.count + props.count + 1 
}), () => {
    console.log(this.state.count)
})
```


## Props vs State
| Props | State
|-----------------------------------|---------------------------------------|
| Props been pass to the components | state is managed within the components
| Function parameter                | Variable declared in the function body
| props are immutable               | state can be changes
| props are access using            |  
| - props in Function Component     | - useState Hook - Function Component
| - this.props in Class Component   | - this.state - Class Component

## Destructuring props and state
- updated Greet.js file 
- ex: 1st Way - Functional Component
```
Before 
export default function Greet(props)

After 
export default function Greet({ name, children })
```
- ex: 2nd Way - Functional Component
```
export default const Greet = (props)=> {
    const { name, children } = props
    return (
        <!-- HTML CODE -->
    )
}
``` 
- ex: Welcome.js - Class Component
```
export default class Welcome extends Component {
    render(){
        const { name, heroName } = this.props 
        return <h1>Welcome: {name} a.k.a {heroName}: This is class component</h1>
    }
}
```
- Note: state syntax is same as props.


## Event Handling
- Created FunctionClick.js
- Created ClassClick.js
```
    Function Component
    <button onClick={clickHandler}>Click</button>

    Class Component 
    <button onClick={this.clickHandler}>Click</button>
```


### Binding Event Handlers
- Created EventBind.js
- Note: When ever we want to bind the value using 'this' keyword inside click method use fat arrow function as 
a class property or also we can use this fat arrow function in Functional Component.
- ex: 
```
eventBindClickHandler = () => {
    console.log(this)
}

<button onClick={this.eventBindClickHandler}>Event Bind Click</button>
```
- Note: Ref. EventBind.js for Approach 1 and Approach 2


## Methods as props
- Created ParentComponent.js & ChildComponent.js
- In Parent created state greeParent method, Child selector added,
- method passed from parent to child as props and triggered from child with a parameter
- Note: Ref ParentComponent.js & ChildComponent.js files


## Conditional Rendering
- 4 different approaches
- if-else
- Element variables
- Ternary conditional operator
- Short circuit operator: Used when we want to show the UI when condition is pass and do nothing if condition doesn't passed.
- Created UserGreetings.js
- Note: Mostly cases use Conditional Operator or Short circuit Operator  


## List Rendering 
- Created NameList.js to render Array Element & PersonList.js to render Array of Object
- Why to use "key" attribute when creating a list of elements
- "key" give elements to stable identity
- It help react which items are added/removed or updated
- This result in efficient in updates 
- Mostly use key="id" which is unique in object
- In case when object element are not unique we can use "index" to bind toe "key" attribute as a value


## Styling React Component
- Created Stylesheet.js & myStyle.css
1. CSS Stylesheet
2. Inline styling
3. CSS Module


## Basic of Form Handling 
- Created Form.js


## Component Lifecycle Methods 
- created LifecycleA.js (Child Class Component) & LifecycleB.js (Child Class Component)
- In Build Methods for Class Component (Note: Those methods are not available at functional component)
- 4 Phases
- Mounting - When an instance of a component is created and inserted into the DOM - (4 Methods)
=> constructor 
    => It is a special function called when a component is created
    => purpose: It is use for initializing state and binding the event handler
    => When adding own constructor we need to call super() this will call the Base Parent class constructor
    => Do not use effects in constructor: Ex: HTTP Request
=> static getDerivedStateFromProps(props, state)
    => When the state of the component depend on the props over the time 
    => So lets say we have a component  but the initial state of the component depend on the props being passed to the component
    => This method takes two argument state and props and return new updated state
    => This method get called every time when component get re-rendered
    => Avoid calling HTTP calls in this method 
=> render
    => As we are familiar and have already been using this till now and its a required method.
    =>  It use to read props & state and return JSX
    => Avoid change the state of the component or interact with DOM or make HTTP calls
    => After parent life cycle methods children component life cycle methods also gets executed 
=> componentDidMount
    => This component will be called only at once in whole life cycle of the component
    => It invoked immediately after a component & all its child components has been rendered in DOM.
    => This method is perfect place to have a HTTP calls.
    => In this method we can interact with DOM or have a HTTP Calls

- Updating - When component is re-rendered as result in changes of state or props - (5 Methods)
=> static getDerivedStateFromProps - (As we discuss this above already)
=> shouldComponentUpdate(nextProps, nextState)
    => It dictate component should re-render or not 
    => This method receive a updated props & state and purpose of this method is it tells component need to re-render or not
    => byDefault component will get re-render when props and state changes
    => It can prevent default behavior  by return false
    => Avoid calling HTTP calls
=> render - (As we discuss this above already)
=> getSnapshotBeforeUpdate
    => It accept previous state and props and its called right before the changes from the virtual DOM are to be reflected in the DOM
    => It use to capture some information from DOM ex: when user scroll position and after update maintain that scroll position 
    => It can return a null or return a value 
    => returned value will be passed as a 3rd parameter to componentDidUpdate 
=> componentDidUpdate(prevProps, prevState, snapshot)
    => Called after the render is finished in the rerender cycle
    => This method calls at each re-render cycle
    => So that we can have HTTP call
    => But before making the call need to compare prev props and state with updated props and state 


- UnMounting - When a component is being removed from the DOM - (1 Method)
=> componentWillUnMount
    => This method will get call when component is unmounted from DOM and destroyed
    => Here we can have cleaning task, canceling any network request, removing event, cancelling subscription and also invalidating timer
      

- Error Handling - When there is a error during rendering, in a lifecycle method, or constructor of any child - (2 Methods)
=> static getDerivedStateFromError
=> componentDidCatch
=> Above two methods are called when an error during rendering, in a lifecycle method or in the constructor of any child component


## Fragments
- Created FragmentDemo.js
- ex: 
```
<React.Fragment>
    <h1>Fragment Demo </h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quisquam!</p>
</React.Fragment>
```


## Pure Component
- Created ParenComp.js, RegularComp.js and PureComp.js
- Note: UnComment setInterval method in parent and then run to check the output 
- Definition: A pure component implement shouldComponentUpdate with a shallow prop and state comparison
- As we have added child component (RegularComp and PureComp) in ParentComp.js 
- When parent component re-render child component also re-render unless we return false from shouldComponentUpdate() Class Update Hook
- But In our example we can see the logs only getting print from Parent and RegularComp
- logs from PureComp.js does not get print it means it does not re-render when parent component is re-render 
- Regular Component vs Pure Component
1. Regular Component 
    - **Re-render Behavior** - Re-renders by default whenever its parent re-renders or when its own state/props change.
    - **shouldComponentUpdate()** -  Not implemented by default. Must be manually implemented for performance optimization.
    - **Performance** - May cause unnecessary re-renders. 
2. Pure Component
    - **Re-render Behavior** - Re-renders only if props or state change based on a **shallow comparison**.
    - **shouldComponentUpdate()** - Automatically implements `shouldComponentUpdate()` with shallow prop and state comparison.
    - **Performance** - Helps avoid unnecessary re-renders and improves performance.

- Shallow Prop and State Comparision
1. Primitive Types (number, string and booleans) 
    - 'A' shallow comparison 'B' return true => If 'A' & 'B' has same value and same data type
    - ex: string A='Shreyas' and B='Shreyas' then 'A' shallow comparison 'B' return true
2. Complex Types (object, array)
    - 'A' shallow comparison 'B' return true If 'A' & 'B' reference the same object or Array 
    - ex 1:
    ```
    var a = [3,5,2]
    var b = [3,5,2]
    var c === a;

    var ab_eq = (a === b) // return false
    var ac_eq = (a === c) // return true (because memory location reference is same) 
    ```


## Memo
- As we have seen Pure Component help to optimize and avoid unnecessary re-render but it is only in Class Component 
- In functional base component we have React.memo()
- created MemoComp.js


## Refs
- Refs make it possible DOM node within react
- Created RefsDemo.js
- Ex: When component render we need to autofocus the input field this can be done using Ref
- We have two ways to use ref 
1. using 'refs' element attribute and new React.createRef()
2. callback Ref


## Refs with Class Component
- created ParentRefs.js & ChildRefs.js
- used React.createRef() and new createRef()
- Note: "ref" does not attached to functional component make a note its not "refs" its "ref" for Component


## Forwarding Ref
- As we know "ref" does not work with functional component so we use "React.forwardRef" in child component to received the "ref" from parent component
- "React.forwardRef()" takes a component as a argument and as we know component receive props and ref as parameter
- created FRParent.js and FRInput.js
- ex: 
```
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" refs={ref} />
    </div>
  )
})
```

## Portals
- Created PortalDemo.js and updated index.html by adding div id="portal-root"
- used ReactDOM.createPortal(component, elementId)


## Error Boundaries Phase Method
- static getDerivedStateFromError(error)
- componentDidCatch(error, info)
- Runtime error during rendering can put entire application into broken state. React basically unmount whole react component tree. What would be great if we catch the error anywhere in component tree and display fallback UI these is where we use 
Error Boundary
- Error boundary - A class component that implements one or both of the lifecycle methods getDerivedStateFromError() or
componentDidCatch() becomes error boundary.
- The static getDerivedStateFromError() method is used to display the fallback UI after the error is thrown and the 
componentDidCatch() method is use to log the error information.
- created Hero.js & ErrorBoundary.js
- Note: Error Boundary catch error in during rendering, lifecycle methods and constructor of the whole tree below them. They do not catch error inside Event Handlers
- Quick Summary 
    - Error Boundaries are the child component which use to catch the error in their child component and log those errors and display the fallback UI.
    - we use static getDerivedStateFromError() and componentDidCatch()
    - Placement also matters as it controls if the entire application should have the fall back or a particular component that is causing the problem.


## Higher Order Component (HOC)
- What is need fo Higher Order Component ?
    - Created ClickCounter.js, HoverCounter.js as some functionality is common and we are duplicating in both the component.
    - So here it comes the Higher Order Component which is needed is to share the common functionality between the component.
- What exactly is Higher Order Component ?
    - A patter where a function takes a component as an argument and return a new enhance component
    - ex: const newComponent = higherOrderComponent( originalComponent )
    - Created WithCounter.js
- Note: 
    - When props are mapped to "ClickCounter" selector in App.js that props are passed to to "withCounter" HOC component but not directly to "ClickCounter because of that we cant use that"
    - While passing that prop it passes to "WithCounter" and we need to pass it to "WrapperComponent" 


## Render Props
- Why its needed ?
    - Created ClickCounter2.js and HoverCounter2.js 
    - In above component we observe state and incrementCount method is common in both the component we can make this as a common to do that we can use Render Props (Which we did already in higer Order Component (HOC) )
- Part 2
    - Created User.js    
    - In react its possible to use a props whose value is a function to control what is actually render by component
    - The term "render props" refers to technique for sharing code between React Component using props whose value is a function 
    - Updated - App.js line no. 137 to 147 and created Count2.js a "render props" component which holds component logic and pass state and functionality

## Context
- Context provide a way to pass the data through the component tree (Nested Component) without having to pass props down manually
at entry level.
- Created - ComponentA.js, ComponentB.js, ComponentC.js and ComponentD.js
- Steps
1. Create the context
```
const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }
```
2. Provide the context value
- Note: React Context value accepts only ONE value.
```
<UserProvider  value={{ username: "shreyas", age: 28 }}>
    <ComponentA />
</UserProvider>
```
3. Consume the context value
```
 <UserConsumer>
    { (user) => {
        return <div>Hello { user.username } - { user.age }</div>  
    }}
</UserConsumer>
```
- We can set default value to the context while creating 
- This does not required Provider around the component Consumer will pick the default value
- ex: 
```
const UserContext = React.createContext({name: 'NA', age: 0});
```
- Context Type - refer ComponentD.js and ComponentC.js

## React and HTTP
- Axios & JSON Placeholder for FAKE APIs
- created a PostList.js

--------------------------------------------------------------------------------------------------------------------------------
# React Hooks 


## What are Hooks
- Hooks are the new feature introduce in React v16.8 which allows you to use react feature without writing a class.
- ex: We can use state in a component
- Note: Hooks does not work in Class

## Why Hooks are required ?
- Reason Set 1
    - When working with class its important to understand the 'this' keyword works in JS
    - We were need to remember to bind event handler in constructor 
    - Classes doesn't minify very well and make hot reloading very unreliable
- Reason Set 2
    - There is no particular way to reuse the stateful component logic
    - Higher order component (HOC) and render props do address this problem.
    - Makes harder to maintain the code
    - There is a need to share the stateful logic in a better way
- Reason Set 3
    - In complex component when having HTTP calls and Event Listeners
    - We were need to add in componentDidMount(), componentDidUpdate() and componentWillUnmount()
    - This leads to un organized of code 


## useState Hook


## Shortcut of snippets
- rfc - to have a functional component
- rce - to have a class component
- rconst - to have a constructor inside class

