import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Container from '../components/Container';
import Typist from 'react-typist';
import Head from 'next/head';

const Home: NextPage = () => {
	const [mounted, setMounted] = useState(false);
	const texts = [' student ', ' developer ', ' designer '];
	const [currentTextCounter, setCurrentTextCounter] = useState(0);

	useEffect(() => {
		// creating a timer to rotate the text every 3 seconds
		const timer = setInterval(() => {
			setCurrentTextCounter((currentTextCounter + 1) % texts.length);
		}, 3000);

		return () => clearInterval(timer);
	}, [currentTextCounter, texts.length]);

	// add mounting to prevent page loading error

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Daniel Fu</title>
			</Head>

			<Container>
				<article className="prose-p:whitespace-wrap prose pb-16 prose-h1:font-mono prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-hr:mt-3 prose-hr:h-1 prose-hr:w-full prose-hr:border-[#343434] dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					<h1 className="font-mono">Min Chun Fu</h1>
					<div className="gap-y-1">
						<span className="flex whitespace-pre-wrap">
							— A
							<Typist
								cursor={{ hideWhenDone: true, hideWhenDoneDelay: 200 }}
								className={`${
									texts[currentTextCounter] === ' developer ' ? 'font-mono' : ''
								}`}
								key={currentTextCounter}
							>
								{texts[currentTextCounter]}
							</Typist>
							from Taiwan.{'\n'}
						</span>
						<p>
							Majoring in <span className="font-semibold">Finance</span> and{' '}
							<span className="font-semibold">Computer Science</span>.
						</p>
					</div>
					<hr className="mt-3 mb-0 h-[1px] w-12" />
					<p className="mt-3 text-base font-bold">My Favorite Quote</p>{' '}
					<p className="font-mono font-normal">
						<span className="text-blue-600">“</span>Think about why obvious
						questions are obvious, that makes you understand how to solve
						complex problems.<span className="text-blue-600">”</span>
					</p>
					<p>
						Building EdTech Platform as a service at{' '}
						<span className="font-mono font-semibold underline underline-offset-1">
							Flow.
						</span>
					</p>
					<p className="text-sm">
						Founder & CEO{' '}
						<span className="font-semibold underline underline-offset-1">
							@<span className="font-mono">Codex Technology</span>
						</span>{' '}
						(acq.{' '}
						<span className="font-semibold">
							@
							<span className="font-mono underline underline-offset-1">
								SFV Capital
							</span>
						</span>
						).
					</p>
				</article>
			</Container>
		</>
	);
};

export default Home;
