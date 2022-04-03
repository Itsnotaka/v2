import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/Container';
import { SpotifyIcon } from '../components/Icons';
import { useLastFM } from 'use-last-fm';
import Image from 'next/image';

const files = [
	{
		title: '',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616100005174006ff3c0136a71bfb9928d34',
	},
	{
		title: '',
		author: 'G.E.M',
		source: 'https://i.scdn.co/image/ab67616100005174a2f44146517d33b2cf01f1ea',
	},
	{
		title: '',
		author: 'Keshi',
		source: 'https://i.scdn.co/image/ab67616100005174d969cf117d0b0d4424bebdc5',
	},
	{
		title: '',
		author: 'Kenshi Yonezu ',
		source: 'https://i.scdn.co/image/ab676161000051745b4225f4c907007170809d8a',
	},
	{
		title: '',
		author: '顏人中',
		source: 'https://i.scdn.co/image/ab67616d00001e02c17714a11ba7db7fda4787fe',
	},
	{
		title: '',
		author: 'Juice WRLD',
		source: 'https://i.scdn.co/image/ab676161000051741908e1a8b79abf71d5598944',
	},
	{
		title: '',
		author: 'Justin Bieber',
		source: 'https://i.scdn.co/image/ab676161000051748ae7f2aaa9817a704a87ea36',
	},
	{
		title: '',
		author: 'Lauv',
		source: 'https://i.scdn.co/image/ab67616d00001e025355919e31efac9b14c45c49',
	},
];

const Music: NextPage = () => {
	const lastFM = useLastFM('akatheowner', 'e620fa8f0a26f158eec3ba8ed724c457');

	return (
		<>
			<Head>
				<title>Music - Daniel Fu</title>
			</Head>
			<Container>
				<article className="prose-p:whitespace-wrap prose pb-16 prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-0 prose-hr:h-1 prose-hr:w-full dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
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
							Currently Offline
						</h1>
					)}
					<hr />
					<ul
						role="list"
						className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
					>
						{files.map(file => (
							<li key={file.source} className="relative">
								<div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
									<div className="pointer-events-none object-cover group-hover:opacity-75">
										<Image src={file.source} alt="" layout="fill" />
									</div>
									<button
										type="button"
										className="absolute inset-0 focus:outline-none"
									>
										<span className="sr-only">
											View details for {file.title}
										</span>
									</button>
								</div>
								<p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
									{file.title}
								</p>
							</li>
						))}
					</ul>
				</article>
			</Container>
		</>
	);
};

export default Music;
