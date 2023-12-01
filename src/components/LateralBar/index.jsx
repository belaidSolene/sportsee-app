/**
 * The LateralBar component represents a vertical sidebar containing navigation icons
 * and a copyright notice. It utilizes the IconsNav component for the icon navigation.
 */

import IconsNav from '../IconsNav'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function LateralBar() {
	// JSX structure defining the LateralBar component layout
	return (
		<Bar>
			<IconsNav />
			<Copyright>Copyright, SportSee 2023</Copyright>
		</Bar>
	)
}

// Sidebar container styling
const Bar = styled.aside`
	background-color: ${colors.bgNav};
	width: 117px;
	min-height: 933px;
	padding: 270px 0 59px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

// Copyright notice styling
const Copyright = styled.p`
	font-size: 12px;

	transform: rotate(-90deg);
	margin-bottom: 59px;

	white-space: nowrap;
	text-align: center;
	color: ${colors.white};
`
