import React from "react";
import classes from "../Cockpit/Cockpit.css";

const Cockpit = (props) => {
  let btnClass = [classes.Button];

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  //let classes = ['red','bold'].join(' '); //converts array of string to "red bold"
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div>
      <h1>Hi, Im a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass.join(" ")} onClick={props.click}>
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpit;
