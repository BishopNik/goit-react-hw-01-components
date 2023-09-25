/** @format */

import { ProfileCard } from 'components/profile/profile';
import { StatsContainer } from 'components/stats/stats';
import { FriendsList } from 'components/friends/friendslist';
import { TransactionsList } from 'components/transactions/transactionslist';
import { FriendsListTag } from 'components/friends/friends.styled';

import user from 'data/user';
import statistics from 'data/stats';
import friends from 'data/friends';
import transactions from 'data/transactions';

export const App = () => {
	const { username, tag, location, avatar, stats } = user;
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
			<StatsContainer dataStats={statistics} title={'Upload stats'} />
			<FriendsListTag>
				<FriendsList dataFriends={friends} />
			</FriendsListTag>
			<TransactionsList dataList={transactions} />
		</>
	);
};
