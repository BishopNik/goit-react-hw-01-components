/** @format */

import PropTypes from 'prop-types';
import { ProfileCard } from 'components/profile/profile';
import { StatsContainer } from 'components/stats/stats';
import { FriendsList } from 'components/friends/friendslist';
import { TransactionsList } from 'components/transactions/transactionslist';

export const App = ({ data, dataStats, dataFriends, dataTransactions }) => {
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
			<FriendsList dataFriends={dataFriends} />
			<TransactionsList dataList={dataTransactions} />
		</>
	);
};

App.propTypes = {
	data: PropTypes.exact({
		username: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		stats: PropTypes.exact({
			followers: PropTypes.number.isRequired,
			views: PropTypes.number.isRequired,
			likes: PropTypes.number.isRequired,
		}),
	}).isRequired,
	dataStats: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	).isRequired,
	dataFriends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	).isRequired,
	dataTransactions: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	).isRequired,
};
