import pageLogo1 from '../assets/Arweave_Landing_Page_Logo.png';
import pageLogo2 from '../assets/Arweave_Landing_Page_Logo_2.png';

const Hero = () => {
	return (
		<section className='w-full h-[60vh] lg:h-[calc(100vh-5rem)] 2xl:h-[70vh] bg-[rgba(28,28,28,0.95)]'>
			<div className='w-full md:max-w-3xl xl:max-w-5xl container mx-auto flex flex-col items-center justify-center h-full relative px-4'>
				<h1 className='text-4xl md:text-5xl  xl:text-7xl font-bold text-white mb-6 leading-snug  md:leading-snug xl:leading-normal'>
					Permanent, Decentralised Internet for{' '}
					<span className='text-primary'>Africa’s Future</span>
				</h1>
				<p className='text-lg md:text-2xl xl:text-3xl  text-gray leading-snug md:leading-relaxed xl:leading-normal px-8'>
				"Building the <i className='text-primary'>Permaweb</i>, one pull request at a time"
				</p>
				<img
					src={pageLogo1}
					alt='logo page'
					className='absolute top-2  2xl:-top-14 right-0 w-24 md:w-28 xl:w-32'
				/>
				<img
					src={pageLogo2}
					alt='logo page'
					className='absolute bottom-2 2xl:-bottom-14 left-0 w-24 md:w-28 xl:w-32'
				/>
				<div
					className='
				bg-primary hover:bg-transparent border-2 border-primary text-white hover:text-primary
				cursor-pointer text-md font-medium p-2 px-8 rounded-lg transition-all duration-300 md:hidden mt-8'
				>
					View Gallery
				</div>
			</div>
		</section>
	);
};

export default Hero;
