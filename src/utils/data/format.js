export const activityData = {
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
	minKg: 68,
	maxKg: 71,
}

export const averageSessionData = {
	userId: 18,
	sessions: [
		{
			day: 1,
			sessionLength: 30,
			hide: true,
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
			activeDot: false,
		},
	],
}

/* 

const performanceData = {
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

*/

export const performanceData = [
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

const todayScore = 0.8

const startAngle = 90
const scoreToPercentage = todayScore * 100
const endAngleCalc = startAngle + todayScore * 360

export const score = {
	startAngle: startAngle,
	endAngle: endAngleCalc,
	scoreToPercentage: scoreToPercentage,
}

export const averageSession = {
	sessions: [
		{
			day: '', //vide
			sessionLength: 30, //valeur de averageSessionData.sessions[0].sessionLength
			activeDot: true, // nouvel attribut seulement pour lui
		},
		{
			day: 'L',
			sessionLength: 30,
		},
		{
			day: 'M',
			sessionLength: 40,
		},
		{
			day: 'M',
			sessionLength: 50,
		},
		{
			day: 'J',
			sessionLength: 30,
		},
		{
			day: 'V',
			sessionLength: 30,
		},
		{
			day: 'S',
			sessionLength: 50,
		},
		{
			day: 'D',
			sessionLength: 50,
		},
		{
			day: '',
			sessionLength: 50,
			activeDot: false,
		},
	],
	minLength: 20,
	maxLength: 60,
}
