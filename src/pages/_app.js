import '@/styles/globals.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
	type: 'dark', // it could be "light" or "dark"
});

export default function App({ Component, pageProps }) {
	return (
		<NextUIProvider theme={theme}>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}
