import CommunityItem from './community/CommunityItem';
import SectionTitle from './utils/SectionTitle';
import permabrand_logo from '../assets/permabrand.svg'

const Community = () => {

	const applications = [
		{
			name:"PermaBrand",
			logo:permabrand_logo,
			description:"Companies and communities brandkit repository",
			link:"https://permabrand.ar.io/"
		}
	]

	return (
		<div className='w-full bg-background px-12 md:py-28'>
			<div className='container max-w-7xl mx-auto'>
				<SectionTitle
					title='Community Highlights'
					description='Explore innovative applications created by our community using Arweave and AO'
				/>

				<div className='flex py-12 flex-wrap justify-center gap-4'>
					{applications.map((application, index) => <CommunityItem
					    key={index}
						application={application}
					/>)}	
				</div>
			</div>
		</div>
	);
};

export default Community;
