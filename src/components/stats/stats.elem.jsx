/** @format */

import PropTypes from 'prop-types';
import { ItemStat, LabelItemStat, PercentageItemStat } from './stats.styled';

export const StatsElement = ({ dataStats }) => {
	return dataStats.map(({ id, label, percentage }) => (
		<ItemStat key={id}>
			<LabelItemStat>{label}</LabelItemStat>
			<PercentageItemStat>{percentage} %</PercentageItemStat>
		</ItemStat>
	));
};

StatsElement.propTypes = {
	dataStats: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	).isRequired,
};
