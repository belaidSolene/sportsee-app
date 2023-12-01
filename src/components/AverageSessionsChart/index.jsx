/**
 * The AverageSessionsChart component renders a line chart using Recharts library to visualize the average session length data.
 * It takes a 'data' prop, which should be an array containing objects with 'day' and 'sessionLength' properties.
 * The component displays a line chart with a custom tooltip to show the session length on hover.
 *  It uses styled-components for styling and PropTypes for type validation.
 */

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// Importing the stylesheet for additional styling
import './averageSessionsChart.css'

/**
 * The AverageSessionsChart component renders a line chart to visually represent the average session length data.
 *
 * @param {Object} props - The properties passed to the AverageSessionsChart component.
 * @param {Array} props.data - An array of objects representing daily average session length data.
 * @param {number} props.data.day - The day of the week.
 * @param {number} props.data.sessionLength - The average session length in minutes.
 */
export default function AverageSessionsChart({ data }) {
	// Custom tooltip component for displaying additional information on hover
	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			const index = data.findIndex(
				(session) => session.day === label,
			)
			if (index !== 0 && index !== data.length - 1) {
				return (
					<WrapperTooltip>
						<p>{payload[0].value + ' min'}</p>
					</WrapperTooltip>
				)
			}
		}
		return null
	}

	// JSX structure defining the AverageSessionsChart component layout
	return (
		<ResponsiveContainer id='lineChart' width='100%'>
			<LineChart
				data={data}
				margin={{
					top: 90,
					right: 0,
					left: 0,
					bottom: 59,
				}}
			>
				{/* XAxis representing the day */}
				<XAxis
					dataKey='day'
					axisLine={false}
					tickLine={false}
					tickMargin={35}
					height={25}
					fillOpacity={0.5}
					stroke='#e1e1e1'
				/>

				{/* YAxis representing session length (hidden) */}
				<YAxis hide={true} />

				{/* Tooltip for displaying additional information on hover */}
				<Tooltip content={<CustomTooltip />} />

				{/* Line representing average session length */}
				<Line
					type='bump'
					connectNulls
					dataKey='sessionLength'
					stroke='white'
					strokeWidth={3}
					strokeOpacity={0.5}
					dot={false}
					fill='transparent'
				/>

				{/* Text elements for chart title */}
				<text
					x='30'
					y='40'
					width={40}
					textAnchor='left'
					dominantBaseline='left'
					fill='#e1e1e2'
					fillOpacity={0.5}
					style={{ fontSize: '18px' }}
				>
					Durée moyenne des
				</text>
				<text
					x='30'
					y='60'
					width={40}
					textAnchor='left'
					dominantBaseline='left'
					fill='#e1e1e2'
					fillOpacity={0.5}
					style={{ fontSize: '18px' }}
				>
					sessions
				</text>
			</LineChart>
		</ResponsiveContainer>
	)
}

// PropTypes for type validation of component props
AverageSessionsChart.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			day: PropTypes.string.isRequired,
			sessionLength: PropTypes.number.isRequired,
		}),
	).isRequired,
}

// Styled component for custom tooltip styling
const WrapperTooltip = styled.div`
	background-color: ${colors.white};
	color: black;
	text-align: center;
	padding: 1px 7px;
	font-size: 10px;
	line-height: 24px;
	font-weight: 500;
`
