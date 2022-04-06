import type { NextPage, PageConfig } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react';
import Container from '../../components/Container';
import writings from '../../writings';

// Sweet zero js 🤑
export const config: PageConfig = {
	// eslint-disable-next-line camelcase
	unstable_runtimeJS: false,
};

const Setups: NextPage = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Writings — Daniel Fu</title>
			</Head>

			<Container>
				<article className="prose-p:whitespace-wrap prose pb-16 prose-h1:font-mono prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-hr:mt-3 prose-hr:h-1 prose-hr:w-full prose-hr:border-dotted prose-hr:border-[#343434] dark:text-primary-250 prose-h1:dark:text-primary-250 prose-h3:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					<hr className="absolute left-[40px] m-0 box-border min-h-[calc(100vh_-_120px)] w-[1px] border-l-[1px] border-t-0 border-dotted" />
					<h1>Writings</h1>
					<hr />
					{writings
						.filter(post => !post.hidden)
						.map(post => (
							<WritingLink key={post.slug} href={`writings/${post.slug}`}>
								<aside className="absolute -left-[52px] top-12 m-0 block -rotate-90 whitespace-nowrap text-sm">
									{post.date.toLocaleDateString('en-US', {
										month: 'long',
										day: 'numeric',
									})}
								</aside>
								<h3 className="font m-0 block">{post.name}</h3>
								<p className="mx-0 mt-2 mb-0 block opacity-50">
									{post.excerpt}
								</p>
							</WritingLink>
						))}
				</article>
			</Container>
		</>
	);
};

export default Setups;

function WritingLink(props: { href: string; children: ReactNode }) {
	return (
		<Link passHref href={props.href}>
			<a className="relative -mx-2 mt-2 mb-5 block w-[calc(100%_+_48px)] cursor-pointer rounded-xl p-5 font-['Times_New_Roman'] italic outline-0 duration-150 hover:bg-[#f2f2f2] dark:hover:bg-[#2e2e2e]">
				{props.children}
			</a>
		</Link>
	);
}
