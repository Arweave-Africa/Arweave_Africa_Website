import logo from '../assets/Arweave_Logomark.png';

const Footer = () => {
	return (
		<div className='w-full bg-secondary p-4 lg:py-20'>
			<div className='mb-12'>
				<img src={logo} alt='' className='w-32 md:w-44 xl:w-52' />
			</div>
			<div className='max-w-6xl mx-auto flex flex-wrap text-white justify-start sm:justify-evenly items-start '>
				<ul className='flex flex-col justify-start items-start gap-2 w-1/2 sm:w-1/3 py-4'>
					<h4>Join Us</h4>
					<li className='text-gray font-light'>
						<a href=''>Instagram</a>
					</li>
					<li className='text-gray font-light'>
						<a href=''>Slack</a>
					</li>
					<li className='text-gray font-light'>
						<a href=''>Twitter</a>
					</li>
					<li className='text-gray font-light'>
						<a href=''>Telegram</a>
					</li>
				</ul>

				<ul className='flex flex-col justify-start items-start gap-2 w-1/2 sm:w-1/3 py-4'>
					<h4>Resource</h4>
					<li className='text-gray font-light'>
						<a href=''>Blog</a>
					</li>
					<li className='text-gray font-light'>
						<a href=''>Github</a>
					</li>
					<li className='text-gray font-light'>
						<a href=''>Community</a>
					</li>
				</ul>

				<ul className='flex flex-col justify-start items-start gap-2 w-1/2 sm:w-1/3 py-4'>
					<h4>Security</h4>
					<li className='text-gray font-light'>
						<a href=''>Terms of Use</a>
					</li>
					<li className='text-gray font-light'>
						<a href=''>Privacy Policy</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
