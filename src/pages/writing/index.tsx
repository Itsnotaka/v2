import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Container from '../../components/Container';

const Writings: NextPage = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Writing — Daniel Fu</title>
			</Head>
			<Container>
				<article className="prose-p:whitespace-wrap prose pb-16 prose-h1:font-mono prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-hr:mt-3 prose-hr:h-1 prose-hr:w-full prose-hr:border-dotted dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					<h1>Writing</h1>
					<hr />
				</article>
			</Container>
		</>
	);
};

export default Writings;
