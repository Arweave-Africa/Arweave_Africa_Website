import { Link } from 'react-router';
import logo from '../assets/Arweave_Logomark.png';

const Header = () => {
	return (
		<div className='w-screen h-20 flex items-center justify-center sm:justify-between px-4 bg-[rgba(28,28,28,0.95)]'>
			<img src={logo} alt='' className='w-32 md:w-44 xl:w-52' />
		</div>
	);
};

export default Header;
