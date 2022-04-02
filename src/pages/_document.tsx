import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="keywords"
						content="daniel, min chun fu, design, react, nextjs, typescript"
					/>
					<meta name="twitter:site" content="@gem8160" />
					<meta name="twitter:creator" content="@gem8160" />
					<meta name="twitter:card" content="summary_large_image" />
					{/* <link rel="shortcut icon" href="/favicon-light.png" /> */}
					<meta name="robots" content="index,follow" />
					<meta name="googlebot" content="index,follow" />
					<meta
						name="description"
						content=" A developer/student/designer from Taiwan."
					/>
					<meta property="og:url" content="https://kakaka.dev" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Min Chun Fu" />
					<meta
						property="og:description"
						content=" A developer/student/designer from Taiwan."
					/>
					{/* <meta property="og:image" content="https://rauno.me/og.png" /> */}
					<body>
						<Main />
						<NextScript />
					</body>
				</Head>
			</Html>
		);
	}
}

export default MyDocument;
