import './scoreChart.css'

import { Cell, ResponsiveContainer, PieChart, Pie } from 'recharts'

export default function ScoreChart() {
	const data = 0.12

	if (data) {
		const values = [{ value: data }, { value: 1 - data }]
		const COLORS = ['#ff0000', '#fbfbfb']

		return (
			<ResponsiveContainer id='score'>
				<PieChart>
					<Pie
						data={[{ value: 1 }]}
						dataKey='value'
						cx='50%'
						cy='50%'
						outerRadius={80}
						fill='#ffffff'
					/>
					<Pie
						data={values}
						dataKey='value'
						cx='50%'
						cy='50%'
						innerRadius={80}
						outerRadius={93}
					>
						{values.map((entry, index) => (
							<Cell
								key={index}
								fill={COLORS[index]}
							/>
						))}
					</Pie>
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
						y='47%'
						textAnchor='middle'
						dominantBaseline='middle'
						style={{ fontSize: '25px' }}
						fill='#282D30'
					>
						{data * 100 + '%'}
					</text>
					<text
						x='50%'
						y='56%'
						textAnchor='middle'
						dominantBaseline='middle'
						style={{ fontSize: '18px' }}
						fill='#74798C'
					>
						de votre
					</text>
					<text
						x='50%'
						y='63%'
						textAnchor='middle'
						dominantBaseline='middle'
						style={{ fontSize: '18px' }}
						fill='#74798C'
					>
						objectif
					</text>
				</PieChart>
			</ResponsiveContainer>
		)
	}
}
