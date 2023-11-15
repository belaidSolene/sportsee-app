import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import './scoreChart.css'

import { colors } from '../../utils/style/colors'

export default function TodayScoreChart() {
	const todayScore = 0.8

	const startAngle = 90
	const scoreToPercentage = todayScore * 100
	const endAngleCalc = startAngle + todayScore * 360

	const scoreValue = [
		{
			name: 'Score',
			score: scoreToPercentage,
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
				startAngle={startAngle}
				endAngle={endAngleCalc}
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
					{scoreToPercentage + '%'}
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
