import '@/styles/globals.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
	type: 'dark', // it could be "light" or "dark"
	theme: {
		colors: {
			primary: '#FFF',
			secondary: '#F9CB80',
			error: '#FCC5D8',
		},
	},
});

export default function App({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}
