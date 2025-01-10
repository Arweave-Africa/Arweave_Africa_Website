import Button from '../utils/Button';

// eslint-disable-next-line react/prop-types
const CommunityItem = ({ title, description, buttonText }) => {
	return (
		<div className='p-2 sm:p-4 w-full xs:w-1/2 md:w-1/3  scale-95 hover:scale-100 transition-all duration-300'>
			<div className='flex flex-col gap-8 items-center justify-center text-center border border-gray/10 p-8 py-8 sm:py-12 rounded-lg bg-secondary'>
				<div className='rounded-full bg-gray w-24 h-24'></div>
				<h3 className='text-xl md:text-2xl font-medium text-white mt-4'>
					{title}
				</h3>
				<p className='text-gray font-light text-base md:text-xl'>
					{description}
				</p>
				<Button
					text={buttonText}
					action={() => {}}
					className={'!p-2 !px-6 !text-base'}
				/>
			</div>
		</div>
	);
};

export default CommunityItem;
