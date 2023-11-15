import './performanceChart.css'
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
} from 'recharts'

export default function PerformanceChart() {
	const data = {
		userId: 18,
		kind: {
			1: 'cardio',
			2: 'energy',
			3: 'endurance',
			4: 'strength',
			5: 'speed',
			6: 'intensity',
		},
		data: [
			{
				value: 200,
				kind: 1,
			},
			{
				value: 240,
				kind: 2,
			},
			{
				value: 80,
				kind: 3,
			},
			{
				value: 80,
				kind: 4,
			},
			{
				value: 220,
				kind: 5,
			},
			{
				value: 110,
				kind: 6,
			},
		],
	}

	if (data) {
		const kindNames = data.kind
		var res = data.data
		var resData = res.map((item) => {
			return { ...item, kind: kindNames[item.kind] }
		})

		return (
			<ResponsiveContainer id='performance' width='100%'>
				<RadarChart outerRadius={90} data={resData}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey='kind'
						tick={{ fill: 'white', fontSize: 14 }}
					/>
					<Radar
						name=''
						dataKey='value'
						fill='#ff0000'
						fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		)
	}
}
