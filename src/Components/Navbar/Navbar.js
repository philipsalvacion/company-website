import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

import ScrollspyNav from "react-scrollspy-nav";

// Custom css
import '../../Assets/CSS/colorPalette.css';
import './Navbar.css';

const MainNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar className="brown-onscroll" fixed="top" light expand="md">
			<NavbarBrand className="montserrat-bold"><span className="milk-chocolate coffee">Coffee</span> <span className="dark-gold shop">Shop</span></NavbarBrand>
			<NavbarToggler style={{ color: "blue" }} onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<ScrollspyNav
						scrollTargetIds={["Home", "About", "Contact"]}
						offset={0}
						activeNavClass="is-active"
						scrollDuration="800"
						headerBackground="true"
					>
						<Nav className="mr-auto navbar-transparent" navbar pills>
							<NavItem>
								<NavLink className="navlink home" href="#Home">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navlink" href="#About">About Us</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="navlink" href="#Contact">Contact</NavLink>
							</NavItem>
						</Nav>
					</ScrollspyNav>
					{/* <NavbarText>Products</NavbarText> */}
				</Collapse>
			</Navbar>
		</div>
);
}

export default MainNavbar;
