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

export default function ActivityChart() {
	const data = {
		userId: 18,
		sessions: [
			{
				day: '2020-07-01',
				kilogram: 70,
				calories: 240,
			},
			{
				day: '2020-07-02',
				kilogram: 69,
				calories: 220,
			},
			{
				day: '2020-07-03',
				kilogram: 70,
				calories: 280,
			},
			{
				day: '2020-07-04',
				kilogram: 70,
				calories: 500,
			},
			{
				day: '2020-07-05',
				kilogram: 69,
				calories: 160,
			},
			{
				day: '2020-07-06',
				kilogram: 69,
				calories: 162,
			},
			{
				day: '2020-07-07',
				kilogram: 69,
				calories: 390,
			},
		],
	}

	if (data) {
		let minKg = -1
		let maxKg = 0
		data.sessions.forEach((session, index) => {
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
					data={data.sessions}
					margin={{
						top: 112,
						bottom: 62.5,
						left: 43,
						right: 90,
					}}
				>
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

					<Legend
						layout='horizontal'
						verticalAlign='top'
						align='right'
						iconType='circle'
						iconSize='8'
						wrapperStyle={{
							paddingTop: '24px',
							paddingRight: '24px',
						}}
						formatter={(value) => (
							<span className='legendText'>
								{value}
							</span>
						)}
					/>

					<text
						x='32'
						y='24'
						/* textAnchor='left'
						dominantBaseline='left' */
					>
						Activité quotidienne
					</text>
				</BarChart>
			</ResponsiveContainer>
		)
	}
}
