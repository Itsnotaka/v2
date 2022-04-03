import Head from 'next/head';
import Container from '../components/Container';
import { SpotifyIcon } from '../components/Icons';
import { useLastFM } from 'use-last-fm';
import { useEffect, useState } from 'react';
import { Tracks } from '../../types';
import Image from 'next/image';

const Music = ({ tracks }: { tracks: Tracks }) => {
	const lastFM = useLastFM(
		process.env.LASTFM_CLIENT_ID!,
		process.env.LASTFM_CLIENT_TOKEN!,
	);

	const [mounted, setMounted] = useState(false);

	// const [lastPlayedTime, setLastPlayedTime] = useState('');

	useEffect(() => {
		setMounted(true);

		// const calculateLastPlayed = (time: string | number | Date) => {
		// 	const now = new Date();
		// 	const lastPlayed = new Date(time);
		// 	const diff = now.getTime() - lastPlayed.getTime();
		// 	const diffMinutes = Math.round(diff / 60000);
		// 	const diffHours = Math.round(diff / 3600000);
		// 	const diffDays = Math.round(diff / 86400000);

		// 	if (diffMinutes < 1) {
		// 		return 'Just now';
		// 	}

		// 	if (diffHours < 1) {
		// 		return `${diffMinutes} minutes ago`;
		// 	}

		// 	if (diffDays < 1) {
		// 		return `${diffHours} hours ago`;
		// 	}

		// 	return `${diffDays} days ago`;
		// };

		// // we want to calculate once when loaded and then calculate every 5 seconds
		// const interval = setInterval(() => {
		// 	if (tracks?.recenttracks.track.length > 0) {
		// 		const lastPlayed: string = calculateLastPlayed(
		// 			tracks.recenttracks.track[1]?.date['#text'],
		// 		);
		// 		setLastPlayedTime(lastPlayed);
		// 	}
		// }, 5000);

		// return () => clearInterval(interval);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Music - Daniel Fu</title>
			</Head>
			<Container>
				<article className="prose-p:whitespace-wrap prose items-center justify-center pb-16 prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-0 prose-hr:h-1 prose-hr:w-full dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					{lastFM.status === 'playing' && (
						<>
							<h1 className="whitespace-wrap mx-auto flex items-center gap-x-2 text-left">
								<SpotifyIcon className="h-8 w-8" /> Listening to
								<a href={lastFM.song.url} className="underline-offset-4">
									{lastFM.song.name}
								</a>{' '}
								by {lastFM.song.artist}
							</h1>
							<Image
								src={lastFM.song.art}
								alt="album art"
								height={192}
								width={192}
							/>
						</>
					)}
					{lastFM.status !== 'playing' && (
						<h1 className="flex items-center gap-x-2">
							<SpotifyIcon className="h-12 w-12" />
							Currently not listening to anything
						</h1>
					)}
					<hr />
					<h1>
						Last played is{' '}
						<a
							href={tracks.recenttracks.track[1].url}
							className="underline-offset-4"
						>
							{tracks.recenttracks.track[1].name}
						</a>{' '}
						by {tracks.recenttracks.track[1].artist['#text']}
						{/* <span> - {lastPlayedTime}</span> */}
					</h1>
					<Image
						src={tracks?.recenttracks.track[1].image[3]['#text']}
						alt="album art"
						height={192}
						width={192}
					/>

					<hr />
					<h1>Recently Played</h1>
					<table>
						<thead className="border-0">
							<tr>
								<th className="dark:text-primary-250">Title</th>
								<th className="dark:text-primary-250">Artist</th>
								<th className="dark:text-primary-250">Album</th>
							</tr>
						</thead>
						<tbody>
							{/* We only want to display the songs that are not currently playing and is not the last played, so given an array of 10 songs, we are displaying 8 songs below */}
							{tracks?.recenttracks.track.slice(2, 10).map(track => (
								<tr
									key={track.date.uts}
									className="w-auto items-baseline border-0 text-left"
								>
									<td>
										<a href={track.url} target="_blank" rel="noreferrer">
											{track.name}
										</a>
									</td>
									<td>{track.artist['#text']}</td>
									<td>{track.album['#text']}</td>
								</tr>
							))}
						</tbody>
					</table>
				</article>
			</Container>
		</>
	);
};

export async function getStaticProps() {
	const endpoint = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_CLIENT_ID}&api_key=${process.env.LASTFM_CLIENT_TOKEN}&format=json&limit=10`;
	const res = await fetch(endpoint);
	const tracks: Tracks = await res.json();

	return {
		props: {
			tracks,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 30, // In seconds
	};
}

export default Music;
