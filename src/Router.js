import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // BrowserRouter as AnyName
import Index from './Router/Index';
import Contac from './Router/Contac';
import Navbar from './Router/Navbar';

const Router = () => {
  return <>
		<BrowserRouter> 
           <Switch>
			  <Route exact path="/" component={Index} />
			  <Route path="/contact" component={Contac} />
			  <Route path="/navbar" component={Navbar} />
			</Switch>

		 {  /*<Index />
		   <Contac />
		   <Navbar /> */}
		</BrowserRouter>
    </>
};
export default Router;