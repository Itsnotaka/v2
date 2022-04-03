import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/Container';
import { SpotifyIcon } from '../components/Icons';
import { useLastFM } from 'use-last-fm';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import IU from '../../public/static/IU.jpeg';
import GEM from '../../public/static/GEM.jpeg';

const FavoriteSongs = [
	{
		name: 'IU',
		image: IU,
		url: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2',
	},
];

const Music: NextPage = () => {
	const lastFM = useLastFM('akatheowner', 'e620fa8f0a26f158eec3ba8ed724c457');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Music - Daniel Fu</title>
			</Head>
			<Container>
				<article className="flex h-[768px] items-center justify-center text-center prose-p:whitespace-wrap prose pb-16 prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-0 prose-hr:h-1 prose-hr:w-full dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					{lastFM.status === 'playing' && (
						<h1 className="whitespace-wrap flex items-center gap-x-2">
							<SpotifyIcon className="h-8 w-8" /> Listening to
							<a href={lastFM.song.url} className="underline-offset-4">
								{lastFM.song.name}
							</a>{' '}
							by {lastFM.song.artist}
						</h1>
					)}
					{lastFM.status !== 'playing' && (
						<h1 className="flex items-center gap-x-2">
							<SpotifyIcon className="h-12 w-12" />
							Currently Not Listening to anything
						</h1>
					)}
					{/* <hr />
					<h1>Favorite Artists</h1>
					<div className="grid grid-cols-2">
						<div className="text-center">
							<Image src={IU} alt="" layout="fixed" />
							<span className="font-semibold">IU</span>
						</div>
						<div className="text-center">
							<Image src={GEM} alt="" layout="fixed" />
							<span className="font-semibold">G.E.M</span>
						</div>
					</div>
					<hr />
					<h1>Most played songs</h1>
					<ul>
						<li className="grid grid-cols-3">
							<span>test</span>
							<span>test</span>
							<span>test</span>
						</li>
					</ul> */}
				</article>
			</Container>
		</>
	);
};

export default Music;
