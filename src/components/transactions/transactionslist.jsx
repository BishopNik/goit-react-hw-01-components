/** @format */

import PropTypes from 'prop-types';
import { Transactions } from './transactions';
import {
	TransactionHistory,
	TitleThead,
	SpreadsheetBody,
	SpreadsheetTr,
	SpreadsheetTh,
} from './transactions.styled';

export const TransactionsList = ({ dataList }) => {
	return (
		<TransactionHistory>
			<TitleThead>
				<SpreadsheetTr>
					<SpreadsheetTh>Type</SpreadsheetTh>
					<SpreadsheetTh>Amount</SpreadsheetTh>
					<SpreadsheetTh>Currency</SpreadsheetTh>
				</SpreadsheetTr>
			</TitleThead>

			<SpreadsheetBody>
				<Transactions data={dataList} />
			</SpreadsheetBody>
		</TransactionHistory>
	);
};

TransactionsList.propTypes = {
	dataList: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	).isRequired,
};
