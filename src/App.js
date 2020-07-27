import React from 'react';
import Home from './Pages/Home/Home.js';

class app extends React.Component {
	componentDidMount(){
		alert("This is still under development");
	}
	render(){
		return(
			<div>
				<Home />
			</div>
		);
	}
}

export default app;
