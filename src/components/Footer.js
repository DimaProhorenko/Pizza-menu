/* eslint-disable no-unused-vars */
import React from 'react';
import Order from './Order';

const Footer = () => {
	const currentHour = new Date().getHours();
	const openHour = 9;
	const closeHour = 22;
	const isOpen = currentHour >= openHour && currentHour < closeHour;

	return (
		<footer className="footer">
			<Order isOpen closeHour />
		</footer>
	);
};

export default Footer;
