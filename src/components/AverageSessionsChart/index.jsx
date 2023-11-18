import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import './averageSessionsChart.css'

const WrapperTooltip = styled.div`
	background-color: ${colors.white};
	color: black;
	text-align: center;
	padding: 1px 7px;
	font-size: 10px;
	line-height: 24px;
	font-weight: 500;
`

export default function AverageSessionsChart({ data }) {
	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			const index = data.sessions.findIndex(
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
					domain={[data.minLength, data.maxLength]}
				/>

				<Tooltip content={<CustomTooltip />} />

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

AverageSessionsChart.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			day: PropTypes.number.isRequired,
			sessionLength: PropTypes.number.isRequired,
		}),
	).isRequired,
}
