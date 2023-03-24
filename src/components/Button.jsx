import styles from '../styles/Button.module.css';
import React from 'react';
import { Button } from '@nextui-org/react';

function mButton(props) {
	return (
		<>
			<Button>{props.title}</Button>
		</>
	);
}

export default mButton;
