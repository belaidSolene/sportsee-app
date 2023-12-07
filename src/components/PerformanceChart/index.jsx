/**
 * The PerformanceChart component renders a radar chart using Recharts library to visualize performance data.
 * It takes a 'data' prop, which should be an array containing objects with 'value' and 'kind' properties.
 * The component displays a radar chart with polar axes and a filled radar area to represent performance values.
 * It uses PropTypes for type validation.
 */

import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

// Importing necessary dependencies for styling
import { colors } from '../../utils/style/colors'

/**
 * The PerformanceChart component renders a radar chart to visually represent performance data.
 *
 * @param {Object} props - The properties passed to the PerformanceChart component.
 * @param {Array} props.data - An array of objects representing performance data.
 * @param {number} props.data.value - The performance value.
 * @param {string} props.data.kind - The category or type of performance.
 */
export default function PerformanceChart({ data }) {
	if (data) {
		// JSX structure defining the PerformanceChart component layout
		return (
			<ResponsiveContainer height='100%' width='100%'>
				<RadarChart
					outerRadius='70%'
					data={data}
					margin={{
						top: 5,
						bottom: 5,
						left: 15,
						right: 15,
					}}
				>
					{/* PolarGrid to not display radial lines */}
					<PolarGrid radialLines={false} />

					{/* PolarAngleAxis representing the 'kind' property */}
					<PolarAngleAxis
						dataKey='kind'
						tick={{
							fill: `${colors.white}`,
							fontSize: 14,
						}}
					/>

					{/* Radar component representing the 'value' property */}
					<Radar
						name=''
						dataKey='value'
						fill={colors.primary}
						fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		)
	}
}

// PropTypes for type validation of PerformanceChart props
PerformanceChart.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number.isRequired,
			kind: PropTypes.string.isRequired,
		}),
	).isRequired,
}
