import { colors } from '../../utils/style/colors'
import './performanceChart.css'
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
} from 'recharts'

export default function PerformanceChart() {
	const dataInit = {
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

	const names = {
		cardio: 'Cardio',
		energy: 'Energie',
		endurance: 'Endurance',
		strength: 'Force',
		speed: 'Vitesse',
		intensity: 'Intensité',
	}

	const kindNames = dataInit.kind
	const res = dataInit.data
	const resData = res.map((item) => {
		return { ...item, kind: names[kindNames[item.kind]] }
	})

	const data = [
		{
			value: 110,
			kind: 'Intensité',
		},
		{
			value: 220,
			kind: 'Vitesse',
		},
		{
			value: 80,
			kind: 'Force',
		},
		{
			value: 80,
			kind: 'Endurance',
		},
		{
			value: 240,
			kind: 'Energie',
		},
		{
			value: 200,
			kind: 'Cardio',
		},
	]

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
