import iconCalories from '../../assets/icon-keyData/bg/calories-icon.svg'
import iconProteines from '../../assets/icon-keyData/bg/protein-icon.svg'
import iconGlucides from '../../assets/icon-keyData/bg/carbs-icon.svg'
import iconLipides from '../../assets/icon-keyData/bg/fat-icon.svg'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

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

export default function KeyDataCard({ type, number }) {
	let data

	switch (type) {
		case 'calories':
			data = {
				icon: iconCalories,
				alt: 'icône des calories',
				value: 'kCal',
			}
			break

		case 'proteines':
			data = {
				icon: iconProteines,
				alt: 'icône des protéines',
				value: 'g',
			}
			break
		case 'glucides':
			data = {
				icon: iconGlucides,
				alt: 'icône des glucides',
				value: 'g',
			}
			break
		case 'lipides':
			data = {
				icon: iconLipides,
				alt: 'icône des lipides',
				value: 'g',
			}
			break

		default:
			data = {
				icon: 'not found',
				alt: 'not found',
				value: ' not found',
			}
	}

	return (
		<Wrapper>
			<img src={data.icon} alt={data.alt} />
			<div>
				<ValueData>
					{type === 'calories'
						? number.toLocaleString('en-US')
						: number}
					{data.value}
				</ValueData>

				<TypeData>{type}</TypeData>
			</div>
		</Wrapper>
	)
}
