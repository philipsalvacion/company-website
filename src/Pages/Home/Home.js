import React from 'react';
import MainNavbar from '../../Components/Navbar/Navbar.js';
import Header from '../../Components/Header/Header.js';
import About from '../../Components/About/About.js';
import Contact from '../../Components/Contact/Contact.js';

class Home extends React.Component {
	render(){
		return(
			<div>
				<MainNavbar />
				<Header />
				<About />
				<Contact />
			</div>
		);
	}
}

export default Home;
