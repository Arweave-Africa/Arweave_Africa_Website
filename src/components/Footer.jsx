import logo from '../assets/Arweave_Logomark.png';

const Footer = () => {
	return (
		<div className='w-full flex items-center justify-between bg-secondary p-8'>
			<div className='mb-12'>
				<img src={logo} alt='' className='w-32 md:w-44 xl:w-52' />
			</div>
			<div className='flex text-white justify-start items-start'>
				<ul className='flex flex-col justify-start items-start gap-2 py-4'>
					<h4>Resources</h4>
					<li className='text-gray font-light hover:text-primary'>
						<a href='https://github.com/orgs/Arweave-Africa/repositories' target='_blank' >Github</a>
					</li>
					<li className='text-gray font-light hover:text-primary'>
						<a href='https://discord.gg/gbRQ67mpzq' target='_blank' >Discord</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
