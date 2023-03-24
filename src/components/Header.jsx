import React from 'react';
import { Text, css, Button, Container, Row, Grid } from '@nextui-org/react';
import styles from '.././styles/Header.module.css';

function Header() {
	return (
		<div className={styles.container}>
			<Text b css={{ fontSize: '48px' }} justify="center">
				IT’S EASY TO GET STARTED
			</Text>

			<Text r css={{ fontSize: '24px' }} justify="center">
				choose a plan tailored to your needs
			</Text>

			<Button.Group className={styles.btns}>
				<Button
					auto
					css={{
						background: 'transparent',
						color: 'white',
						height: '53px',
						border: '1px solid white',
						borderRight: 'none',
					}}
				>
					Montly
				</Button>

				<Button
					auto
					css={{
						background: 'white',
						color: 'black',
						height: '53px',
						border: '2px solid white',
						borderLeft: 'none',
					}}
				>
					Montly
				</Button>
			</Button.Group>
			<div className={styles.saves}>
				<Text
					css={{
						fontWeight: '200',
					}}
				>
					(save 20%)
				</Text>
			</div>
		</div>
	);
}

export default Header;
