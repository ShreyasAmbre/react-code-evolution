import logo from './logo.svg';
import './App.css';
// Default Exporting Component
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import HelloWithJsx from './components/HelloWithJsx';
import HelloWithoutJsx from './components/HelloWithoutJsx';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import NamesArrayObject from './components/NamesArrayObject';
import PersonsArrayObject from './components/PersonsArrayObject';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleC from './components/LifecycleC';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import ParentRefs from './components/ParentRefs';
import FRParent from './components/FRParent';
import PortalDemo from './components/PortalDemo';

// Named Exporting Component
// import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
     {/* <Greet />
     <Greet name="Alex"/>
     <Greet name="Boss">
      <p>Im a child component getting passed by Props from AppJs to GreetJs component</p>
     </Greet> */}
     {/* <hr />
     <Welcome name="Shreyas" heroName="Shri" />

     <HelloWithJsx />
     <HelloWithoutJsx />

     <Message /> */}

     {/* <hr />
     <Counter /> */}

    {/* <hr />
    <span>Event Handling Concept: </span>
    <FunctionClick />
    <EventBind /> */}

    {/* <hr />
    <span>Parent Child Component Communication using Props </span>
    <ParentComponent /> */}
    {/* <hr />
    <span>Conditional Rendering</span>
    <UserGreetings /> */}

    {/* <hr />
    <span>List Rendering : Array Element </span>
    <NameList />
    <span>List Rendering : Array of Object</span>
    <NamesArrayObject />
    <span>List Rendering: Using Child Component with Array of Object  </span>
    <PersonsArrayObject /> */}

    {/* <span>Styling Component</span>
    <Stylesheet isPrimary={true} /> */}

    {/* <hr />
    <Form /> */}

    {/* <hr />
    <span>Class Lifecycle Mounting Hooks Methods</span>
    <LifecycleA counter={0} /> */}

    {/* <hr />
    <LifecycleC /> */}

    {/* <hr />
    <span>REact Fragments</span>
    <FragmentDemo /> */}

    {/* <hr />
    <span>Pure Component</span>
    <ParentComp /> */}

    {/* <hr />
    <span>Refs</span>
    <RefsDemo /> */}

    {/* <hr />
    <span>Refs with Component</span>
    <ParentRefs /> */}

    {/* <hr />
    <span>Forwarding Ref - Functional Component</span>
    <FRParent /> */}

    <hr />
    <span>Portals</span>
    <PortalDemo />


    </div>
  );
}

export default App;
