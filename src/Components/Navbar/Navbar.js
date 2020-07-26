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

const MainNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Coffee Shop</NavbarBrand>
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
