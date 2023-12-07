/**
 * The UserHome component represents the main page for a user's home, displaying various charts and information.
 * It uses React Router for navigation and custom utility functions for data formatting.
 * The component fetches user data using the 'useUserData' hook and renders different charts and sections.
 * Uses styled-components for styling and breakpoints for responsive design.
 */

import { redirect, useParams } from 'react-router-dom'

// Custom utility hook and function imports
import { useUserData } from '../../utils/hooks'
import { formatUserData } from '../../utils/format/formatUserData'

import Error from '../Error'

import Header from '../../components/Header'
import LateralBar from '../../components/LateralBar'

import ActivityChart from '../../components/ActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import KeyDataCard from '../../components/KeyDataCard'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { device } from '../../utils/style/breakpoints'

export default function UserHome() {
	// Fetching user ID from route parameters
	const { id } = useParams()

	// Fetching user data using the 'useUserData' hook
	const { data, isLoading, error } = useUserData(id, false)

	if (isLoading) {
		return <div>isLoading...</div>
	}

	if (error.err) {
		// Redirecting to the home page in case of an error
		redirect('/')
		return <Error error={error.msg} />
	} else {
		// Destructuring formatted user data for rendering
		const {
			user,
			score,
			keyData,
			activity,
			averageSessions,
			performance,
		} = formatUserData(data)

		// JSX structure for rendering the UserHome component content
		return (
			<div>
				<Header />

				<Main>
					<LateralBar />

					<HomeSection>
						<Title>
							Bonjour{' '}
							<FirstName>
								{user.firstName}
							</FirstName>
						</Title>

						<SubTitle>
							Félicitation ! Vous avez
							explosé vos objectifs hier 👏
						</SubTitle>

						{/* InfoContainer containing charts and key data */}
						<InfoContainer>
							<ChartsContainer>
								<ActivityContainer>
									<ActivityChart
										data={
											activity
										}
									/>
								</ActivityContainer>

								{/* SmallCharts containing AverageSessionsChart, PerformanceChart, and ScoreChart */}
								<SmallCharts>
									<AverageSessionsContainer>
										<AverageSessionsChart
											data={
												averageSessions
											}
										/>
									</AverageSessionsContainer>

									<PerformanceContainer>
										<PerformanceChart
											data={
												performance
											}
										/>
									</PerformanceContainer>

									<ScoreContainer>
										<ScoreChart
											data={
												score
											}
										/>
									</ScoreContainer>
								</SmallCharts>
							</ChartsContainer>

							{/* KeyDataContainer for rendering KeyDataCard components */}
							<KeyDataContainer>
								{Object.keys(
									keyData,
								).map((key) => {
									const {
										count,
										name,
										value,
										icon,
										alt,
									} = keyData[key]
									return (
										<KeyDataCard
											key={
												key
											} // Assurez-vous d'utiliser une clé unique si vous avez plusieurs éléments dans la liste
											count={
												count
											}
											name={
												name
											}
											value={
												value
											}
											icon={
												icon
											}
											alt={
												alt
											}
										/>
									)
								})}
							</KeyDataContainer>
						</InfoContainer>
					</HomeSection>
				</Main>
			</div>
		)
	}
}

// Styled-components for styling the UserHome component
const Main = styled.main`
	display: flex;
`
const HomeSection = styled.section`
	flex: 1;
	margin: 5% 7% 6.6% 8%;
	@media (${device.laptopSmall}) {
		margin-right: 0;
	}
`

const Title = styled.h1`
	font-size: 34px;
	font-weight: 500;
`

const FirstName = styled.span`
	color: ${colors.primary};
`

const SubTitle = styled.h2`
	font-size: 18px;
	margin-top: 41px;
`

const InfoContainer = styled.div`
	display: flex;
	margin-top: 50px;
	justify-content: space-between;
	gap: 28px;
	width: 100%;
	@media (${device.laptopSmall}) {
		flex-direction: column-reverse;
		width: 90%;
	}
`

const ChartsContainer = styled.div`
	width: 70%;
	height: 1112px;

	@media (${device.laptopSmall}) {
		width: 100%;
		height: 1140px;
	}
`

const ActivityContainer = styled.div`
	margin-bottom: 5vh;
	background-color: ${colors.bgGraph};
	height: 44%;
	overflow: hidden;
	border-radius: 10px;
	width: 100%;

	@media (${device.laptopSmall}) {
		height: 400px;
	}
`

const SmallCharts = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 30px;
	margin-top: 20px;
	height: 300px;

	@media (${device.laptopSmall}) {
		grid-template: repeat(2, 300px) / repeat(2, 1fr);
	}
`

const AverageSessionsContainer = styled.div`
	height: inherit;
	background-color: red;
	border-radius: 10px;
	overflow: hidden;

	@media (${device.laptopSmall}) {
		grid-column: 1 / span 2;
		grid-row: 2;
	}
`

const PerformanceContainer = styled.div`
	height: inherit;
	overflow: hidden;
	background-color: #282d30;
	border-radius: 10px;
`

const ScoreContainer = styled.div`
	height: inherit;
	overflow: hidden;
	background-color: #fbfbfb;
    border-radius: 10px;
}
`

const KeyDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 39px;

	@media (${device.laptopSmall}) {
		flex-direction: row;
		justify-content: space-between;
		background-color: ${colors.bgGraph};
		gap: 0;
		box-sizing: border-box;
	}
`
