/**
 * The ScoreChart component renders a radial bar chart using Recharts library to visually represent a score.
 * It takes a 'data' prop, which should be an object containing the following properties:
 *   - startAngle: The starting angle of the radial bar chart (in degrees).
 *   - endAngle: The ending angle of the radial bar chart (in degrees).
 *   - scoreToPercentage: The score value converted to a percentage.
 * The component displays the score as a radial bar, along with additional textual information.
 * It uses PropTypes for type validation.
 */

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

import PropTypes from 'prop-types'

// Importing necessary dependencies for styling
import { colors } from '../../utils/style/colors'

/**
 * @param {Object} props - The properties passed to the ScoreChart component.
 * @param {Object} props.data - An object containing data properties for rendering the radial bar chart.
 * @param {number} props.data.startAngle - The starting angle of the radial bar chart (in degrees).
 * @param {number} props.data.endAngle - The ending angle of the radial bar chart (in degrees).
 * @param {number} props.data.scoreToPercentage - The score value converted to a percentage.
 */
export default function ScoreChart({ data }) {
	// Array containing score data for the radial bar chart
	const scoreValue = [
		{
			name: 'score',
			score: data.scoreToPercentage,
			fill: colors.primary,
		},
	]

	// JSX structure defining the ScoreChart component layout
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<RadialBarChart
				cx='50%'
				cy='50%'
				data={scoreValue}
				innerRadius={300}
				outerRadius={80}
				barSize={13}
				startAngle={data.startAngle}
				endAngle={data.endAngle}
			>
				{/* RadialBar component representing the score */}
				<RadialBar dataKey='score' cornerRadius={10} />

				{/* Circle element as a background for the text elements */}
				<circle
					cx='50%'
					cy='50%'
					fill={colors.white}
					r='75px'
				></circle>

				{/* Text elements displaying additional information */}
				<text
					x='25'
					y='35'
					textAnchor='left'
					dominantBaseline='left'
				>
					Score
				</text>
				<text
					x='50%'
					y='44%'
					textAnchor='middle'
					dominantBaseline='middle'
					style={{ fontSize: '25px' }}
					fill='#282D30'
				>
					{data.scoreToPercentage + '%'}
				</text>
				<text
					x='50%'
					y='52%'
					textAnchor='middle'
					dominantBaseline='middle'
					style={{ fontSize: '18px' }}
					fill='#74798C'
				>
					de votre
				</text>
				<text
					x='50%'
					y='60%'
					textAnchor='middle'
					dominantBaseline='middle'
					style={{ fontSize: '18px' }}
					fill='#74798C'
				>
					objectif
				</text>
			</RadialBarChart>
		</ResponsiveContainer>
	)
}

// PropTypes for type validation of ScoreChart props
ScoreChart.propTypes = {
	data: PropTypes.shape({
		startAngle: PropTypes.number.isRequired,
		endAngle: PropTypes.number.isRequired,
		scoreToPercentage: PropTypes.number.isRequired,
	}).isRequired,
}
