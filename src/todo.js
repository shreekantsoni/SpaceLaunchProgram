import React,{useState} from 'react';
import './todo.css';
import TodoLists from './todoLists';

const Todo = () => {

  const [inputList, setInputList] = useState("Hello");
  const [Items, setItems] = useState([]);

   const itemEvent = (event) => {
    setInputList(event.target.value);
   };

  const listofItems = () => {
     setItems((aoldData) => {
       return [...aoldData, inputList]
    })
     setInputList(""); // After click input file will empty.
  };

  const deleteItems = (id) => {
   console.log("deleted");
   var yt = window.confirm('Delete the item?');
     if(yt == false)
      {

      } else {
       setItems((aoldData) => {
        return aoldData.filter((arrElem, index) => {
            return index !== id;
          });
         });
     };
   }

  return <>
     <div className="main_div"> 
        <div className="center_div"> 
            <br />
           <div className="fixed">
             <h1> ToDo List </h1> 
              <br/>
             <input className="input" type="text" name='name' value={inputList} onChange={itemEvent}/>
             <button className="btn btn-info mx-4" type="submit" onClick={listofItems}> + </button>
           </div>
            <br /> <br /> <br /> <br /> <br /> <br />
           <ol>
             {/*<li> {inputList} </li>*/}
             {Items.map((bvalue, index) => {
               return <TodoLists key={index} id={index} text={bvalue} onSelect={deleteItems}/>;
              })} 
           </ol>
        </div>
     </div> 
  </>
 };

export default Todo;