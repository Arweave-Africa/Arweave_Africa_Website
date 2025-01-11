import logo from '../assets/Arweave_Logomark.png';

const Footer = () => {
	return (
		<div className='w-full flex items-center justify-between bg-secondary p-4 lg:py-20'>
			<div className='mb-12'>
				<img src={logo} alt='' className='w-32 md:w-44 xl:w-52' />
			</div>
			<div className='flex text-white justify-start items-start'>
				<ul className='flex flex-col justify-start items-start gap-2 py-4'>
					<h4>Resources</h4>
					<li className='text-gray font-light hover:text-primary'>
						<a href=''>Ao The Computer</a>
					</li>
					<li className='text-gray font-light hover:text-primary'>
						<a href=''>Github</a>
					</li>
					<li className='text-gray font-light hover:text-primary'>
						<a href=''>Discord</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
