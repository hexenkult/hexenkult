import { Card, Header, Navbar } from '../components/';
import {
	Grid,
	Text,
	Row,
	Button,
	Spacer,
	Col,
	Container,
} from '@nextui-org/react';
import React from 'react';
import styles from '.././styles/Card.module.css';
function Pricing() {
	return (
		<div>
			<Container gap={0}>
				<Row gap={1}>
					<Grid.Container gap={2} justify="center">
						<Grid md={10} xs={6}>
							<Col>
								<Card
									planName="Basic"
									value="$7.99"
									bgColor="#0F0F0F"
									buttonColor="transparent"
									textColor="white"
									buttonBorder="4px solid white"
									option1="Start Messaging"
									option2="Flexible Team Meetings"
									option3="2TB Cloud Storage"
								/>
							</Col>

							<Col>
								<Card
									planName="Startup"
									value="$14.99"
									bgColor="#0F0F0F"
									buttonColor="white"
									textColor="black"
									buttonBorder="transparent"
									border="4px solid white"
									option1="All features in Basic"
									option2="Flexible Call Scheduling"
									option3="15 TB Cloud Storage"
								/>
							</Col>

							<Col>
								<Card
									planName="Enterprise"
									value="$25.99"
									bgColor="#0F0F0F"
									buttonColor="transparent"
									textColor="white"
									buttonBorder="4px solid white"
									option1="All features in Startup"
									option2="Growth Oriented"
									option3="Unlimited Cloud Storage"
								/>
							</Col>
						</Grid>
					</Grid.Container>
				</Row>
			</Container>
		</div>
	);
}

export default Pricing;
