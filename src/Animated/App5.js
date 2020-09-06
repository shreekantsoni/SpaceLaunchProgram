import React from 'react';
import './Aminate.css';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'; // BrowserRouter as AnyName
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "../footer";
import Error from '../Router/Error';

const App5 = () => {
  return <>
		<BrowserRouter>  
		  <Navbar />
           <Switch>
			  <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/Service" component={Service} />
              <Route exact path="/Contact" component={Contact} />
              {/*<Route component={Error} />*/}
              <Redirect to="/" />
		   </Switch>

		</BrowserRouter>
		 <br />
		<Footer />
    </>
};
export default App5;
