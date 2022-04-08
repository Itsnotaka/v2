import Writing from './writing';
import { ensure } from '../../types';
import StartupsAndCompetitors from './CompetitionOfStartups';
import MyStory from './MyStory';

const ensurePosts = ensure<readonly Writing[] | Writing[]>();

const writings = ensurePosts([
	new MyStory(),
	new StartupsAndCompetitors(),
] as const);

export default writings;
