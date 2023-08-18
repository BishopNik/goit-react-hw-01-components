/** @format */

import styled from 'styled-components';

export const ProfileContainer = styled.div`
	margin-right: auto;
	margin-left: auto;
	margin-top: 100px;
	width: 400px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.35);
	overflow: hidden;
`;

export const Description = styled.div`
	text-align: center;
	padding: 40px;
`;

export const Stats = styled.ul`
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
	background-color: rgba(210, 222, 230, 0.55);
	width: 100%;
`;

export const StatsElement = styled.li`
	width: calc(100% / 3);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	padding: 30px;
	border: 1px solid rgba(128, 128, 128, 0.25);
`;

export const Avatar = styled.img`
	border-radius: 50%;
	width: 150px;
	background-color: aliceblue;
`;

export const NameUser = styled.p`
	font-size: 26px;
	font-weight: 600;
	padding: 35px 0 6px;
	margin: 0;
`;

export const TagAndLocation = styled.p`
	font-size: 20px;
	font-weight: 500;
	color: rgba(0, 0, 0, 0.45);
	padding: 6px;
	margin: 0;
`;

export const Label = styled.span`
	font-size: 20px;
	font-weight: 500;
	color: rgba(0, 0, 0, 0.45);
`;

export const QuantityLikes = styled.span`
	font-size: 26px;
	font-weight: 600;
`;
