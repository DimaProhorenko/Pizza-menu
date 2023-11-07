import React from 'react';

const Order = ({ isOpen, closeHour }) => {
	return (
		<div className="order">
			<p>
				{isOpen ? (
					<button className="btn">Order</button>
				) : (
					`Unfortunately we are closed. We are open until ${closeHour}:00`
				)}
			</p>
		</div>
	);
};

export default Order;
