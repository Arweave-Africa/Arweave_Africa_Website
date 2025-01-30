import Button from '../utils/Button';

// eslint-disable-next-line react/prop-types
const CommunityItem = ({ application }) => {

	const handleNavigate = () => {
		window.open(application.link, "_blank")
	}

	return (
		<div className='p-2 sm:p-4 w-[370px] scale-95 hover:scale-100 transition-all duration-300'>
			<div className='flex flex-col gap-8 items-center justify-center text-center border border-gray/10 p-8 py-8 sm:py-12 rounded-lg bg-secondary'>
				<img className='rounded-full bg-gray w-24 h-24' alt={application.name} src={application.logo}/>
				<h3 className='text-xl md:text-2xl font-medium text-white mt-4'>
					{application.name}
				</h3>
				<p className='text-gray font-light text-base md:text-xl'>
					{application.description}
				</p>
				<Button
					text={"View Project"}
					className={'!p-2 !px-6 !text-base'}
					onClick={handleNavigate}
				/>
			</div>
		</div>
	);
};

export default CommunityItem;
