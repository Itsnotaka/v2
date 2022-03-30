import Inspect from 'inspx';
import { ThemeProvider } from 'next-themes';
import { JSXElementConstructor, ReactElement } from 'react';

export default function Provider({
	children,
}: {
	children:
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactElement<any, string | JSXElementConstructor<any>>[];
}) {
	return (
		<Inspect disabled={process.env.NODE_ENV === 'production'}>
			<ThemeProvider attribute="class">{children}</ThemeProvider>
		</Inspect>
	);
}
