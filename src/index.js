import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App2 from './App2';
//import App3 from './App3';
//import SForm from './SForm';
//import Todo from './todo';
//import NoteApp from './NoteApp';
import Api from './Api';
//import UseEffect from './UseEffect';
//import Router from './Router';
//import R from './Router/R'
//import App5 from './Animated/App5'
//import SForm2 from './SForm2';
// import HandelEvent from './HandelEvent';
//import Demo from './Demo' ;
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Api/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



