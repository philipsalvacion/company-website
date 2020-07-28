import React from 'react';

import './Header.css';
import '../../Assets/CSS/colorPalette.css';
import CoffeeLogo from '../../Assets/coffee-logo.png';

import { Code } from 'react-bootstrap-icons';
// const background = {
// 	background: "linear-gradient(to bottom, rgba(33, 37, 41, 0.5) 0%, rgba(33, 37, 41, 0.5) 100%)",
// 	backgroundSize: "cover",
// 	backgroundRepeat: "no-repeat"
// }

const imageStyle = {
	display: "block",
	marginLeft: "auto",
	marginRight: "auto",
	width: "auto",
	maxWidth: "90%",
	minWidth: "30%",
	height: "290px"
}

const paddingAround = {
	padding: "5%"
}

class Header extends React.Component {
	render(){
		return (
			<div class="page-header">
				<div class="page-header-image">
					<div class="container sm-padding-top" style={paddingAround}>
						<img src={CoffeeLogo} style={imageStyle} alt="Coffee logo" />
						<h1 class="h1-seo montserrat-bold"><span className="milk-chocolate">Coffee</span> <span className="dark-gold">Shop</span></h1>
							<h3>
								A coffee shop sample design using React JS and Bootstrap 4!
							</h3>
					</div>
				</div>
				<div className="center-text">
					<h6>Designed and Coded by <Code size={30} style={{fontWeight: "150%"}} /> Philip Salvacion</h6>
				</div>
			</div>
		);
	}
}

export default Header;
