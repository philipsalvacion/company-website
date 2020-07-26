import React from 'react';
import MainNavbar from '../../Components/Navbar/Navbar.js';
import Header from '../../Components/Header/Header.js';
import About from '../../Components/About/About.js';

class Home extends React.Component {
	render(){
		return(
			<div>
				<MainNavbar />
				<Header />
				<About />
			</div>
		);
	}
}

export default Home;
