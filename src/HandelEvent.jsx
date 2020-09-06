import React,{useState} from 'react';
import './HandelEvent.css';

const HandelEvent = () => {
  
  const changeColor = "yellow";
  const [bg, setBg] = useState(changeColor); // Hook State
  const [name, setName] = useState('click to Change'); // Hook State

  let [count, setCount] = useState(0); // Hook State
  
   const [cTime, currentTime] = useState(); // Time

  let cTimes = new Date().toLocaleTimeString();
   const [c2Time, updateTime] = useState(cTimes);

  const fun = () => {
      //  alert("Hello");
    let changeBg = "blue";
       setBg(changeBg);
       setName("Change Name");
       setCount(count++); 
  };

  const funs = () => {
      //  alert("Hello");
    let changeBg = "red";
       setBg(changeBg);
       setName("Change Double Name");

    let changeTime = new Date().toLocaleTimeString();
      currentTime(changeTime);

       setCount(count++);
  };

  const updateT = () => {
      cTimes = new Date().toLocaleTimeString();
      updateTime(cTimes);
  };

  setInterval(updateT, 1000);

  return (
  <>
    <div style={ {background: bg} }>
      <h1> {c2Time} </h1>
      <h1> {cTime} </h1>
      <h1> {count} </h1>
      <button onClick={fun} onDoubleClick={funs}> Click On {name}</button>
    </div>  
  </>
  );
};

export default HandelEvent;