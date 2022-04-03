export interface Tracks {
	recenttracks: {
		track: {
			artist: { 'mbid': string; '#text': string };
			image: [
				{
					'size': 'small';
					'#text': string;
				},
				{
					'size': 'medium';
					'#text': string;
				},
				{
					'size': 'large';
					'#text': string;
				},
				{
					'size': 'extralarge';
					'#text': string;
				},
			];
			mbid: string;
			album: {
				'mbid': string;
				'#text': string;
			};
			name: string;
			url: string;
			date: { 'uts': string; '#text': string };
		}[];
	};
}
