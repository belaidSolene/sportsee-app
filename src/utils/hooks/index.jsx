import { useEffect, useState } from 'react'

export function useUserData(userId) {
	const userUrls = {
		userData: `http://localhost:3000/user/${userId}`,
		activityData: `http://localhost:3000/user/${userId}/activity`,
		averageSessionsData: `http://localhost:3000/user/${userId}/average-sessions`,
		performanceData: `http://localhost:3000/user/${userId}/performance`,
	}

	return useFetchURLS(userUrls)
}

function useFetchURLS(userUrls) {
	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		setLoading(true)

		async function fetchData() {
			try {
				const requests = Object.entries(userUrls).map(
					async ([key, url]) => {
						const response = await fetch(url)

						if (!response.ok) {
							setError(true)
						}

						const responseData =
							await response.json()
						return { [key]: responseData } // Utilisez la clé comme clé pour l'objet résultant
					},
				)

				const responseDataArray =
					await Promise.all(requests)
				// Convertissez le tableau d'objets en un objet unique en utilisant reduce
				const mergedData = responseDataArray.reduce(
					(acc, curr) => ({ ...acc, ...curr }),
					{},
				)
				setData(mergedData)
			} catch (err) {
				console.error(err)

				setError(true)
				throw err
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return { data, isLoading, error }
}
