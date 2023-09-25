/** @format */

import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';
import { ItemContainer, StatusSpan, AvatarImg, NameTag } from './friends.styled';

export const Friend = ({ avatar, nameFriend, isOnline }) => {
	return (
		<ItemContainer>
			<StyleSheetManager shouldForwardProp={prop => prop !== 'status'}>
				<StatusSpan status={isOnline}></StatusSpan>
			</StyleSheetManager>
			<AvatarImg src={avatar} alt={nameFriend} />
			<NameTag>{nameFriend}</NameTag>
		</ItemContainer>
	);
};

Friend.propTypes = {
	avatar: PropTypes.string.isRequired,
	nameFriend: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};
