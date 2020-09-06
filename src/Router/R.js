import React from 'react';
import './style.css';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'; // BrowserRouter as AnyName
import Index from './Index';
import Contac from './Contac';
import Navbar from './Navbar';
import Search from './Search';
import Error from './Error';

const R = () => {
  return <>
		<BrowserRouter> 
		  <Navbar />
           <Switch>
			  <Route exact path="/" component={Index} />
			  <Route path="/contact" component={Contac} />
			  <Route exact path="/search" component={Search} />
			  <Route component={Error} />
			  {/*<Redirect to="/" />   // By default it will go Index page when type anythings in URL*/  }
			</Switch>

		 {  /*<Index />
		   <Contac />
		   <Navbar /> */}
		</BrowserRouter>
    </>
};
export default R;