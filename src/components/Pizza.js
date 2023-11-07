import React from 'react';

const Pizza = ({ name, ingredients, imageSrc, soldOut }) => {
	return (
		<div className={`pizza ${soldOut ? 'sold-out' : ''}`}>
			<div>
				<img src={imageSrc} alt={name} />
				<h3>{name}</h3>
				<p>{ingredients}</p>
			</div>
		</div>
	);
};

export default Pizza;
