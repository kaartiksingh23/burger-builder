import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

// Class Component
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "asfa2", name: "Manu", age: 30 },
      { id: "asfa3", name: "Stephanie", age: 26 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //creates the copy , Remember arrays and objects are reference types
    const persons = [...this.state.persons]; // ES6 way for making the copy
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }; //creates a copy

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
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
          <Persons
            clicked={this.deletePersonHandler}
            persons={this.state.persons}
            changed={this.nameChangedHandler}
          ></Persons>
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}

// export default Radium(App); //higher order component
export default App;
