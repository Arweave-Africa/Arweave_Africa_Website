import About from '../components/About.jsx';
import Community from '../components/Community.jsx';
import Cta from '../components/Cta.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Header from '../components/Header.jsx';
import Partner from '../components/Partner.jsx';

const Home = () => {
	return (
		<>
			<div className=' m-0 hero bg-[rgba(28,28,28,0.99)]'>
				<Header />
				<Hero />
			</div>
			<About />
			<Community />
			<Cta />
			<Partner />
			<Footer />
		</>
	);
};

export default Home;
