import { stripIndents } from 'common-tags';
import Writing from './writing';

export default class MyStory extends Writing {
	public name = 'My Story';
	public date = new Date('4 May 2021');
	public slug = 'my-story';
	public keywords = ['Startups', 'start', 'story'];
	public hidden = false;
	public excerpt = stripIndents`	
       My story.
    `;

	render() {
		return (
			<>
				<h1>My Story</h1>
				<hr />
				<p>
					So I will be sharing how I get started and worked my way up to where I
					am at right now. Sit back and grab a drink, relax and enjoy this
					story.{' '}
				</p>

				<p>
					It all started with a youtube video, not related to what I am
					currently doing but a video about dropshipping on Shopify. It’s
					interesting because I love this platform called Shopify because of its
					design and smooth user experience. Never knew it was one of the giants
					in the US at that time. So I started learning about this dropshipping
					stuff and started making a Shopify store. Started posting products and
					ADs on social media, hoping to get a few sales. However, things don’t
					always go as plans do. I couldn’t get any sales and decided to give
					up.
				</p>

				<p>
					The time I got into streetwear is around the summer of 2019, where I
					took my first visit to the US, met with my friends there. And that's
					when Rich told me about this streetwear thing and showed me his
					collection. When I get back to HK, that‘s when I started researching
					for all this sneaker and the potential with the market. Yes, that’s
					what being an Economic student thinks. You never think about a piece
					but a whole picture. When I started reselling, I was stuck at what
					site is dropping, how should I cop and how will I resell? This is the
					time I started watching Novas video. He helped me a lot to understand
					the route at the beginning. Knowing all the tricks and details.
				</p>
				<p>
					Then I joined OnlyFNF ad my first cookgroup. Pretty lucky that I got
					into this group instead of Notify or any big names at the time. They
					gave me enough help and guidance to help me get started. That is
					actually the main reason I made Codex. I started reselling with Rich
					and got hooked on the joy of being able to make money. Turning Point
					Continue, I met my turning point at the end of 2019, where I am going
					back to visit my family. At that time, I was invited by the president
					of CTBC, to be an intern of the company's marketing department. I
					rejected that offer because I wanted to visit my family. Pretty stupid
					I know. So I went back to Taiwan for my summer vacation.{' '}
				</p>

				<p>
					OOS and I talked on the phone and the idea of making a cookgroup pops
					up. That’s where the grind starts. It took me a few days to get this
					cookgroup thing started and let me tell you, it’s pain. there are a
					lot of side adventures I had in that period of skipping between beta
					cgs and slot servers. lots of friends, fun stories, etc. but for the
					sake of time, let's move on. ill save those for another time.{' '}
				</p>

				<p>
					I have 0 to no knowledge about this community, so I started searching
					based on my own knowledge, talked to companies one by one, and figure
					out if we can do a partnership or a groupbuy. so I go to Twitter, the
					land of opportunities. unlike what most people would have done in my
					shoes from the start, I never simp nor rt giveaways. rather, I hunted
					for opportunities. I was fairly confident in my knowledge. at this
					point, I had a simple goal. I knew I could make easy money helping
					others working as staff in a cookgroup. That's when I met Zach. One of
					the first support of Codex. The name Codex came from a show that I
					really like called — Macgyver, the villain organization's name is
					Codex. I started getting beta rolled out for Codex. For those early
					supporters, like Liam or relight. They joined via a Instagram story
					post, which I deleted the link within the first hour of the invite.
					Dumb. I was able to get roughly 100 members to join and was happy back
					then. Troubles that I encountered I went ahead to create a cookgroup,
					which requires a lot of resources and expense to start. Thankfully I
					was able to get some early investors to handle that for me. And so I
					started scouting for monitors/dashboards. That’s when I met Frank —
					The person that I always talk to when I encounter difficulties. And
					the dashboard trouble, might not be a trouble for most members but for
					some, they are so lazy to switch from one to another and to manage all
					the transferring kills me. It took us a total of 2 month to find out
					all members that aren't being charged and are using our services. Of
					course, there are more troubles that are already solved and I’d rather
					not talk about them. Eventually, I became this CEO/Director who owned
					2 companies and a lot of partnerships with others. It’s really a
					fantastic journey. And I don’t plan on giving up anytime soon. I have
					received a lot of doubts about this and questions on if I would ever
					regret my choices, just like I rejected the offer from CTBC, I would
					say no to this one as well.
				</p>
				<p>
					A lot of great friendships have been made and a lot of help was
					received from others that I can’t thank enough, I hope this article
					would give you a quick glance at how Codex started. And if you read
					until here, I hope you can get a rough idea that success was never
					easy. And that hard work is essential in your life. I was invited to
					CTBC and Apple for my talent and abilities, not because of my fame nor
					is my family a CEO of that company.
				</p>
			</>
		);
	}
}
