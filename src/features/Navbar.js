import { Link } from 'gatsby';
import React from 'react';

const Navbar = function () {
	return (
		<nav>
			<h1>Ninja webb Warrior</h1>
			<div className='links'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/project'>Project</Link>
				<Link to='/contact'>Contact</Link>
			</div>
		</nav>
	);
};

export default Navbar;
