import Head from 'next/head';
import Container from '../components/Container';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type AnimeList = {
	id: number;
	title: string;
	image: string;
	description?: string;
	link?: string;
}[];

const animeList: AnimeList = [
	{
		id: 1,
		title: 'Hyouka',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12189-eBb6fcM21Zh7.jpg',
		link: 'https://anilist.co/anime/12189/Hyouka/',
	},
	{
		id: 2,
		title: 'Hibike! Euphonium',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21460-ll92hPstsgzF.png',
		link: 'https://anilist.co/anime/20912/Hibike-Euphonium/',
	},
	{
		id: 3,
		title: 'Horimiya',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg',
		link: 'https://anilist.co/anime/124080/Horimiya/',
	},
	{
		id: 4,
		title: 'Spy x Family',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Yl5M3AiLZAMq.png',
	},
	{
		id: 5,
		title: 'My Dress Up Darling',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-qP7FQYGmNI3d.jpg',
		link: 'https://anilist.co/anime/132405/Sono-Bisque-Doll-wa-Koi-wo-Suru/',
	},
	{
		id: 6,
		title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101291-L71WpAkZPtgm.jpg',
		link: 'https://anilist.co/anime/101291/Seishun-Buta-Yarou-wa-Bunny-Girl-Senpai-no-Yume-wo-Minai/',
	},
	{
		id: 7,
		title: 'Toradora',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4224-3Bh0rm99N6Vl.jpg',
		link: 'https://anilist.co/anime/4224/Toradora/',
	},
	{
		id: 8,
		title: 'Mushoku Tensei',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108465-B9S9zC68eS5j.jpg',
		link: 'https://anilist.co/anime/108465/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu/',
	},
	{
		id: 9,
		title: 'Your lies in April',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-CnzR2zVpdxtR.png',
		link: 'https://anilist.co/anime/20665/Your-Lies-in-April/',
	},
];
export default function Anime() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Anime — Daniel Fu</title>
			</Head>
			<Container>
				<article className="prose-p:whitespace-wrap prose pb-16 prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-0 prose-hr:h-1 prose-hr:w-full prose-hr:border-[#343434] dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					<h1>Anime</h1>
					<span>Some of my favorite anime!</span>
					<hr />
					<section className="grid grid-cols-3 gap-3">
						{animeList.map(anime => (
							<a
								key={anime.id}
								className="relative flex items-center justify-center rounded-md shadow-2xl"
								target={'_blank'}
								href={anime.link}
								rel="noreferrer"
							>
								<Image
									src={anime.image}
									alt={anime.title}
									width={215}
									height={305}
									className="aspect-w-7 aspect-h-10 rounded-sm duration-300 hover:scale-105"
								/>
								<div className="absolute bottom-0 z-10 w-full bg-black bg-opacity-70 p-3 pb-3">
									<span className="text-xs">{anime.title}</span>
								</div>
							</a>
						))}
					</section>
				</article>
			</Container>
		</>
	);
}
