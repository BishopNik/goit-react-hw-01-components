/** @format */

import styled from 'styled-components';
import { colors } from '../../utils/constants';

export const TransactionHistory = styled.table`
	width: 700px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	border-collapse: collapse;
	border-radius: 8px;
	box-shadow: 4px 4px 20px 0px ${colors.spreadsheetShadow};
	overflow: hidden;
`;

export const TitleThead = styled.thead`
	background-color: ${colors.spreadsheetTitle};
	text-transform: uppercase;
`;

export const SpreadsheetBody = styled.tbody`
	background-color: ${colors.white};
`;

export const SpreadsheetTr = styled.tr`
	height: 50px;
	border: 1px solid ${colors.spreadsheetBorder};
`;

export const SpreadsheetTd = styled.td`
	width: calc(100% / 3);
	text-align: center;
	border: 1px solid ${colors.spreadsheetBorder};
	color: rgba(0, 0, 0, 0.45);
	font-weight: 500;
`;

export const SpreadsheetTh = styled.th`
	color: ${colors.white};
`;
