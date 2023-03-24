import React from 'react';
import styles from '../styles/Card.module.css';
import { Card, Grid, Text, Row } from '@nextui-org/react';
import Button from './Button';

function mCard(props) {
	const list = [
		{
			title: 'Orange',
			img: '/images/fruit-1.jpeg',
			price: '$5.50',
		},
		{
			title: 'Tangerine',
			img: '/images/fruit-2.jpeg',
			price: '$3.00',
		},
		{
			title: 'Cherry',
			img: '/images/fruit-3.jpeg',
			price: '$10.00',
		},
	];

	return (
		<>
			<Grid.Container gap={2}>
				<Grid sm={12} md={5}>
					<Card css={{ mw: '330px' }}>
						<Card.Header>
							<Text b>{props.planName}</Text>
						</Card.Header>
						<Card.Body css={{ py: '$10' }}>
							<Text justify="">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Text>
						</Card.Body>

						<Card.Footer>
							<Row justify="center">
								<Button btnTitle="Get Started" />
							</Row>
						</Card.Footer>
					</Card>
				</Grid>
			</Grid.Container>
		</>
	);
}

export default mCard;
