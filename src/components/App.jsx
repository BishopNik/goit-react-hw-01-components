/** @format */

import PropTypes from 'prop-types';
import { ProfileCard } from 'components/profile/profile';
import { StatsContainer } from 'components/stats/stats';

export const App = ({ data, dataStats }) => {
	const { username, tag, location, avatar, stats } = data;
	return (
		<>
			<ProfileCard
				username={username}
				tag={tag}
				location={location}
				avatar={avatar}
				followers={stats.followers}
				views={stats.views}
				likes={stats.likes}
			/>
			<StatsContainer dataStats={dataStats} />
		</>
	);
};

ProfileCard.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.exact({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}),
};

StatsContainer.propTypes = {
	dataStats: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	).isRequired,
};
