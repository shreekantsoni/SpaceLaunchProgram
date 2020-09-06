import React,{useState} from 'react';
import './Note.css';
import NoteHeader from './NoteHeader';
import NoteCreate from './NoteCreate';
import NoteShow from './NoteShow';
import Footer from './footer';

const NoteApp = () => {

 const [addItem, setAddItem] = useState([]);

 const addNote = (note) => {
   // alert("ok");
   setAddItem((aPrevData) => {
      return[...aPrevData, note]
    });
 };

 const onDelete = (id) => {
  var yt = window.confirm('Delete the item?');
     if(yt === false)
      {

      } else {
    setAddItem((oldData) =>
       oldData.filter((currData, indx) => {
          return indx !== id;
       })
     );
    }
  };

  return <>
       <NoteHeader />
       <NoteCreate passNote={addNote} />
       {/*<NoteShow />*/}
       {addItem.map((val, index) => {
            return (
              <NoteShow key={index} 
                        id={index} 
                        title={val.title} 
                        content={val.content}
                        c2Time={val.c2Time} 
                        deleteItem={onDelete}
             />
           );
        })}
       
       <Footer />
   </>
 };

export default NoteApp;