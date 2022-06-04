import Head from 'next/head';
import Container from '../components/Container';
import Image from 'next/image';

type AnimeList = {
	id: number;
	title: string;
	image: string;
	description?: string;
}[];

const animeList: AnimeList = [
	{
		id: 1,
		title: 'Hyouka',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12189-eBb6fcM21Zh7.jpg',
	},
	{
		id: 2,
		title: 'Hibike! Euphonium',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21460-ll92hPstsgzF.png',
	},
	{
		id: 3,
		title: 'Horimiya',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg',
	},
	{
		id: 4,
		title: 'Spy x Family',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Yl5M3AiLZAMq.png',
	},
	{
		id: 5,
		title: 'Sono Bisque Doll wa Koi wo Suru',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-qP7FQYGmNI3d.jpg',
	},
	{
		id: 6,
		title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101291-L71WpAkZPtgm.jpg',
	},
	{
		id: 7,
		title: 'Toradora',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4224-3Bh0rm99N6Vl.jpg',
	},
	{
		id: 8,
		title: 'Mushoku Tensei',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108465-B9S9zC68eS5j.jpg',
	},
	{
		id: 9,
		title: 'Your lies in April',
		image:
			'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-CnzR2zVpdxtR.png',
	},
];
export default function Anime() {
	return (
		<>
			<Head>
				<title>Anime — Daniel Fu</title>
			</Head>
			<Container>
				<article className="prose-p:whitespace-wrap prose pb-16 prose-h1:text-2xl prose-h1:font-bold prose-p:mt-3 prose-p:text-base prose-p:font-bold prose-hr:mt-0 prose-hr:h-1 prose-hr:w-full prose-hr:border-[#343434] dark:text-primary-250 prose-h1:dark:text-primary-250 prose-a:dark:text-primary-250 prose-code:dark:text-primary-250">
					<h1>Anime</h1>
					<span>Some of my favorite anime!</span>
					<hr/>
					<section className="grid grid-cols-3 gap-3">
						{animeList.map(anime => (
							<div
								key={anime.id}
								className="flex items-center justify-center rounded-md shadow-2xl"
							>
								<Image
									src={anime.image}
									alt={anime.title}
									width={215}
									height={305}
									className="aspect-w-7 aspect-h-10 rounded-sm"
								/>
							</div>
						))}
					</section>
				</article>
			</Container>
		</>
	);
}
