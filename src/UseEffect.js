import React,{useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const UseEffect = () => {

  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
    
    const addEvent = () => {
	  setNum(num + 1);
	 };

  useEffect(() => {   //useEffect call automatic render. when use []empty arr it call only one time.
   //  alert("hello");
      document.title = `Clicked ${nums} times`;
  }, [nums]);        // when pass variable name, when click nums btn then show alert.

  return <>
    <center className="my-5">
      <button onClick={addEvent}> Click Count {num} </button>
       <br /> <br />
      <button onClick={() => {setNum(num + 1);}}> Click Count {num} </button>
         <br /> <br />
      <button onClick={() => {setNums(nums + 1);}}> Click Count {nums} </button>
    </center>
  </>
 };

export default UseEffect;