/**
 * The ActivityChart component renders a bar chart using Recharts library to visualize daily activity data.
 * It takes a 'data' prop, which should be an object containing sessions and activity range information.
 * The component displays two bars representing weight (in kilograms) and calories burned for each day.
 * It uses styled-components for styling and PropTypes for type validation.
 */
import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// Importing the stylesheet for additional styling
import './activityChart.css'

/**
 * The ActivityChart component renders a bar chart to visually represent daily activity data.
 *
 * @param {Object} props - The properties passed to the ActivityChart component.
 * @param {Object} props.data - An object containing data properties for rendering the bar chart.
 * @param {Array} props.data.sessions - An array of objects representing daily activity sessions.
 * @param {string} props.data.sessions.date - The date of the activity session.
 * @param {number} props.data.sessions.day - The day of the week.
 * @param {number} props.data.sessions.kilogram - The weight in kilograms for the session.
 * @param {number} props.data.sessions.calories - The calories burned for the session.
 * @param {number} props.data.minKg - The minimum weight range for the Y-axis.
 * @param {number} props.data.maxKg - The maximum weight range for the Y-axis.
 */
export default function ActivityChart({ data }) {
	if (data) {
		// Custom tooltip component for displaying additional information on hover
		const CustomTooltip = ({ active, payload }) => {
			if (active && payload && payload.length) {
				return (
					<WrapperTooltip>
						<p>{payload[0].value + 'kg'}</p>
						<p>{payload[1].value + 'Kcal'}</p>
					</WrapperTooltip>
				)
			}
			return null
		}

		// JSX structure defining the ActivityChart component layout
		return (
			<ResponsiveContainer
				id='barChart'
				width='100%'
				height='100%'
			>
				<BarChart
					data={data.sessions}
					margin={{
						top: 112,
						bottom: 62.5,
						left: 43,
						right: 90,
					}}
				>
					{/* Legend for the chart */}
					<Legend
						iconSize={8}
						verticalAlign='top'
						align='right'
						wrapperStyle={{
							top: '16px',
							right: '26px',
							fontSize: 15,
						}}
						iconType='circle'
						formatter={(value) => (
							<span className='legendText'>
								{value}
							</span>
						)}
					/>

					{/* CartesianGrid for styling the chart grid */}
					<CartesianGrid
						strokeDasharray='2'
						vertical={false}
						stroke='#DEDEDE'
					/>

					{/* XAxis representing the day */}
					<XAxis
						dataKey='day'
						tickLine={false}
						tickMargin={20}
						height={25}
						stroke={colors.scaleActivity}
					/>

					{/* YAxis representing weight (right side) */}
					<YAxis
						yAxisId='weight'
						orientation='right'
						axisLine={false}
						tickLine={false}
						tickMargin={45}
						domain={[data.minKg, data.maxKg]}
						tickCount={4}
						stroke={colors.scaleActivity}
					/>

					{/* YAxis representing calories (hidden) */}
					<YAxis yAxisId='calories' hide={true} />

					{/* Tooltip for displaying additional information on hover */}
					<Tooltip
						content={<CustomTooltip />}
						fillOpacity={0.5}
						cursor={{
							fill: 'rgba(196, 196, 196, 0.50)',
						}}
					/>

					{/* Bar representing weight */}
					<Bar
						yAxisId='weight'
						dataKey='kilogram'
						fill={colors.bgPerformance}
						radius={[100, 100, 0, 0]}
						barSize={8}
					/>

					{/* Bar representing calories */}
					<Bar
						yAxisId='calories'
						dataKey='calories'
						fill={colors.caloriesActivity}
						radius={[100, 100, 0, 0]}
						barSize={8}
					/>

					{/* Text element for chart title */}
					<text
						x='32'
						y='54'
						textAnchor='left'
						dominantBaseline='left'
					>
						Activité quotidienne
					</text>
				</BarChart>
			</ResponsiveContainer>
		)
	}
}

// PropTypes for type validation of ActivityChart props
ActivityChart.propTypes = {
	data: PropTypes.shape({
		sessions: PropTypes.arrayOf(
			PropTypes.shape({
				date: PropTypes.string.isRequired,
				day: PropTypes.number.isRequired,
				kilogram: PropTypes.number.isRequired,
				calories: PropTypes.number.isRequired,
			}),
		).isRequired,
		minKg: PropTypes.number.isRequired,
		maxKg: PropTypes.number.isRequired,
	}).isRequired,
}

// Styled component for custom tooltip styling
const WrapperTooltip = styled.div`
	background-color: ${colors.caloriesActivity};
	color: ${colors.white};
	font-size: 10px;
	text-align: center;
	padding: 11px;
	margin-left: 10px;
	line-height: 24px;
	font-weight: 500;
`
