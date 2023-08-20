/** @format */

import PropTypes from 'prop-types';
import { Friend } from './friends';
import { FriendsListTag } from './friends.styled';

export const FriendsList = ({ dataFriends }) => {
	return (
		<FriendsListTag>
			<Friend friends={dataFriends} />
		</FriendsListTag>
	);
};

FriendsList.propTypes = {
	dataFriends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	).isRequired,
};
