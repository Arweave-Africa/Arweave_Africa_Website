import Button from './utils/Button';
import SectionTitle from './utils/SectionTitle';
import pageImage from '../assets/Arweave_Landing_Page_Image.png';

const Cta = () => {
	return (
		<div className='w-full bg-background p-4 py-16 md:py-32 relative'>
			<div className='container mx-auto flex flex-col	gap-20 items-center justify-center'>
				<SectionTitle
					title='Arweave Africa Empowering Data Permanence Across the Continent'
					description='Briefly highlight the role of Arweave Africa in supporting adoption for users and developers'
				/>
				<Button
					text='Join the Community'
					action={() => {}}
					className={'w-60 !p-2 md:!p-4'}
				/>
				<img
					src={pageImage}
					alt='logo page'
					className='absolute top-1/2 right-0 w-24 md:w-28 xl:w-32'
				/>
			</div>
		</div>
	);
};

export default Cta;
