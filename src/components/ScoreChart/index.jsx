import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

import './scoreChart.css'

import { colors } from '../../utils/style/colors'

export default function ScoreChart({ data }) {
	const scoreValue = [
		{
			name: 'score',
			score: data.scoreToPercentage,
			fill: colors.primary,
		},
	]

	return (
		<ResponsiveContainer width='100%' height='100%' id='score'>
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
				<RadialBar dataKey='score' cornerRadius={10} />

				<circle
					cx='50%'
					cy='50%'
					fill={colors.white}
					r='75px'
				></circle>

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

ScoreChart.propTypes = {
	data: PropTypes.objectOf(
		PropTypes.shape({
			startAngle: PropTypes.number.isRequired,
			endAngle: PropTypes.number.isRequired,
			scoreToPercentage: PropTypes.number.isRequired,
		}),
	).isRequired,
}
