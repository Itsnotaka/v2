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
					<link
						rel="icon"
						href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>"
					/>💫
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
