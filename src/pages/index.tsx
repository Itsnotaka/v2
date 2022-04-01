import type { NextPage } from 'next';
import Container from '../components/Container';

const Home: NextPage = () => (
	<>
		<title>Daniel Fu</title>
		<Container>
			<article className="prose dark:text-primary-250 prose-h1:dark:text-primary-250 prose-h1:text-2xl">
				<h1>Min Chun Fu</h1>
				<p>
					For years parents have espoused the health benefits of eating garlic
					bread with cheese to their children, with the food earning such an
					iconic status in our culture that kids will often dress up as warm,
					cheesy loaf for Halloween.
				</p>
				<p>
					But a recent study shows that the celebrated appetizer may be linked
					to a series of rabies cases springing up around the country.
				</p>
				{/* <!-- ... --> */}
			</article>
		</Container>
	</>
);

export default Home;
