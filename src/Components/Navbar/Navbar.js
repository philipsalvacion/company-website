import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText
} from 'reactstrap';

// Custom css
import '../../Assets/CSS/colorPalette.css';

const MainNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar light expand="md">
				<NavbarBrand className="montserrat-bold" href="/"><span className="milk-chocolate">Coffee</span> <span className="dark-gold">Shop</span></NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto navbar-transparent" navbar pills>
							<NavItem>
								<NavLink href="/components/">About Us</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
							</NavItem>
					</Nav>
					<NavbarText>Products</NavbarText>
				</Collapse>
			</Navbar>
		</div>
);
}

export default MainNavbar;
