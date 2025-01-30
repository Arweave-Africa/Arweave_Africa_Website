import Button from './utils/Button';
import SectionTitle from './utils/SectionTitle';
import pageImage from '../assets/Arweave_Landing_Page_Image.png';

const Cta = () => {

	const handleNavigate = () => {
		window.open("https://github.com/orgs/Arweave-Africa/repositories", "_blank")
	}

	return (
		<div className='w-full bg-background py-16 relative'>
			<div className='relative mx-auto flex flex-col	gap-20 items-center justify-center'>
				<i className='px-10 text-xl lg:text-3xl text-white'>Take part of the journey by submitting your pull request</i>
				<Button
					text='Join the Community'
					onClick={handleNavigate}
					className={'w-60 !p-2 md:!p-4'}
				/>
				<img
					src={pageImage}
					alt='logo page'
					className='absolute -top-24 right-0 w-24 md:w-28 xl:w-32'
				/>
			</div>
		</div>
	);
};

export default Cta;
