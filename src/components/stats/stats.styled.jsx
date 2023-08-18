/** @format */

import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/utils';
import { colors } from '../../utils/constants';

export const Statistics = styled.section`
	margin-right: auto;
	margin-left: auto;
	margin-top: 100px;
	width: 650px;
	background-color: ${colors.white};
	border-radius: 10px;
	box-shadow: 4px 4px 20px 0px ${colors.itemContainerShadow};
	overflow: hidden;
`;

export const Title = styled.h2`
	text-align: center;
	padding: 22px;
	font-size: 32px;
	text-transform: uppercase;
`;

export const StatList = styled.ul`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 0;
	margin: 0;
`;

export const ItemStat = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14px;
	width: calc(100% / 5);
	padding: 24px;
	background-color: ${getRandomHexColor};
`;

export const LabelItemStat = styled.span`
	color: ${colors.white};
	font-size: 22px;
	font-weight: 500;
`;

export const PercentageItemStat = styled.span`
	color: ${colors.white};
	font-size: 28px;
	font-weight: 600;
`;
