// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title, description }) => {
	return (
		<div className='flex flex-col items-center justify-center text-center max-w-3xl mx-auto'>
			<h2 className='mx-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 lg:mb-8 tracking-wide leading-normal md:leading-relaxed lg:leading-relaxed'>
				{title}
			</h2>
			<p className='text-gray text-base md:text-xl lg:text-2xl text-center font-light leading-normal md:leading-normal lg:leading-relaxed md:tracking-wider lg:tracking-wider'>
				{description}
			</p>
		</div>
	);
};

export default SectionTitle;
