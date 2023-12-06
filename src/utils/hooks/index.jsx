import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch user-related data from multiple endpoints.
 *
 * @param {string} userId - The user ID.
 * @returns {Object} - An object containing user data, loading state, and error state.
 */
export function useUserData(userId) {
	const userUrls = {
		userData: `http://localhost:3000/user/${userId}`,
		activityData: `http://localhost:3000/user/${userId}/activity`,
		averageSessionsData: `http://localhost:3000/user/${userId}/average-sessions`,
		performanceData: `http://localhost:3000/user/${userId}/performance`,
	}

	return useFetchURLS(userUrls)
}

/**
 * Custom hook to perform data fetching from multiple URLs concurrently.
 *
 * @param {Object} urls - An object containing URLs to fetch data.
 * @returns {Object} - An object containing merged data, loading state, and error state.
 */
function useFetchURLS(urls) {
	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		setLoading(true)

		async function fetchData() {
			try {
				const requests = Object.entries(urls).map(
					async ([key, url]) => {
						const response = await fetch(url)

						if (!response.ok) {
							setError(true)
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

				setError(true)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [error])

	return { data, isLoading, error }
}
