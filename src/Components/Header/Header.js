import React from 'react';

import './Header.css';
import CoffeeLogo from '../../Assets/coffee-logo.png';

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
					<div class="container" style={paddingAround}>
						<img src={CoffeeLogo} style={imageStyle} alt="Coffee logo" />
						<h1 class="h1-seo">Coffee Shop</h1>
							<h3>
								A coffee shop sample design using React JS and Boostrap 4!
							</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
