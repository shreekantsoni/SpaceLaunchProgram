import React from 'react' ;
import ReactDOM from 'react-dom' ;
import './Demo.css';
import DemoList from './DemoList';
import NewGoal from './NewGoal';

import 'tachyons';
  
/*class Demo extends React.Component
  {
  	render() {
  		return <div className="c1">
  		         <h1> Hello {this.props.name} </h1>
  		         <p> hbru  jdnrj  klnrg jirdb </p>
               </div>
  	}
  }*/

 /*const Demo = ({name}) =>
  {
  	return <div className="c1">
  		         <h1> Hello {name} </h1>
  		         <p> hbru  jdnrj  klnrg jirdb </p>
             </div>
  }*/

  function Demo(props) { 

 const DemoListArr = [
     {
        id:1,
        name:"Sandeep",
        work:"webSeries"
    },
    {
        id:2,
        name:"Shree",
        work:"siteweb"
    },
    {
        id:3,
        name:"Srashti",
        work:"website"
    },
    {
        id:4,
        name:"Soumin",
        work:"sitewebs"
    }
 ]

 const arr2 = DemoListArr.map((a, i) =>  {
    return <DemoList key={i} id={DemoListArr[i].id} name={DemoListArr[i].name} work={DemoListArr[i].work} />
 })

 /*const goalhandler = (newgoal) => {
  DemoListArr.push(newgoal);
  console.log(DemoListArr);
 };*/

  return (
    <div className="tc">
      <h1> Welcome  </h1>
              {arr2}
      <NewGoal />

      </div>
  );
}

  export default Demo ;


 