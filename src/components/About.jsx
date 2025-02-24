import illustration from "../assets/Arweave_Landing_Page_Illustration.png"

const About = () => {
	return (
		<div className='w-full bg-background pt-20 px-10'>
			<div className='lg:container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0'>
				<div className='w-full sm:w-1/2 md:w-1/2 lg:p-4 flex justify-center'>
					<img
						src={illustration}
						alt='africa'
						className='w-11/12 md:w-3/4 lg:w-full'
					/>
				</div>
				<div className='flex flex-col items-center md:items-start w-full sm:w-1/2 md:w-1/2 lg:p-4 p-1 sm:pt-2 md:pt-4 lg:pt-8 pr-0 py-16 md:py-0'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 lg:mb-8 tracking-wide'>
						About Arweave Africa
					</h2>
					<p className='text-gray text-base md:text-xl 2xl:text-2xl text-center md:text-left font-light leading-normal md:leading-relaxed lg:leading-loose md:tracking-wider lg:tracking-wider'>
						Arweave Africa is a community of developers and designers focusing on building tools and products on top of Arweave and AO. 
						We create products that are useful for Arweave and AO adoption and usability.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
