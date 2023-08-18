/** @format */

import PropTypes from 'prop-types';
import { StatsElement } from './stats.elem';
import { Statistics, Title, StatList } from './stats.styled';

export const StatsContainer = ({ dataStats }) => {
	return (
		<Statistics>
			<Title>Upload stats</Title>

			<StatList>
				<StatsElement dataStats={dataStats} />
			</StatList>
		</Statistics>
	);
};

StatsContainer.propTypes = {
	dataStats: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	).isRequired,
};
