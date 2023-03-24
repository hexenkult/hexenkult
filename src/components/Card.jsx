import React from 'react';
import styles from '../styles/Card.module.css';
import { Card, Text, Row, css, Button, Checkbox } from '@nextui-org/react';

function mCard(props) {
	return (
		<>
			<Card
				css={{
					background: `${props.bgColor}`,
					border: `${props.border}`,
					mw: '390px',
					height: '400px',
					mh: '450px',
					width: '266px',
				}}
			>
				<Card.Header>
					<Text b size="$md">
						{props.planName}
					</Text>
				</Card.Header>

				<Card.Body css={{ py: '$10' }}>
					<Text b justify="flex-start" size="$3xl" css={{ marginTop: '-30px' }}>
						{props.value} <span className={styles.span}>/ month</span>
					</Text>
					<Card.Divider css={{ bgColor: 'white', marginTop: '10px' }} />
					<div>
						<Checkbox.Group color="secondary" className={styles.list}>
							<Checkbox value="buenos-aires" className={styles.text}>
								<Text size="$md">{props.option1}</Text>
							</Checkbox>
							<Checkbox value="sydney" className={styles.text}>
								<Text size="$md">{props.option2}</Text>
							</Checkbox>
							<Checkbox value="london" className={styles.text}>
								<Text size="$md">{props.option3}</Text>
							</Checkbox>
						</Checkbox.Group>
					</div>
				</Card.Body>
				<div className={styles.btn}>
					<Button
						variant="flat"
						isHoverable
						css={{
							background: `${props.buttonColor}`,
							color: `${props.textColor}`,
							width: '158px',
							height: '50px',
							border: `${props.buttonBorder}`,
						}}
					>
						Get Started
					</Button>
				</div>
			</Card>
		</>
	);
}

export default mCard;
