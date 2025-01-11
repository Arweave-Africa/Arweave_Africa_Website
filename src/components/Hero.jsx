import pageLogo1 from '../assets/Arweave_Landing_Page_Logo.png';
import pageLogo2 from '../assets/Arweave_Landing_Page_Logo_2.png';

const Hero = () => {
	return (
		<section className='md:h-[70vh] h-[80vh]  bg-[rgba(28,28,28,0.95)] '>
			<div className='md:max-w-3xl xl:max-w-5xl container mx-auto flex flex-col items-center justify-center h-full relative px-4'>
				<h1 className='text-4xl md:text-5xl  xl:text-7xl font-bold text-white mb-6 leading-snug  md:leading-snug xl:leading-normal'>
					Permanent, Decentralised Internet for{' '}
					<span className='text-primary'>Africa’s Future</span>
				</h1>
				<p className='text-lg md:text-2xl xl:text-4xl  text-gray leading-snug md:leading-relaxed xl:leading-normal px-8'>
					Empowering communities, creators, and developers to participate in
					building the <i className='text-primary'>Permaweb</i>
				</p>
				<img
					src={pageLogo1}
					alt='logo page'
					className='absolute top-16 -right-4 w-24 md:w-28 xl:w-32'
				/>
				<img
					src={pageLogo2}
					alt='logo page'
					className='absolute bottom-4 -left-12 w-24 md:w-28 xl:w-32'
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
