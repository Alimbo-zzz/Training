import React from 'react';
import cls from './style.module.scss'

function Button({ styleType = 'base', fontSize = null, children, ...props }) {


	return (<>
		<button
			{...props}
			className={cls.btn}
			data-style={styleType}
			style={{ fontSize }}
		>
			{children}
		</button>
	</>);
}

export default Button;