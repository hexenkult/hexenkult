import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Button, Text, Navbar, Link } from '@nextui-org/react';

function mNavbar() {
	return (
		<div className={styles.parent}>
			<Navbar isBordered className={styles.container} variant={'sticky'}>
				<Navbar.Brand>
					<img src="/logo.png" alt="hexenkult logo" />
				</Navbar.Brand>
				<Navbar.Content hideIn="xs">
					<Navbar.Link href="#">Home</Navbar.Link>
					<Navbar.Link isActive activeColor={'secondary'} href="#">
						Pricing
					</Navbar.Link>
					<Navbar.Link href="#">Blog</Navbar.Link>
					<Navbar.Link href="#">About Us</Navbar.Link>
				</Navbar.Content>
				<Navbar.Content>
					<Navbar.Link color="inherit" href="#">
						login
					</Navbar.Link>

					<Navbar.Item>
						<Button
							auto
							flat
							as={Link}
							href="#"
							css={{
								background: 'white',
								color: 'black',
								width: '158px',
								height: '45px',
								border: '4px solid white',
							}}
						>
							Get Free Access
						</Button>
					</Navbar.Item>
				</Navbar.Content>
			</Navbar>
		</div>
	);
}

export default mNavbar;
