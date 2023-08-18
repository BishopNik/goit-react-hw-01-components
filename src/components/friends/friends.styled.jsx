/** @format */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils/constants';

export const FriendsListTag = styled.ul`
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	padding: 0;
	width: 380px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const ItemContainer = styled.li`
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 22px 40px;
	width: 100%;
	background-color: ${colors.white};
	border-radius: 6px;
	box-shadow: 4px 4px 10px 0px ${colors.itemContainerShadow};
	overflow: hidden;
	list-style: none;
	box-sizing: border-box;
`;

export const StatusSpan = styled.span`
	border-radius: 50%;
	background-color: ${({ status }) => (status ? 'green' : 'red')};
	box-shadow: 0px 0px 5px 2px ${colors.statusSpanShadow};
	width: 25px;
	height: 25px;
`;

export const NameTag = styled.p`
	font-size: 36px;
	font-weight: 600;
	margin: 0;
`;

export const AvatarImg = styled.img`
	width: 58px;
`;

StatusSpan.propTypes = {
	status: PropTypes.bool,
};
