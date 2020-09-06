import React from 'react';
//import ReactDOM from 'react-dom' ;
import logo from './logo.svg';
import Heading from './Heading';
import abc, { xyz, Headin, add } from "./Headin"
import './App.css';

 const fname = "Hello";
const time = new Date().toLocaleTimeString();
// let t = new Date(2020, 8, 20, 15).getHours();
 let t = new Date();
  t = t.getHours();
let greeting = " "
let css = { }

if(t>=1 && t<12)
 {
   greeting = "Good Morning"
   css.color = "green"
 } 
else if(t>=12 && t<19)
{
  greeting = "Good Afternoon"
   css.color = "orange"
} else {
  greeting = "Good Night"
   css.color = "brown"
}

/*ReactDOM.render(
  <>
   <h1> Hi, {fname} <span style={css}> {greeting} </span> </h1>
   <Headin />
   <Heading />
  </>,
   document.getElementById("root")
  );*/

 function App() {
    return (
 <>
  <center className="App-header">
   <h1> Hi, {fname} <span style={css}> {greeting} </span> </h1>
    <Heading />
    <h1> { abc } </h1>
    <h5> { xyz } </h5>
    <h1>  { add(40, 5) } </h1>
    <h6> { Headin() } </h6>
  </center>
 </>
 );
}

export default App;
