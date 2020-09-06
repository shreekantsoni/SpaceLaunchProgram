import React,{useState} from 'react';
import './HandelEvent.css';

const SForm2 = () => {

 const [fullName, setFullName] = useState({
    fname: "",
    fpassword: "",
   });

	const inputEvent = (event) => {
		console.log(event.target.value);
	  console.log(event.target.name);
	/*const value = event.target.value;
  const name = event.target.name;*/
  const {name, value} = event.target;
   setFullName((a) => {
    console.log(a);
       return {
          ...a,
         [name]: value,
       };
     });

    };
 
   const onSubmits = (event) => {
    event.preventDefault(); // it does'nt refresh the page. It prevent Default behaviour
     // setFullName(name);
     //setPassword(name2);
    };


  return <>
   <form onSubmit={onSubmits}>
    <div> 
     { /*<h1> Hello {name} </h1>  // when type it automatically show
      <input type="text" onChange={inputEvent} />*/}
      <h1> Hello {fullName.fname} {fullName.fpassword}</h1> 
      <input type="text" name='fname' onChange={inputEvent} value={fullName.fname} />
      <br/>
      <input type="password" name='fpassword' onChange={inputEvent} value={fullName.fpassword} />
      <br />
      {/*<button onClick={onSubmits}> Click Here </button>*/}
      <button type="submit"> Click Here </button>
    </div> 
   </form>
  </>
 };

export default SForm2;