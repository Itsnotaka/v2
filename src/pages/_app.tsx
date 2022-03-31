import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Provider from '../components/Provider';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider>
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} />
			</AnimatePresence>
		</Provider>
	);
}

export default MyApp;
