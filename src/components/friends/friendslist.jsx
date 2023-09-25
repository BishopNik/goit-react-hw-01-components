/** @format */

import PropTypes from 'prop-types';
import { Friend } from './friend';

export const FriendsList = ({ dataFriends }) => {
	return dataFriends.map(({ id, avatar, name, isOnline }) => {
		return <Friend key={id} avatar={avatar} nameFriend={name} isOnline={isOnline} />;
	});
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
