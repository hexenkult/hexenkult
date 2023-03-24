import styles from '../styles/Button.module.css';
import React from 'react';
import { Button } from '@nextui-org/react';
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({});

function mButton() {
	return (
		<div>
			<Button theme={theme.colors.primary}>Get Started</Button>
		</div>
	);
}

export default mButton;
