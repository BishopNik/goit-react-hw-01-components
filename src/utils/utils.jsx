/** @format */

export const formattedNumber = number =>
	number.toLocaleString('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});

export const getRandomHexColor = () => {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
};
