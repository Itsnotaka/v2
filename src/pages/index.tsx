import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Container from '../components/Container';
import Typist from 'react-typist';

const Home: NextPage = () => {
	const texts = ['student', 'developer', 'designer'];
	const [currentTextCounter, setCurrentTextCounter] = useState(0);

	useEffect(() => {
		// creating a timer to rotate the text every 3 seconds
		const timer = setInterval(() => {
			setCurrentTextCounter((currentTextCounter + 1) % texts.length);
		}, 5000);

		return () => clearInterval(timer);
	}, [currentTextCounter, texts.length]);

	return (
		<>
			<title>Daniel Fu</title>
			<Container>
				<article className="prose prose-h1:text-2xl prose-h1:font-semibold dark:text-primary-250 prose-h1:dark:text-primary-250">
					<h1 className="font-mono">Min Chun Fu</h1>
					<p className="flex whitespace-pre-wrap">
						— A{' '}
						<Typist
							className={`${
								texts[currentTextCounter] === 'developer'
									? 'font-mono'
									: ''
							}`}
							key={currentTextCounter}
						>
							{texts[currentTextCounter]}
						</Typist>{' '}
						from Taiwan.
					</p>
					<hr className="mt-3 mb-0 h-[1px] w-12" />
					<p className="whitespace-wrap mt-3 text-base font-semibold">
						Favorite Quote
						<p className="mt-2 font-light font-mono text-sm">
							<span className="text-blue-600">“</span>Think about why obvious
							questions are obvious, that makes you understand how to solve
							complex problems.<span className="text-blue-600">”</span>
						</p>
					</p>
				</article>
			</Container>
		</>
	);
};

export default Home;
