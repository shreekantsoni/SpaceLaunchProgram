import React from 'react';
import axios from 'axios';
import './Api.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// URL = "https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true"; 
URL = "https://api.spacexdata.com/v3/launches?limit=100"; 

class Api extends React.Component {
state = { 
post: [],
allPosts: []
};
componentDidMount() {
axios
.get(URL, {
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
})
.then(({ data }) => {
this.setState({
post: data,
allPosts: data // array data from JSON stored in these
});
})
.catch(err => {});
}
_onKeyUp = e => {
// filter post list by title using onKeyUp function
const post = this.state.allPosts.filter(item =>
item.mission_name.toLowerCase().includes(e.target.value.toLowerCase())
);
this.setState({ post });
};
_filterByYear = year => {
const post = this.state.allPosts.filter(item =>
item.launch_year === year
);
this.setState({ post });
}

_filterByLaunch = launch => {
	const post = this.state.allPosts.filter(item =>
	item.launch_success === launch
	);
	this.setState({ post });
	}

	_filterByLanding = landing => {
		const post = this.state.allPosts.filter(item =>
		item.launch_landing === landing
		);
		this.setState({ post });
		}
render() {
return (
<div className="container-fluid">

 <header>
  <h2>SpaceXLaunchPrograms</h2>
 </header>
 <section>
        <nav>
			
	
    <ul>
	
	  <h1>Filters</h1>
    <p><u>Launch Year</u></p>
	
	  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <button class="btn btn-success m-1"  onClick={() => this._filterByYear('2006')}>2006</button>
    <button class="btn btn-success"  onClick={() => this._filterByYear('2007')}>2007</button>
    
  </div>
  </div>
  
  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <button class="btn btn-success m-1"  onClick={() => this._filterByYear('2008')}>2008</button>
    <button class="btn btn-success"  onClick={() => this._filterByYear('2009')}>2009</button>
    
  </div>
  </div>
  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <button class="btn btn-success m-1"  onClick={() => this._filterByYear('2010')}>2010</button>
    <button class="btn btn-success"  onClick={() => this._filterByYear('2011')}>2011</button>
    
  </div>
  </div>
  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <button class="btn btn-success m-1"  onClick={() => this._filterByYear('2012')}>2012</button>
    <button class="btn btn-success"  onClick={() => this._filterByYear('2013')}>2013</button>
    
  </div>
  </div>
  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <button class="btn btn-success m-1"  onClick={() => this._filterByYear('2014')}>2014</button>
    <button class="btn btn-success"  onClick={() => this._filterByYear('2015')}>2015</button>
    
  </div>
  </div>
  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <button class="btn btn-success m-1"  onClick={() => this._filterByYear('2016')}>2016</button>
    <button class="btn btn-success"  onClick={() => this._filterByYear('2017')}>2017</button>
    
  </div>
  </div>
  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <button class="btn btn-success m-1"  onClick={() => this._filterByYear('2018')}>2018</button>
    <button class="btn btn-success"  onClick={() => this._filterByYear('2019')}>2019</button>
    
  </div>
  </div>
  <div class="w3-show-inline-block">
  <div class="w3-bar">
    <button class="btn btn-success m-1"  onClick={() => this._filterByYear('2020')}>2020</button>
    
    
  </div>
  </div>
  <br/>
  <p><u>Successful Launch</u></p>
    
	  <div class="w3-show-inline-block">
  <div class="w3-bar">
  <button class="btn btn-success m-1"  onClick={() => this._filterByLaunch(true)}>true</button>
  <button class="btn btn-success"  onClick={() => this._filterByLaunch(false)}>false</button>
    
    
  </div>
  </div>
  <br/>
  <p><u>Successful Landing</u></p>
    
	  <div class="w3-show-inline-block">
  <div class="w3-bar">
  <button class="btn btn-success m-1"  >true</button>
  <button class="btn btn-success"  >false</button>
    
  </div>
  </div>
       </ul>
  </nav>
           <article>
		   <ul className="data-list">
{/* post items mapped in a list linked to onKeyUp function */}
{this.state.post.map((item, index) => (
<li className={"block-" + index}>
<div className="title">
<img src={item.links.mission_patch_small} alt="Images"/>
<h3>{item.mission_name}</h3>
<h5>Mission Ids: {item.mission_id.length === 0 ? "0" : item.mission_id.map((id, index) => <span key={index}>{ (index ? ', ' : '') + id }</span>)}</h5>
<h5>Launch Year: {item.launch_year}</h5>
<h5>Successful Launch: {item.launch_success ? "True" : "False"}</h5>
<h5>Successful Landing: {item.launch_landing ? "launch_landing" : "launch_landing"}</h5>
</div>
</li>
))}
</ul> </article>
</section>
        


</div>
);
}
}
export default Api;