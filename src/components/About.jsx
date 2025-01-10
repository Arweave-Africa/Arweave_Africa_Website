const About = () => {
	return (
		<div className='w-full bg-background p-4 py-16 lg:py-32 lg:p-48'>
			<div className='lg:container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0'>
				<div className='w-full sm:w-1/2 md:w-1/2 lg:p-4'>
					<img
						src='/src/assets/Arweave_Landing_Page_Illustration.png'
						alt=''
						className='w-full'
					/>
				</div>
				<div className='flex flex-col items-center md:items-start w-full sm:w-1/2 md:w-1/2 lg:p-4 p-1 sm:pt-2 md:pt-4 lg:pt-8 pr-0 py-16 md:py-0'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 lg:mb-8 tracking-wide'>
						About Arweave Africa
					</h2>
					<p className='text-gray text-base md:text-xl lg:text-2xl text-center md:text-left font-light leading-normal md:leading-relaxed lg:leading-loose md:tracking-wider lg:tracking-wider'>
						Arweave Africa is the community that supports Arweave adoption
						within Africa by helping users adopt the technology to their use and
						developers by supporting them
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
