import React from 'react';

const NoteHeader = () => {

  return <>
     <div className="header">
       <i className="fa fa-book" style={{fontSize:"42px", color: "white"}}></i>
       <h2> &nbsp; Keep Notes </h2>
         <h4 style={{position: "absolute", left: "49%"}}> Welcome App </h4>
         <i className="fa fa-edit" style={{fontSize:"29px", color: "white", position: "absolute",
        left: "59%"}}></i>
     </div> 
  </>
 };

export default NoteHeader;