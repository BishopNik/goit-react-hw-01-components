/** @format */

import PropTypes from 'prop-types';
import { formattedNumber } from '../../utils/utils';
import {
	ProfileContainer,
	Description,
	NameUser,
	Avatar,
	TagAndLocation,
	Stats,
	StatsElement,
	Label,
	QuantityLikes,
} from './profile.styled';

export const ProfileCard = ({ username, tag, location, avatar, followers, views, likes }) => {
	return (
		<ProfileContainer>
			<Description>
				<Avatar src={avatar} alt='User avatar' />
				<NameUser>{username}</NameUser>
				<TagAndLocation>@{tag}</TagAndLocation>
				<TagAndLocation>{location}</TagAndLocation>
			</Description>

			<Stats>
				<StatsElement>
					<Label>Followers</Label>
					<QuantityLikes>{formattedNumber(followers)}</QuantityLikes>
				</StatsElement>
				<StatsElement>
					<Label>Views</Label>
					<QuantityLikes>{formattedNumber(views)}</QuantityLikes>
				</StatsElement>
				<StatsElement>
					<Label>Likes</Label>
					<QuantityLikes>{formattedNumber(likes)}</QuantityLikes>
				</StatsElement>
			</Stats>
		</ProfileContainer>
	);
};

ProfileCard.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	followers: PropTypes.number.isRequired,
	views: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired,
};
