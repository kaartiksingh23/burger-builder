import React from 'react'
import classes from './Person.css'
// import styled from 'styled-components';
// import Radium from 'radium'

// functional Component => highly configurable => advantage over class component
// {} in JSX => allows expressions and function calls
// JSX looks like HTML
// children is a reserved word refers to every elements between the opening and closing brackets of our component element, 
// It does not need necessary to be a text

//state in functional components is manged through hooks. This was added after React 16.8. Before this state was 
//only manageable in class components

//tagged template feature ... not a React feature it is vanilla js feature;
// const StyledDiv = styled.div`   
        
// width:60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding:16px;
// text-align: center;


// @media (min-width:500px){

// width: '450px'


// }
// `  //every method returns a React component in styled components library

const person = (props) => {
    // const style ={
    //     '@media (min-width:500px)':{
    //         width: '450px'
    //     }
    // };
    const rnd = Math.random();
    if(rnd >0.9999){
        throw new Error ('Something went wrong')
    }
    
    return (

        <div className={classes.Person} >
       
            <p onClick={props.clicked}>I,m {props.name} and I am {props.age}</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
 

// export default Radium(person)
export default person