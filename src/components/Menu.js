import React from 'react';
import Pizza from './Pizza';
import data from '../data';

const Menu = () => {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{data.length > 0 && (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose
						from. All from our stone oven, all organic, all
						delicious.
					</p>
					<ul className="pizzas">
						{data.map((el) => {
							return <Pizza key={el.id} pizzaObj={el} />;
						})}
					</ul>
				</>
			)}
		</main>
	);
};

export default Menu;
