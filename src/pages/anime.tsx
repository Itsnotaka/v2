import Head from 'next/head';
import Container from '../components/Container';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type AnimeList = {
	title: string;
	image: string;
	description?: string;
	link?: string;
}[];

const animeList: AnimeList = [
	{
		title: 'Hyouka',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12189-eBb6fcM21Zh7.jpg',
		link: 'https://anilist.co/anime/12189/Hyouka/',
	},
	{
		title: 'Hibike! Euphonium',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21460-ll92hPstsgzF.png',
		link: 'https://anilist.co/anime/20912/Hibike-Euphonium/',
	},
	{
		title: 'Your lie in April',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-CnzR2zVpdxtR.png',
		link: 'https://anilist.co/anime/20665/Your-Lies-in-April/',
	},
	{
		title: 'Kaguya sama',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112641-zoGC8d6FaPXU.jpg',
		link: 'https://anilist.co/anime/112641/Kaguyasama-wa-Kokurasetai-Tensaitachi-no-Renai-Zunousen/',
	},
	{
		title: 'Karakai Jouzu no Takagi-san',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99468-XayCplkIL3Gf.png',
		link: 'https://anilist.co/anime/99468/Karakai-Jouzu-no-Takagisan/',
	},
	{
		// eslint-disable-next-line quotes
		title: "Komi Can't Communicate",
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133965-9TZBS4m4yvED.png',
		link: 'https://anilist.co/anime/133965/Komisan-wa-Komyushou-desu/',
	},
	{
		title: 'Horimiya',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg',
		link: 'https://anilist.co/anime/124080/Horimiya/',
	},
	{
		title: 'Maidragon',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21776-FJiPcLQHeTiV.png',
		link: 'https://anilist.co/anime/21776/Kobayashisan-Chi-no-Maidragon/',
	},
	{
		title: 'Spy x Family',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Yl5M3AiLZAMq.png',
	},
	{
		title: 'My Dress Up Darling',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-qP7FQYGmNI3d.jpg',
		link: 'https://anilist.co/anime/132405/Sono-Bisque-Doll-wa-Koi-wo-Suru/',
	},
	{
		title: 'Bunny Girl Senpai',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101291-L71WpAkZPtgm.jpg',
		link: 'https://anilist.co/anime/101291/Seishun-Buta-Yarou-wa-Bunny-Girl-Senpai-no-Yume-wo-Minai/',
	},
	{
		title: 'Mushoku Tensei',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108465-B9S9zC68eS5j.jpg',
		link: 'https://anilist.co/anime/108465/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu/',
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
				<article className="prose-p:whitespace-wrap prose z-10 pb-16 prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-0 prose-hr:h-1 prose-hr:w-full prose-hr:border-[#343434] dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					<h1>Anime</h1>
					<span>Some of my favorite animes!</span>
					<hr />
					<section className="grid grid-cols-1 md:grid-cols-3 gap-3">
						{animeList.map(anime => (
							<a
								key={uuidv4()}
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
									className="rounded-sm duration-300 hover:scale-105"
								/>
								<div className="z-2 absolute bottom-0 w-[215px] bg-black bg-opacity-70 p-3 pb-3 duration-300 hover:bg-opacity-80">
									<span className="h-full flex px-auto mx-auto text-xs">{anime.title}</span>
								</div>
							</a>
						))}
					</section>
				</article>
			</Container>
		</>
	);
}
