/** @format */

import PropTypes from 'prop-types';
import { SpreadsheetTr, SpreadsheetTd } from './transactions.styled';

export const Transactions = ({ data }) => {
	return data.map(({ id, type, amount, currency }) => (
		<SpreadsheetTr key={id}>
			<SpreadsheetTd>{type}</SpreadsheetTd>
			<SpreadsheetTd>{amount}</SpreadsheetTd>
			<SpreadsheetTd>{currency}</SpreadsheetTd>
		</SpreadsheetTr>
	));
};

Transactions.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	).isRequired,
};
