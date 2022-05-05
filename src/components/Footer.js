import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter  } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ id }) => {
	return (
		<>
			<div className="footerContainer" id={id}>
				<div className="footerColumnH">
					<h2>Follow Us</h2>
					<div><FiFacebook /></div>
					<div><FiInstagram /></div>
					<div><FiLinkedin /></div>
					<div><FiTwitter /></div>
				</div>
				<div className="footerColumn">
					<br />
					<h2>About Us&#8620;</h2>
					<h2>Contact Us&#8620;</h2>
					<h2>Careers&#8620;</h2>
				</div>
				<div className="footerColumnH">
					<h2>Location</h2>
					<h3>Norway</h3>
					<h3>Netherland</h3>
				</div>
			</div>
			<div className="copyright">&copy;2022&nbsp;&nbsp;All Rights Reserved.</div>
		</>
	);
};

export default Footer;
