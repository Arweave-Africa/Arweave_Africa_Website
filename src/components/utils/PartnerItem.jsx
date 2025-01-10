// eslint-disable-next-line react/prop-types
const PartnerItem = ({ logo }) => {
	return (
		<div className='p-2 md:p-4 w-1/2 md:w-1/3'>
			<div
				className={`
				w-full px-6 py-4 bg-gray/5 hover:bg-gray/20 transition-all duration-300 p cursor-pointer border border-background rounded-lg shadow flex items-center justify-center
			`}
			>
				<img src={logo} alt='' className='w' />
			</div>
		</div>
	);
};

export default PartnerItem;
