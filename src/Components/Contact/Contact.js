import React from 'react';

// Bootstrap components
import { Col, Row, Container } from 'reactstrap';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// React Icons
import { Telephone, Envelope, ShopWindow } from 'react-bootstrap-icons'

// Custom CSS
import '../../Assets/CSS/colorPalette.css';
import './Contact.css';

class Contact extends React.Component {
	render() {
		return(
			<Container>
				<Row xs="12">
					<Col sm="4" xs="12" className="milk-chocolate social-links">
						<h2 className="montserrat-bold">@coffeeshop</h2>
						<div>
							<FontAwesomeIcon icon={faFacebook} size="3x" fixedWidth />
							<FontAwesomeIcon icon={faInstagram} size="3x" fixedWidth />
							<FontAwesomeIcon icon={faTwitter} size="3x" fixedWidth />
						</div>
					</Col>
					<Col sm="8" xs="12" className="border-vertical center-header">
						<h3 className="montserrat-bold">Contact Us</h3>
						<h6>For inquiries, order and reservations:</h6>
						<Row xs="12" className="contact">
							<Col sm="6" xs="12" className="padding-left">
								<p><Telephone className="milk-chocolate" size={20} /> +63915-713-7745</p>
								<p><Envelope className="milk-chocolate" size={20} /> philipsalvacion65@gmail.com</p>
							</Col>
							<Col sm="6" xs="12" className="padding-left">
								<p><ShopWindow className="milk-chocolate" size={20} /> Molino 4, Bacoor, Cavite</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>

		);
	}
}

export default Contact;
