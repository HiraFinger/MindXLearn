import React from "react"
import "./Person.css"
/**
 *  -{}: Embedding expression into HTML
 * className instead of class
 * one root return
 * onclick => onClick
 * Event handler must be a function
 * style must be a object
 * style object follows JS naming convention (Camel Case) (ex : background-color=>backgroundColor)
*/
const Person =(props)=>{
    // JSX - JavaScript XML

    const sayHello=()=>{
        console.log("Hello, I'm " +props.name)
    }

    return (
    <div className="card" style={{backgroundColor: "green",}}>
        <div className="name">Name: {props.name}</div>
        <div className="age">Age: {props.age}</div>
        <button onClick={sayHello}>Click me!</button>
    </div>
    )
}

const  PersonWithoutJSX =(props)=>{
    return React.createElement('div', {id:'test'},'hello')
}

export default Person