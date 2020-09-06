import React from 'react' ;
import ReactDOM from 'react-dom' ; // This is not mandatory
 

  function DemoList(props) {
  return (
    <div className="dib ma2 pa2 bg-light-green grow shadow-4"> 
     <img src={`https://joeschmoe.io/api/v1/${props.name}`} className="tc" alt="Demo"/>
  		         <h1> Hello {props.name} </h1>
  		         <p> {props.work} </p>
             </div>
  );
}
 
 

  export default DemoList ;
