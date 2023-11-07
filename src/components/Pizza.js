import React from 'react';

const Pizza = ({ pizzaObj }) => {
	const { name, ingredients, photoName: imageSrc, price, soldOut } = pizzaObj;
	return (
		<div className={`pizza ${soldOut ? 'sold-out' : ''}`}>
			<div>
				<img src={imageSrc} alt={name} />
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>${price}</span>
			</div>
		</div>
	);
};

export default Pizza;
