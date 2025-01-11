import logo from '../assets/Arweave_Logomark.png';

const Header = () => {
	return (
		<div className='w-screen m-0 py-6 bg-[rgba(28,28,28,0.95)] '>
			<div className='container mx-auto px-4 flex items-center justify-between'>
				<div>
					<img src={logo} alt='' className='w-32 md:w-44 xl:w-52' />
				</div>

				<div
					className='
				bg-primary hover:bg-transparent border-2 border-primary text-white hover:text-primary
				cursor-pointer text-lg xl:text-xl font-medium  p-3 xl:p-4 px-6 rounded-lg transition-all duration-300 hidden md:block'
				>
					View Gallery
				</div>
			</div>
		</div>
	);
};

export default Header;
