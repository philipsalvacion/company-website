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

const MainNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar className="brown-onscroll" fixed="top" light expand="md">
				<ScrollspyNav

					scrollTargetIds={["Home", "About", "Contact"]}
					offset={0}
					activeNavClass="is-active"
					scrollDuration="1000"
					headerBackground="true"
				>
				<div style={{display: "inline-flex"}}>
				<NavbarBrand className="montserrat-bold" href="#Home"><span className="milk-chocolate coffee">Coffee</span> <span className="dark-gold shop">Shop</span></NavbarBrand>
			<NavbarToggler style={{ color: "blue" }} onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>

						<Nav className="mr-auto navbar-transparent" navbar pills>

								<NavItem>
									<NavLink className="navlink" href="#About">About Us</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="navlink" href="#Contact">Contact</NavLink>
								</NavItem>

						</Nav>

					{/* <NavbarText>Products</NavbarText> */}
				</Collapse>
				</div>
				</ScrollspyNav>
			</Navbar>
		</div>
);
}

export default MainNavbar;
