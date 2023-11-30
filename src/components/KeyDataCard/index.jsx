import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { device } from '../../utils/style/breakpoints'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
	background-color: ${colors.bgGraph};
	overflow: hidden;
	border-radius: 10px;
	padding: 32px;
	width: 258px;
	height: 124px;
	line-height: 24px;

	@media (${device.laptopSmall}) {
		width: 160px;
		height: 100px;
		padding: 0px 20px;
	}
`

const Icon = styled.img`
	@media (${device.laptopSmall}) {
		width: 50px;
		height: 50px;
	}
`

const ValueData = styled.p`
	margin: 0;
	font-size: 20px;
	font-weight: 700;
`

const TypeData = styled.p`
	font-size: 14px;
	color: ${colors.accentScore};
`

export default function KeyDataCard({ count, name, value, icon, alt }) {
	return (
		<Wrapper>
			<Icon src={icon} alt={alt} />
			<div>
				<ValueData>
					{count}
					{value}
				</ValueData>

				<TypeData>{name}</TypeData>
			</div>
		</Wrapper>
	)
}
