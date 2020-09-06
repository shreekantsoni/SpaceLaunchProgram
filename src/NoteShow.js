import React,{useState} from 'react';

const NoteShow = (props) => {

  const deleteNote = () => {
    props.deleteItem(props.id);
   };

  // let cTimes = new Date().toLocaleTimeString();
  // const c2T = useState(cTimes);

  return <>
     <div className="note">
        <h1><b> {props.title} </b></h1>
         <br />
        <p> {props.content} </p>
         <hr />
        <h6 > {props.c2Time} </h6>
        <button className="btn" onClick={deleteNote}>
          <span className="deleteIcon"> <i className="fa fa-trash-o" ></i> </span>
        </button>
      </div>
    </>
 };

export default NoteShow;