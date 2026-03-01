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

## Folder Structure

## Component
- Component Types
- Component are the part of the user interface
- They are re useable and can be nested inside other components 
1. Stateless Functional Component 
2. Statefull Class Component 

## Functional Component
- Functional component are just javascript function 
- They can have a function parameters which can be a string, boolean, object or array etc.
- It contain HTML and JS which know as JSX
- Created Greet.js
- default export & named export  
- When we return a template we should alway return a single wrapper HTML element

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
- Statefull Component

## Hooks

## JSX
- Javascript XML - Extension of Javascript language syntax
- Write XML like code for elements and components
- JSX have tag names, attributes & children
- JSX is not a necessaity for the React application 
- JSX make your react code simpler and elegant 
- JSX transpile the code into Javascript which is understood by browser
- Create HelloWithJsx.js and HelloWithoutJxs.js (Mostly we will be usnig JSX syntax in React Component)

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
- If we set directly react will not re render the component 
- Call to the setState() is asynchronous so In simple terms code below that will execute first then this will get execute 
- ex: console.log() execute first then setState() method is executed dut to that render value is different then logged value.
```
this.setState((prevState) => ({
    count: prevState.count + 1
}), () => {
    console.log(this.state.count)
})
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
- Note: When ever we want to bind the value using 'this' keyword inside click method use fat arrow function in render method as 
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


## Shortcut of snippets
- rfc - to have a functional component
- rce - to have a class component
- rconst - to have a constructor inside class

