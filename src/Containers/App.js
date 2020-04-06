import React, { Component } from "react";
import classes from './App.css';
// import Person from "../Components/Persons/Person/Person";
// import "./App.css";

// import Radium, { StyleRoot} from 'radium';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

// Class Component
class App extends Component {
  state = {
    persons: [
      { id:'asfa1', name: "Max", age: 28 },
      { id:'asfa2', name: "Manu", age: 30 },
      { id:'asfa3', name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); //creates the copy , Remember arrays and objects are reference types
    const persons = [...this.state.persons]; // ES6 way for making the copy
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = ( event, id ) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {...this.state.persons[personIndex]}; //creates a copy
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person ;

    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const showPersonsValue = this.state.showPersons;
    this.setState({ showPersons: !showPersonsValue });
  };

  render() {
    //this way styles are scoped to component , this is called inline styles, but this way you will not able to leverage the full power of css
   

    let persons = null;
   

    if (this.state.showPersons) {

      persons = (
        <div>
          <Persons clicked={this.deletePersonHandler} persons={this.state.persons} changed={this.nameChangedHandler}></Persons>
        </div>
      );
    }

    return (
      

        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} click={this.togglePersonsHandler}></Cockpit>
          {persons}
        </div>

        
      
    );

    // The above code is compiled to below code by many workflow build tools we get out of this project
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React APP'))

    /*
      Restrictions in jsx =>
        class => ClassName
        JSX elements should have a root element .... But adjacent elements can be achieved ...Remember!
    */
  }
}

// export default Radium(App); //higher order component
export default App;
// import React, { useState } from "react";  //UseState is a React Hook. Hooks add functionality to functional component.
// //UseState allows to add state management in functional components
// import Person from "./Person/Person";
// import './App.css';

// const App = () => {
//   const [personsState, setPersonsState]  = useState({  //ARRAY DESTRUCTURING
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 30 }
//     ],
//     otherState: "Some Value"
//   });

//   const switchNameHandler = () => {
//     setPersonsState({ //Remember : it does not update state it replaces it
//       persons: [
//         { name: "Kaartik", age: 27 },
//         { name: "Manu", age: 31 }
//       ],
//       otherState: personsState.otherState
//     });

//     console.log(this.st`ate);
//   };

//   return (
//     <div className="App">
//       <h1>Hi, Im a React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//     </div>
//   );

// };

// export default App;
