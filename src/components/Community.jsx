import CommunityItem from './community/CommunityItem';
import SectionTitle from './utils/SectionTitle';

const Community = () => {
	return (
		<div className='w-full bg-background'>
			<div className='container max-w-7xl mx-auto p-1 sm:p-4 py-16 md:py-32'>
				<SectionTitle
					title='Community Highlights'
					description='Explore innovative applications created by our community using Arweave technology'
				/>

				<div className='flex py-12 flex-wrap'>
					<CommunityItem
						title={'Climate Data Tracker'}
						description={
							'Upload once, store forever with economic incentives for network participants.'
						}
						buttonText={'View Project'}
					/>
					<CommunityItem
						title={'Climate Data Tracker'}
						description={
							'Upload once, store forever with economic incentives for network participants.'
						}
						buttonText={'View Project'}
					/>
					<CommunityItem
						title={'Climate Data Tracker'}
						description={
							'Upload once, store forever with economic incentives for network participants.'
						}
						buttonText={'View Project'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Community;
