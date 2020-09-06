import React,{useState} from 'react';

const NoteCreate = (props) => {

  const [note, setNote] = useState({
    title: "",
    content: "",
    c2Time: new Date().toLocaleTimeString(),
 });

	const InputEvent = (event) => {

      /*const value = event.target.value;
      const name = event.target.name;*/
      const {name, value} = event.target;
	  setNote((aoldData) => {
	    return {
	        ...aoldData,
	        [name]: value,
	      }
	   }); 
        console.log(note);
   };

  const formSubmit = (e) => {
    e.preventDefault();
  };

	const addEvent = () => {

	  props.passNote(note);
	  setNote({
		    title: "",
		    content: "",
        c2Time: new Date().toLocaleTimeString(),
		 });
	 };

 const [expan, setExpand] = useState(false);

 const expandIt = () => {
    setExpand(true);
  };

  const expandBack = () => {
    setExpand(false);
  };

  return ( <>
     <div className="main_note">
       {/*<div className="form" onDoubleClick={expandBack}>*/}
        <form onSubmit={formSubmit} onDoubleClick={expandBack}>
         {expan ? (
          <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
            ) : null}
          <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} onClick={expandIt} placeholder="Write here ...."/>
            {expan ? (
          <button id="btn" onClick={addEvent}><span className="plus-sign"> + </span></button>
            ) : null}      
        </form>
      </div>
    </>
 )};

export default NoteCreate;