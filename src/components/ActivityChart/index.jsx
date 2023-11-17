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

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import './activityChart.css'

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

export default function ActivityChart({ data }) {
	if (data) {
		let minKg = -1
		let maxKg = 0
		data.forEach((session, index) => {
			session.day = index + 1

			if (minKg === -1 || minKg > session.kilogram) {
				minKg = session.kilogram
			}

			if (maxKg < session.kilogram) {
				maxKg = session.kilogram
			}
		})

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

		return (
			<ResponsiveContainer
				id='barChart'
				width='100%'
				height='100%'
			>
				<BarChart
					data={data}
					margin={{
						top: 112,
						bottom: 62.5,
						left: 43,
						right: 90,
					}}
				>
					<Legend
						layout='horizontal'
						verticalAlign='top'
						align='right'
						iconType='circle'
						iconSize='8'
						formatter={(value) => (
							<span className='legendText'>
								{value}
							</span>
						)}
					/>

					<CartesianGrid
						strokeDasharray='2'
						vertical={false}
						stroke='#DEDEDE'
					/>

					<XAxis
						dataKey='day'
						tickLine={false}
						tickMargin={20}
						height={25}
						stroke={colors.scaleActivity}
					/>

					<YAxis
						yAxisId='weight'
						orientation='right'
						axisLine={false}
						tickLine={false}
						tickMargin={45}
						domain={[minKg - 1, maxKg + 1]}
						tickCount={4}
						stroke={colors.scaleActivity}
					/>

					<YAxis yAxisId='calories' hide={true} />

					<Tooltip
						content={<CustomTooltip />}
						fillOpacity={0.5}
						cursor={{
							fill: 'rgba(196, 196, 196, 0.50)',
						}}
					/>

					<Bar
						yAxisId='weight'
						dataKey='kilogram'
						fill={colors.bgPerformance}
						radius={[100, 100, 0, 0]}
						barSize={8}
					/>

					<Bar
						yAxisId='calories'
						dataKey='calories'
						fill={colors.caloriesActivity}
						radius={[100, 100, 0, 0]}
						barSize={8}
					/>

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

ActivityChart.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			day: PropTypes.string.isRequired,
			kilogram: PropTypes.number.isRequired,
			calories: PropTypes.number.isRequired,
		}),
	).isRequired,
}
