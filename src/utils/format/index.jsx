import iconCalories from '../../assets/icon-keyData/bg/calories-icon.svg'
import iconProtein from '../../assets/icon-keyData/bg/protein-icon.svg'
import iconCarbs from '../../assets/icon-keyData/bg/carbs-icon.svg'
import iconFat from '../../assets/icon-keyData/bg/fat-icon.svg'

/**
 * The formatUserData function takes raw data and formats it into a structured object
 * containing user, score, keyData, activity, averageSessions, and performance information.
 *
 * @param {Object} data - The raw data object containing user, activity, average sessions, and performance data.
 * @returns {Object} - The formatted user data object.
 */
export function formatUserData(data) {
	const { userData, activityData, averageSessionsData, performanceData } =
		data

	const { user, score, keyData } = formatUser(userData.data)
	const activity = formatActivity(activityData.data)
	const averageSessions = formatAverageSessions(averageSessionsData.data)
	const performance = formatPerformance(performanceData.data)

	return {
		user: user,
		score: score,
		keyData: keyData,
		activity: activity,
		averageSessions: averageSessions,
		performance: performance,
	}
}

/**
 * The formatUser function extracts relevant information from the user data.
 *
 * @param {Object} user - The raw user data.
 * @returns {Object} - The formatted user information.
 */
function formatUser(user) {
	const score = formatScore(user.todayScore ? user.todayScore : user.score)
	const keyData = formatKeyData(user.keyData)

	return {
		user: user.userInfos,
		score: score,
		keyData: keyData,
	}
}

/**
 * The formatScore function converts user score data into a format suitable for rendering.
 *
 * @param {number} userScore - The user's score.
 * @returns {Object|null} - The formatted score information or null if score is invalid.
 */
function formatScore(userScore) {
	if (!userScore || userScore < 0 || userScore > 1) {
		return null
	}

	const startAngle = 90
	const scoreToPercentage = userScore * 100
	const endAngleCalc = startAngle + userScore * 360

	return {
		startAngle: startAngle,
		endAngle: endAngleCalc,
		scoreToPercentage: scoreToPercentage,
	}
}

/**
 * The formatKeyData function converts raw key data into a structured object
 * with formatted information about calories, protein, carbohydrates, and lipids.
 *
 * @param {Object} keyDatas - The raw key data.
 * @returns {Object} - The formatted key data.
 */
function formatKeyData(keyDatas) {
	const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
		keyDatas

	const kCal = 'kCal'
	const g = 'g'

	return {
		calorie: {
			count: calorieCount.toLocaleString('en-US'),
			name: 'calories',
			value: kCal,
			icon: iconCalories,
			alt: 'icône des calories',
		},
		protein: {
			count: proteinCount,
			name: 'protéines',
			value: g,
			icon: iconProtein,
			alt: 'icône des protéines',
		},
		carbohydrate: {
			count: carbohydrateCount,
			name: 'glucides',
			icon: iconCarbs,
			alt: 'icône des glucides',
			value: g,
		},
		lipid: {
			count: lipidCount,
			name: 'lipides',
			icon: iconFat,
			alt: 'icône des lipides',
			value: g,
		},
	}
}

/**
 * The formatActivity function converts raw activity data into a structured object
 * with information about sessions, min and max kilograms.
 *
 * @param {Object} activityData - The raw activity data.
 * @returns {Object|null} - The formatted activity information or null if data is invalid.
 */
function formatActivity(activityData) {
	if (
		!activityData ||
		!activityData.sessions ||
		activityData.sessions.length === 0
	) {
		return null
	}

	let minKg = activityData.sessions[0].kilogram
	let maxKg = activityData.sessions[0].kilogram

	const transformedSessions = activityData.sessions.map(
		(session, index) => {
			const transformedSession = {
				date: session.day,
				day: index + 1,
				kilogram: session.kilogram,
				calories: session.calories,
			}

			minKg = Math.min(minKg, session.kilogram)
			maxKg = Math.max(maxKg, session.kilogram)

			return transformedSession
		},
	)

	return {
		sessions: transformedSessions,
		minKg: minKg - 1,
		maxKg: maxKg + 1,
	}
}

/**
 * The formatAverageSessions function converts raw average sessions data into a structured object
 * with information about days of the week and session lengths.
 *
 * @param {Object} userAverageSessions - The raw average sessions data.
 * @returns {Object|null} - The formatted average sessions information or null if data is invalid.
 */
function formatAverageSessions(userAverageSessions) {
	if (
		!userAverageSessions ||
		!userAverageSessions.sessions ||
		userAverageSessions.sessions.length === 0
	) {
		return null
	}

	const transformedSessions = userAverageSessions.sessions.map(
		(session) => {
			const daysOfWeek = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D']

			const transformedSession = {
				day: daysOfWeek[session.day],
				sessionLength: session.sessionLength,
			}

			return transformedSession
		},
	)

	// add first ghost dot
	transformedSessions.unshift({
		day: '',
		sessionLength: userAverageSessions.sessions[0].sessionLength,
		activeDot: false,
	})

	// add last ghost dot
	transformedSessions.push({
		day: '',
		sessionLength:
			userAverageSessions.sessions[
				userAverageSessions.sessions.length - 1
			].sessionLength,
		activeDot: false,
	})

	return transformedSessions
}

/**
 * The formatPerformance function converts raw performance data into a structured object
 * with information about performance values and kinds, ordered by a predefined kind order.
 *
 * @param {Object} userPerformance - The raw performance data.
 * @returns {Object|null} - The formatted performance information or null if data is invalid.
 */
function formatPerformance(userPerformance) {
	if (
		!userPerformance ||
		!userPerformance.data ||
		userPerformance.data.length === 0
	) {
		return null
	}

	const kindOrder = [6, 5, 4, 3, 2, 1]

	const kindMapping = {
		1: 'Cardio',
		2: 'Energie',
		3: 'Endurance',
		4: 'Force',
		5: 'Vitesse',
		6: 'Intensité',
	}

	const transformedPerformance = userPerformance.data.map((item) => ({
		value: item.value,
		kind: kindMapping[item.kind],
	}))

	const findKeyByValue = (object, value) => {
		const foundKey = Object.keys(object).find(
			(key) => object[key] === value,
		)
		return foundKey !== undefined ? parseInt(foundKey) : null
	}

	const orderedPerformance = transformedPerformance.sort(
		(a, b) =>
			kindOrder.indexOf(findKeyByValue(kindMapping, a.kind)) -
			kindOrder.indexOf(findKeyByValue(kindMapping, b.kind)),
	)

	return orderedPerformance
}
