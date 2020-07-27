import React from 'react';

// Bootstrap components
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

// Icons
import { Shop, People } from 'react-bootstrap-icons';

// Image URLs
import image1 from '../../Assets/Card-Image/image1.jpg';
import image2 from '../../Assets/Card-Image/image2.jpg';
import image3 from '../../Assets/Card-Image/image3.png';
import image4 from '../../Assets/Card-Image/image4.jpg';
import profileImage from '../../Assets/Card-Image/profileimg.png';
import image6 from '../../Assets/Card-Image/image6.jpg';

// Custom CSS
import './About.css';
import '../../Assets/CSS/colorPalette.css';

const paddingSM = {
	padding: "3%"
}

const borderColor = {
	border: "1px solid #DACFBF"
}


class About extends React.Component {
	render() {
		return (
			<div>
				<Container style={paddingSM}>
					<Row xs="12" className="center-text">

						<Col sm="4" xs="3">
							<hr />
						</Col>
						<Col sm="4" xs="6">
							<h3>About Us</h3>
						</Col>
						<Col sm="4" xs="3">
							<hr />
						</Col>
					</Row>
					<Row xs="12" className="margin-bottom">
						<Col sm="12"  className="justify-text" style={{padding: "2% 4% 0% 4%"}}>
							<Shop className="milk-chocolate" size={25}/>
							<h3 className="montserrat-bold" style={{marginLeft: "1%"}}>Product and Service</h3>
						</Col>
					</Row>
					<Row xs="12">
						<Col sm="12" className="justify-text" style={{padding: "0% 10% 0%", marginBottom: "3%"}}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, mauris eget rutrum porttitor, nibh diam aliquam nibh, a pellentesque eros nibh ut turpis. Maecenas eget sagittis sem. Fusce mauris arcu, lacinia sit amet malesuada id, laoreet vel diam. Suspendisse sit amet sapien ante. Maecenas ullamcorper nunc augue, in efficitur mauris volutpat id.
							</p>
						</Col>
					</Row>

					{/* Cards */}
					<Row xs="4" className="center-text margin-bottom">
						{/* Card 1 */}
						<Col sm="3" xs="12">
							<Card style={borderColor} className="card-margin-bottom">
				        <CardImg top width="100%" src={image1} alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Card Title</CardTitle>
					          <CardText>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, mauris eget rutrum porttitor, nibh diam aliquam nibh, a pellentesque eros nibh ut turpis.
										</CardText>
					          <CardText>
					            <small className="text-muted">Last updated 3 mins ago</small>
					          </CardText>
				        </CardBody>
				      </Card>
						</Col>
						<Col sm="3" xs="12">
							{/* Card 2 */}
							<Card style={borderColor} className="card-margin-bottom">
				        <CardImg top width="100%" src={image2} alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Card Title</CardTitle>
									<CardText>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, mauris eget rutrum porttitor, nibh diam aliquam nibh, a pellentesque eros nibh ut turpis.
									</CardText>
				          <CardText>
				            <small className="text-muted">Last updated 3 mins ago</small>
				          </CardText>
				        </CardBody>
				      </Card>
						</Col>
						<Col sm="3" xs="12">
							{/* Card 3 */}
							<Card style={borderColor} className="card-margin-bottom">
				        <CardImg top width="100%" src={image3} alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Card Title</CardTitle>
									<CardText>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, mauris eget rutrum porttitor, nibh diam aliquam nibh, a pellentesque eros nibh ut turpis.
									</CardText>
				          <CardText>
				            <small className="text-muted">Last updated 3 mins ago</small>
				          </CardText>
				        </CardBody>
				      </Card>
						</Col>
						<Col sm="3" xs="12">
							{/* Card 4 */}
							<Card style={borderColor} className="card-margin-bottom">
				        <CardImg top width="100%" src={image4} alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Card Title</CardTitle>
									<CardText>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, mauris eget rutrum porttitor, nibh diam aliquam nibh, a pellentesque eros nibh ut turpis.
									</CardText>
				          <CardText>
				            <small className="text-muted">Last updated 3 mins ago</small>
				          </CardText>
				        </CardBody>
				      </Card>
						</Col>
					</Row>

					<Row xs="12" className="margin-bottom">
						<Col sm="12"  className="justify-text" style={{padding: "2% 4% 0% 4%"}}>
							<People className="milk-chocolate" size={25}/>
							<h3 className="montserrat-bold" style={{marginLeft: "1%"}}>Owner and staffs</h3>
						</Col>
					</Row>
					<Row xs="12">
						<Col sm="12" style={{padding: "0% 10% 0%", textAlign: "left", marginBottom: "3%"}}>
							<Row xs="12">
								<Col className="center-text" sm="3" xs="12">
									<img className="squareImg" src={profileImage} alt="John Doe" />
								</Col>
								<Col sm="9" xs="12" className="owner">
									<h4 className="montserrat-bold" style={{marginBottom: "0%"}}>John Doe</h4>
									<i>Coffee shop owner</i>
									<p style={{marginTop: "3%"}}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, mauris eget rutrum porttitor, nibh diam aliquam nibh, a pellentesque eros nibh ut turpis. Maecenas eget sagittis sem. Fusce mauris arcu, lacinia sit amet malesuada id, laoreet vel diam.
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row xs="12">
						<Col sm="12" style={{padding: "0% 10% 0%", textAlign: "left", marginBottom: "3%"}}>
							<Row xs="12">
								<Col className="center-text" sm="3" xs="12">
									<img className="squareImg" src={image6} alt="John Doe" />
								</Col>
								<Col sm="9" xs="12" className="owner">
									<h4 className="montserrat-bold" style={{marginBottom: "0%"}}>Joanah Doe</h4>
								<i>Barista</i>
									<p style={{marginTop: "3%"}}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, mauris eget rutrum porttitor, nibh diam aliquam nibh, a pellentesque eros nibh ut turpis. Maecenas eget sagittis sem. Fusce mauris arcu, lacinia sit amet malesuada id, laoreet vel diam.
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default About;
