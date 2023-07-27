import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Navbar />

			<div className='content'>
				<span>{children}</span>
			</div>

			<footer>
				<p>@Copyright 2023 Developer</p>
			</footer>
		</div>
	);
};

export default Layout;
