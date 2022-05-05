import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Sidebar from './Sidebar';
import bg from '../images/restaurant-1.png';

const Hero = ({ id }) => {
	const [show, setShow] = useState(false);
	const toggle = () => {
		setShow(!show);
	};

	return (
		<div className="container" id={id} style={{ backgroundImage:`url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', marginTop: '-5em' }}>
			<Navbar toggle={toggle}></Navbar>
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">Yummy and Tasteful Desserts</h1>
					<p>
						A Special and Unique Delight for Decades Now. Featuring our renowned Skandy Dessertz 
						Ice Creams and our Cakes&#8605; Full Menu offered all Day and late Night. Full Bar with
						Entertainment on Weekends. 
					</p>
					<div className="btn">Book Now</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
