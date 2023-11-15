import IconsNav from '../IconsNav'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

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

const Copyright = styled.p`
	font-size: 12px;

	transform: rotate(-90deg);
	margin-bottom: 59px;

	white-space: nowrap;
	text-align: center;
	color: ${colors.white};
`

export default function LateralBar() {
	return (
		<Bar>
			<IconsNav />
			<Copyright>Copyright, SportSee 2023</Copyright>
		</Bar>
	)
}
