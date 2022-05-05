import React from 'react';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';
import favorite from '../images/favourite.jpg';

const Favorite = ({ id }) => {
	return (
		<div className="favContainer" id={id}>
			<h2>Our Favorite</h2>

			<div className="favContent">
				<Slide left>
					<img src={favorite} className="favImage" alt="cake" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<p>
							This cake depicts all the classic strawberry combinations.
							Strawberries, cream and spice with a zip of balsamic, more like 
							"best sellers of any type", but way more delicious!
						</p>
					</div>
				</Slide>
			</div>
			<button className="favBtn">Order Now</button>
		</div>
	);
};

export default Favorite;
