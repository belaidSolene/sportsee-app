/**
 * The KeyDataCard component represents a card displaying key data information,
 * including a count, name, value, and an icon.
 * It uses styled-components for styling and PropTypes for type validation.
 */

import PropTypes from 'prop-types'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { device } from '../../utils/style/breakpoints'

/**
 * @param {Object} props - The properties passed to the KeyDataCard component.
 * @property {number|string} count - The count value to be displayed (can be a number or a string).
 * @param {string} props.name - The name of the data type.
 * @param {string} props.value - The value of the data type.
 * @param {string} props.icon - The URL of the icon to be displayed.
 * @param {string} props.alt - The alt text for the icon.
 */
export default function KeyDataCard({ count, name, value, icon, alt }) {
	// JSX structure defining the KeyDataCard component layout
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

// PropTypes for type validation of KeyDataCard props
KeyDataCard.propTypes = {
	count: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}

// Styling for the card wrapper
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

// Styling for the icon inside the card
const Icon = styled.img`
	@media (${device.laptopSmall}) {
		width: 50px;
		height: 50px;
	}
`

// Styling for the numeric value inside the card
const ValueData = styled.p`
	margin: 0;
	font-size: 20px;
	font-weight: 700;
`

// Styling for the data type text inside the card
const TypeData = styled.p`
	font-size: 14px;
	color: ${colors.accentScore};
`
