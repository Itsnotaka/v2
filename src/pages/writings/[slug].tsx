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
				<title>{writing.name}</title>
			</Head>
			<Container>
				{/* TODO:Change class here for text to load differently */}
				<article className="pb-20 prose prose-h1:mb-3 prose-h1:bg-gradient-to-r prose-h1:from-pink-300 prose-h1:via-purple-300 prose-h1:to-indigo-400 prose-h1:bg-clip-text prose-h1:text-4xl prose-h1:text-transparent prose-hr:mt-0 prose-hr:mb-3 prose-p:dark:text-primary-250 prose-ul:dark:text-primary-250">
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
