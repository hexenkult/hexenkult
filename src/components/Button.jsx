import styles from '../styles/Button.module.css';
import React from 'react';
import { Button, css } from '@nextui-org/react';

function mButton(props) {
	return (
		<>
			<Button
				css={{
					background: 'white',
					color: 'black',
					width: '158px',
					height: '55px',
					borderRadius: '8px',
				}}
			>
				{props.btnTitle}
			</Button>
		</>
	);
}

export default mButton;
