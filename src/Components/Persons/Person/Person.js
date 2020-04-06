import React from "react";
import classes from "./Person.css";

const person = (props) => {
  const rnd = Math.random();
  if (rnd > 0.9999) {
    throw new Error("Something went wrong");
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}>
        I,m {props.name} and I am {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// export default Radium(person)
export default person;
