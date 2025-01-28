import { Link } from 'react-router';
import logo from '../assets/Arweave_Logomark.png';

const Header = () => {
	return (
		<div className='w-screen h-20 flex items-center justify-center sm:justify-between px-4 bg-[rgba(28,28,28,0.95)]'>
			<img src={logo} alt='' className='w-32 md:w-44 xl:w-52' />

				<Link to={"/gallery"}
					className='
				hover:bg-primary text-primary border-2 border-primary hover:text-white
				cursor-pointer text-base lg:text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 hidden sm:block'
				>
					View Gallery
				</Link>
		</div>
	);
};

export default Header;
