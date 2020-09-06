import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const Netflix = () => {
  return (
   <Card
      imgsrc={Sdata[1].imgsrc} 
      title={Sdata[1].title} 
      sname={Sdata[1].sname} 
      link={Sdata[1].link} 
   />
  );
 }

export default Netflix;