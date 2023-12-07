import { useEffect, useState } from 'react'
import { redirect } from 'react-router-dom'

import Error from '../../pages/Error'

import user12 from '../../mocks/user12/user12.json'
import performance12 from '../../mocks/user12/performance12.json'
import activity12 from '../../mocks/user12/activity12.json'
import averageSessions12 from '../../mocks/user12/average-sessions12.json'

import user18 from '../../mocks/user18/user18.json'
import performance18 from '../../mocks/user18/performance18.json'
import activity18 from '../../mocks/user18/activity18.json'
import averageSessions18 from '../../mocks/user18/average-sessions18.json'

/**
 * Custom hook to fetch user-related data from multiple endpoints.
 *
 * @param {string} userId - The user ID.
 *  @param {boolean} isMock - A boolean indicating whether to use mock data.
 * @returns {Object} - An object containing user data, loading state, and error state.
 */
export function useUserData(userId, useMock = false) {
	const mockUser = {
		userData: parseInt(userId) === 12 ? user12 : user18,
		activityData: parseInt(userId) === 12 ? activity12 : activity18,
		averageSessionsData:
			parseInt(userId) === 12
				? averageSessions12
				: averageSessions18,
		performanceData:
			parseInt(userId) === 12 ? performance12 : performance18,
	}

	const userUrls = {
		userData: `http://localhost:3000/user/${userId}`,
		activityData: `http://localhost:3000/user/${userId}/activity`,
		averageSessionsData: `http://localhost:3000/user/${userId}/average-sessions`,
		performanceData: `http://localhost:3000/user/${userId}/performance`,
	}

	return useFetchURLS(useMock ? mockUser : userUrls, useMock)
}

/**
 * Custom hook to perform data fetching from multiple URLs concurrently.
 *
 * @param {Object} urls - An object containing URLs to fetch data.
 *  @param {boolean} isMock - A boolean indicating whether to use mock data.
 * @returns {Object} - An object containing merged data, loading state, and error state.
 */
function useFetchURLS(urls, useMock) {
	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState({ err: false, msg: '' })

	useEffect(() => {
		setLoading(true)

		async function fetchData() {
			try {
				const requests = Object.entries(urls).map(
					async ([key, url]) => {
						const response = await fetch(url)

						if (!response.ok) {
							setError({
								err: true,
								msg: 'Id unknown',
							})
						}

						const responseData =
							await response.json()
						return { [key]: responseData } // Use the key as the key for the resulting object
					},
				)

				const responseDataArray =
					await Promise.all(requests)

				// Convert the array of objects into a single object using reduce
				const mergedData = responseDataArray.reduce(
					(acc, curr) => ({ ...acc, ...curr }),
					{},
				)
				setData(mergedData)
			} catch (err) {
				console.error(err)

				setError({ err: true })
			} finally {
				setLoading(false)
			}
		}

		if (useMock) {
			setData(urls)
			setLoading(false)
			setError({ err: false })
		} else {
			fetchData()
		}
	}, [])

	return { data, isLoading, error }
}
