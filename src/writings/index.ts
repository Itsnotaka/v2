import Writing from './writing';
import { ensure } from '../../types';
import StartupsAndCompetitors from './CompetitionOfStartups';

const ensurePosts = ensure<readonly Writing[] | Writing[]>();

const writings = ensurePosts([new StartupsAndCompetitors()] as const);

export default writings;
