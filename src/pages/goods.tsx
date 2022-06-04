import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Container from '../components/Container';
import SonyXM4 from '../../public/static/sonyXM4.png';

const goods = [
	{
		id: 1,
		name: 'Sony XM4',
		price: '$1,999.00',
		image: SonyXM4,
		producer: 'Sony',
		productLink:
			'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-s?ref=goodswtf',
	},
	{
		id: 1,
		name: 'Sony XM4',
		price: '$1,999.00',
		image: SonyXM4,
		producer: 'Sony',
		productLink:
			'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-s?ref=goodswtf',
	},
];

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
				<article className="prose-p:whitespace-wrap prose items-center justify-center pb-16 prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-0 prose-hr:h-1 prose-hr:w-full prose-hr:border-[#343434] dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					<h1>Goods</h1>
					<span>I like aesthetic things, so here is a list of them</span>
					<hr />
					<section className="grid grid-cols-2">
						{goods.map(good => (
							<div key={good.id}>
								<a
									className="flex h-80 w-72 items-center justify-center rounded-lg bg-primary-300 bg-opacity-75"
									href={good.productLink}
								>
									<div className="flex items-center justify-center">
										<Image
											src={good.image!}
											alt={good.name}
											height={128}
											width={128}
										/>
									</div>
								</a>
								<span>{good.producer}</span>
							</div>
						))}
					</section>
				</article>
			</Container>
		</>
	);
};

export default Goods;
