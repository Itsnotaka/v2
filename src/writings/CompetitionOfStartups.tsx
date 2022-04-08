import { stripIndents } from 'common-tags';
import Writing from './writing';

export default class CompetitionOfStartups extends Writing {
	public name = 'Competition of startups';
	public date = new Date('6 April 2022');
	public slug = 'competition-of-startups';
	public keywords = ['Startups', 'competitors'];
	public hidden = false;
	public excerpt = stripIndents`	
       My thoughts on startups and competition around the company.
    `;

	render() {
		return (
			<>
				<h1>Competition of startups.</h1>
				<hr />
				<p>
					So recently, my friends and I decided that we would apply for Y
					Combinator's next season application. Knowing it would be hard, I
					started thinking of good ideas. Most of the time, I would find a
					similar project on Github with hundreds to thousands of stars, then I
					got bumped out.{' '}
				</p>

				<p>Then I realized.</p>
				<p className="font-bold">
					Ideas are nothing. They will only be valuable if you can execute that
					idea.
				</p>
				<p>
					Knowing there are thousands to millions of startups out there, each
					strives to take a piece of the market share, one of the reasons that
					investors often also evaluate the opportunities and risks of any given
					company. With early-stage companies, one of the risks is the
					execution, whether the founding team is the right team and able to
					build the product they envision before they run out of money.
				</p>
			</>
		);
	}
}
