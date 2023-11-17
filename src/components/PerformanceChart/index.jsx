import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

import { colors } from '../../utils/style/colors'
import './performanceChart.css'

export default function PerformanceChart({ data }) {
	if (data) {
		return (
			<ResponsiveContainer id='performance' width='100%'>
				<RadarChart
					outerRadius={90}
					data={data}
					margin={{
						top: 12,
						bottom: 12,
						left: 12,
						right: 12,
					}}
				>
					<PolarGrid radialLines={false} />

					<PolarAngleAxis
						dataKey='kind'
						tick={{
							fill: `${colors.white}`,
							fontSize: 14,
						}}
					/>

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

PerformanceChart.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number.isRequired,
			kind: PropTypes.string.isRequired,
		}),
	).isRequired,
}
