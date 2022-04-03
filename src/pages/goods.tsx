import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Container from '../components/Container';

const Goods: NextPage = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Goods — Daniel Fu</title>
			</Head>
			<Container>
				<div>hi</div>
			</Container>
		</>
	);
};

export default Goods;
