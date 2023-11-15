import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import './averageSessionsChart.css'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'

export default function AverageSessionsChart() {
	const data = {
		userId: 18,
		sessions: [
			{
				day: 1,
				sessionLength: 30,
			},
			{
				day: 1,
				sessionLength: 30,
			},
			{
				day: 2,
				sessionLength: 40,
			},
			{
				day: 3,
				sessionLength: 50,
			},
			{
				day: 4,
				sessionLength: 30,
			},
			{
				day: 5,
				sessionLength: 30,
			},
			{
				day: 6,
				sessionLength: 50,
			},
			{
				day: 7,
				sessionLength: 50,
			},
			{
				day: 7,
				sessionLength: 50,
			},
		],
	}

	if (data) {
		const daysLabel = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']
		let minVal = -1
		let maxVal = 0
		data.sessions.forEach((session, index) => {
			session.day = daysLabel[index]
			if (session.sessionLength < minVal || minVal === -1)
				minVal = session.sessionLength
			if (session.sessionLength > maxVal)
				maxVal = session.sessionLength
		})

		return (
			<ResponsiveContainer id='lineChart' width='100%'>
				<LineChart
					data={data.sessions}
					margin={{
						top: 90,
						right: 0,
						left: 0,
						bottom: 59,
					}}
				>
					<XAxis
						dataKey='day'
						axisLine={false}
						tickLine={false}
						tickMargin={35}
						height={25}
						fillOpacity={0.5}
						stroke='#e1e1e1'
					/>

					<YAxis
						hide={true}
						domain={[minVal + 1, maxVal + 1]}
					/>

					<Tooltip content={<CustomTooltip />} />

					<Line
						type='natural'
						dataKey='sessionLength'
						stroke='white'
						strokeWidth={3}
						strokeOpacity={0.5}
						dot={false}
						fill='transparent'
					/>

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
}

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<WrapperTooltip>
				<p>{payload[0].value + ' min'}</p>
			</WrapperTooltip>
		)
	}
	return null
}

const WrapperTooltip = styled.div`
	background-color: ${colors.white};
	color: black;
	text-align: center;
	padding: 1px 7px;
	font-size: 10px;
	line-height: 24px;
	font-weight: 500;
`
