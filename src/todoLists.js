import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const TodoLists = (props) => {

 const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
   };

  return <>
    <br/>
    <div className="todo_style">
      <span onClick={cutIt}>
       <i className="fa fa-times-circle" 
           aria-hidden="true" 
           onClick={() => { props.onSelect(props.id);
              } }/>
      </span>
       <li style={ {textDecoration: line ? "line-through" : "none"} } > {props.text} </li> 
    </div>
  </>
 };

export default TodoLists;