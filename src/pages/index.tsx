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
				<article className="prose prose-h1:text-2xl dark:text-primary-250 prose-h1:dark:text-primary-250">
					<h1 className="font-[monolisa]">Min Chun Fu</h1>
					<p className="flex whitespace-pre-wrap align-bottom">
						— A{' '}
						<Typist
							className={`${
								texts[currentTextCounter] === 'developer'
									? 'font-[monolisa]'
									: ''
							}`}
							key={currentTextCounter}
						>
							{texts[currentTextCounter]}
						</Typist>{' '}
						from Taiwan.
					</p>
					<hr className="mt-3 h-[1px] w-12" />
				</article>
			</Container>
		</>
	);
};

export default Home;
