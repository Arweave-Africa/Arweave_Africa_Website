import SectionTitle from './utils/SectionTitle';
import ArweaveLogoLight from '../assets/Arweave_Logomark_Light.png';
import ArweaveCookBookDark from '../assets/ArweaveCookbook.png';
import PartnerItem from './utils/PartnerItem';

const Partners = () => {
	return (
		<div className='w-full bg-background p-4 py-16 lg:py-32'>
			<div className='container mx-auto flex flex-col	gap-20 items-center justify-center'>
				<SectionTitle
					title='Our Partners'
					description='Collaborating with leaders to drive innovation and build African’s decentralized future'
				/>
				<div className='flex max-w-6xl flex-wrap justify-center'>
					<PartnerItem logo={ArweaveLogoLight} />
					<PartnerItem logo={ArweaveCookBookDark} />
					<PartnerItem logo={ArweaveLogoLight} />
					<PartnerItem logo={ArweaveCookBookDark} />
					<PartnerItem logo={ArweaveLogoLight} />
					<PartnerItem logo={ArweaveCookBookDark} />
				</div>
			</div>
		</div>
	);
};

export default Partners;
