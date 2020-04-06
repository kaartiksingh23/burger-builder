import React, { Component } from "react";
import Person from "../Components/Persons/Person/Person";
// import "./App.css";
import classes from './App.css'
// import Radium, { StyleRoot} from 'radium';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

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
    let btnClass = [classes.Button]

    if (this.state.showPersons) {

      persons = (
        <div>
          {// dynamic way
          this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => {
                  this.deletePersonHandler(index);
                }}
                changed={(event)=>this.nameChangedHandler(event,person.id)}
              />
            );
          })}

          {/* Hard Coded Way:
           <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // using bind here
            click={this.switchNameHandler.bind(this,'Maximillian')} // you can also pass functions as props
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person> */}
        </div>
      );

      btnClass.push(classes.Red);
    }
    //let classes = ['red','bold'].join(' '); //converts array of string to "red bold"
    const assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }

    

    return (
      
        <div className={classes.App}>
          <h1>Hi, Im a React App</h1>
          {/* other than arrow function you can use bind  */}
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button className= {btnClass.join(' ')} onClick={this.togglePersonsHandler}>
            Toggle Person
          </button>
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
