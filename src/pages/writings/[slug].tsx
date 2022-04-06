import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import writings from '../../writings';

interface Props {
	slug: string;
}

const WritingsPage = ({ slug }: Props) => {
	const writing = writings.find(writing => writing.slug === slug)!;
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>{writing.name} — Daniel Fu</title>
			</Head>
			<Container>
				<article className="prose-p:whitespace-wrap prose pb-16 prose-h1:font-mono prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-hr:mt-3 prose-hr:h-1 prose-hr:w-full prose-hr:border-dotted dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					{writing.render()}
				</article>
			</Container>
		</>
	);
};

export default WritingsPage;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const slug = params!.slug as string;

	const writing = writings.find(writing => writing.slug === slug);

	if (!writing) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			slug,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: writings.map(writing => ({ params: { slug: writing.slug } })),
	fallback: 'blocking',
});
