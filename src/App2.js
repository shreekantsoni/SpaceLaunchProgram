import React from "react";
import Card from "./Cards";
import "./App2.css";
import Sdata from "./Sdata";
import Netflix from "./Netflix";

console.log(Sdata[0].sname)

/* function funcard(a) {
  console.log(a);
    return (
       <Card
           imgsrc={a.imgsrc}
           title={a.title}
           sname={a.sname}
           link={a.links}
        />
     );
}*/


/*function App2() {
    return (
  <>
    <h1 className="heading_style"> List of Top 5 Series </h1>
      
 {Sdata.map(funcard)}

      {Sdata.map(function funcard(a) {
  console.log(a);
    return (
       <Card
           imgsrc={a.imgsrc}
           title={a.title}
           sname={a.sname}
           link={a.links}
        />
     );
})}

   <Card
      imgsrc={Sdata[0].imgsrc} 
      title={Sdata[0].title} 
      sname={Sdata[0].sname} 
      link={Sdata[0].link} 
   />

  <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
   />
 </>
 );
}*/

const Series = "netflix";

const Fav = () => {
  if(Series === "Amazon") 
    {
      return <Netflix />
} else {
    return (
         <Card
            key={Sdata[2].id}
            imgsrc={Sdata[2].imgsrc}
           title={Sdata[2].title}
            sname={Sdata[2].sname}
            link={Sdata[2].links}
        />
     );
 }
};

const App2 = () =>
  <>
    <h1 className="heading_style"> List of Top 5 Series </h1>
        
    <Fav />

/* {Sdata.map((a, index) => {
  console.log(index);
    return (
       <Card
            key={a.id}
           imgsrc={a.imgsrc}
           title={a.title}
           sname={a.sname}
           link={a.links}
        />
     );
})}*/

   <Card
      imgsrc={Sdata[0].imgsrc} 
      title={Sdata[0].title} 
      sname={Sdata[0].sname} 
      link={Sdata[0].link} 
   />

  <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
   />
 </>

export default App2;