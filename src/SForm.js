import React,{useState} from 'react';
import './HandelEvent.css';

const SForm = () => {

  const [name, setName] = useState("");
  const [name2, setP] = useState("");

  const [fullName, setFullName] = useState();
  const [password, setPassword] = useState();

	const inputEvent = (event) => {
		console.log(event.target.value);
	  setName(event.target.value);
	};

	const inputEvent2 = (event) => {
		console.log(event.target.value);
	  setP(event.target.value);
	};

	const onSubmits = (event) => {
		event.preventDefault(); // it does'nt refresh the page. It prevent Default behaviour
      setFullName(name);
      setPassword(name2);
    };

  return <>
   <form onSubmit={onSubmits}>
    <div> 
     { /*<h1> Hello {name} </h1>  // when type it automatically show
      <input type="text" onChange={inputEvent} />*/}
      <h1> Hello {fullName} {password} </h1> 
      <input type="text" onChange={inputEvent} value={name} />
      <br/>
      <input type="password" onChange={inputEvent2} value={name2} />
      <br />
      {/*<button onClick={onSubmits}> Click Here </button>*/}
      <button type="submit"> Click Here </button>
    </div> 
   </form>
  </>
 };

export default SForm;