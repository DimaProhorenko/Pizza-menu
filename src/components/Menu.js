import React from 'react';
import Pizza from './Pizza';
import data from '../data';

const Menu = () => {
	return (
		<div className="menu">
			<h2>Our Menu</h2>
			<div className="pizzas">
				{data.map((el) => {
					return (
						<Pizza
							key={el.id}
							name={el.name}
							ingredients={el.ingredients}
							imageSrc={el.photoName}
							price={el.price}
							soldOut={el.soldOut}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
