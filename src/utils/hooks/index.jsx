import { useEffect, useState } from 'react'

export function useUserData(userId) {
	const userUrls = {
		user: `http://localhost:3000/user/${userId}`,
		userActivity: `http://localhost:3000/user/${userId}/activity`,
		userAverageSessions: `http://localhost:3000/user/${userId}/average-sessions`,
		userPerformance: `http://localhost:3000/user/${userId}/performance`,
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
						const responseData =
							await response.json()
						return { [key]: responseData.data } // Utilisez la clé comme clé pour l'objet résultant
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
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return { data, isLoading, error }
}
