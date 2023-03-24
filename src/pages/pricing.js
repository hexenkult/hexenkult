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
import Pricing from '../components/Pricing';

function payment() {
	return (
		<div>
			<Navbar />

			<Spacer y={5} />
			<Header />

			<Spacer y={2} />

			<Pricing />
		</div>
	);
}

export default payment;
