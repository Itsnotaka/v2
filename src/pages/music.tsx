import Head from 'next/head';
import Container from '../components/Container';
import { SpotifyIcon } from '../components/Icons';
import { useLastFM } from 'use-last-fm';
import { useEffect, useState } from 'react';
import { Tracks } from '../../types';

const Music = ({ tracks }: { tracks: Tracks }) => {
	const lastFM = useLastFM(
		process.env.LASTFM_CLIENT_ID!,
		process.env.LASTFM_CLIENT_TOKEN!,
	);

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
				<article className="prose-p:whitespace-wrap prose items-center justify-center pb-16 prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-0 prose-hr:h-1 prose-hr:w-full dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					{lastFM.status === 'playing' && (
						<h1 className="whitespace-wrap mx-auto flex items-center gap-x-2 text-left">
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
					<hr />
					<h1>Last Played</h1>
					<table>
						<tr>
							<th>Title</th>
							<th>Artist</th>
							<th>Album</th>
						</tr>
						<tr>
							<td>{tracks.recenttracks.track[1].name}</td>
							<td>{tracks.recenttracks.track[1].artist['#text']}</td>
							<td>{tracks.recenttracks.track[1].album['#text']}</td>
						</tr>
					</table>
					<hr />
					<h1>Recently Played</h1>
					<table>
						<tr>
							<th>Title</th>
							<th>Artist</th>
							<th>Album</th>
						</tr>
						{/* We only want to display the songs that are not currently playing and is not the last played, so given an array of 10 songs, we are displaying 8 songs below */}
						{tracks.recenttracks.track.slice(2, 10).map(track => (
							<tr key={track.mbid} className="text-left items-baseline w-auto">
								<td>{track.name}</td>
								<td>{track.artist['#text']}</td>
								<td>{track.album['#text']}</td>
							</tr>
						))}
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
		revalidate: 1800, // In seconds
	};
}

export default Music;
