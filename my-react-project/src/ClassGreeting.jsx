
import { Component } from 'react';
import { string } from 'prop-types';
import './styles.css';


class ClassGreeting extends Component {                 // ClassGreeting is a class-based component that extends the Component class from React

    constructor(props){                                 // The constructor method is called when an instance of the class is created. It initializes the state of the component.
        super(props);                                   // The super(props) call is required to access the props object in the constructor.
        this.state = {                                  // The state object stores the dynamic data of the component.
            name: this.props.initialName,                // The initial state of the component is set to the value of the initialName prop passed to the component.
            isLoggedIn: false
        }

        this.toggleLogin = this.toggleLogin.bind(this);   // binding the method to the classGreeting component, and is Local to the classGreeting component
    }

    toggleLogin() {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    }

    render() {

        const {name, isLoggedIn } = this.state; // Destructuring the state object to access the name and isLoggedIn properties
        
        
        return (
            <div>
                <p className='greeting'>
                    {isLoggedIn ? `Hello, ${name}  Welcome back!` : this.props.customMessage}
                </p>

                <button onClick={this.toggleLogin}>Log In</button>
            </div>
        )
    }
}
// Below does prop validation, and it is a static property of the class
// it is used to specify the data types of the props that the component expects to receive
ClassGreeting.propTypes = {
    initialName: string,
    customMessage: string
}


ClassGreeting.defaultProps = {
    initialName: 'John Doe'
} //default props

export default ClassGreeting;



// ---------- Q & A ---------- //

//  What is state?
//      State is a built-in object in React that stores the component's dynamic data and determines the component's behavior. 
//      It is mutable and can be updated using the setState method. State is used to manage the component's data and re-render the component when the state changes.
//  

//examples of stateful components, more like a class component (class based components are a way of the past because of the introduction of hooks In React 16.8)
// 1. Form Handling: A stateful component can manage the input values of a form and handle form submission.
// 2. Dynamic UI Updates: A stateful component can update its UI based on user interactions, such as toggling visibility or changing styles.
// 3. Data Fetching: A stateful component can fetch data from an API and store it in the state to display it in the UI.
// 4. Managing Timers: A stateful component can manage timers or intervals and update the state based on elapsed time.
// 5. Complex User Interactions: A stateful component can handle complex user interactions, such as drag-and-drop functionality or multi-step processes.

//  What is stateful vs stateless components? 
//      Stateful components are class-based components that have state and can manage dynamic data. 
//      They have a render method that returns the component's UI based on the current state.
//      Stateful components can update their state using the setState method, triggering a re-render of the component.

//examples of stateless components, More like a functional component
// 1. Displaying Static Content: A stateless component can be used to display static content that does not change over time.
// 2. Presentational Components: A stateless component can be used to render UI elements based on props without managing any state.
// 3. Functional UI Elements: A stateless component can be used to create functional UI elements like buttons, icons, or labels.
// 4. Reusable Components: A stateless component can be used to create reusable components that can be used across different parts of the application.
// 5. Simple Layouts: A stateless component can be used to create simple layouts or wrappers that do not require state management.