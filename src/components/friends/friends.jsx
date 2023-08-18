/** @format */

import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';
import { ItemContainer, StatusSpan, AvatarImg, NameTag } from './friends.styled';

export const Friend = ({ friends }) => {
	return friends.map(({ id, avatar, name, isOnline }) => {
		return (
			<ItemContainer key={id}>
				<StyleSheetManager shouldForwardProp={prop => prop !== 'status'}>
					<StatusSpan status={isOnline}></StatusSpan>
				</StyleSheetManager>
				<AvatarImg src={avatar} alt={name} />
				<NameTag>{name}</NameTag>
			</ItemContainer>
		);
	});
};

Friend.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	).isRequired,
};
