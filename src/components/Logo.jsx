import React from 'react';
import tasksLogo from '../images/to_do.png';

const Logo = () => {
	return (
		<div className='logo-contenedor'>
			<img src={tasksLogo} className='logo' alt='logo de tareas' />
		</div>
	);
};

export default Logo;
