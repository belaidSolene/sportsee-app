import { redirect, useParams } from 'react-router-dom'

import { useUserData } from '../../utils/hooks'
import { formatUserData } from '../../utils/format'

import Error from '../Error'

import Header from '../../components/Header'
import LateralBar from '../../components/LateralBar'

import ActivityChart from '../../components/ActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import KeyDataCard from '../../components/KeyDataCard'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { device } from '../../utils/style/breakpoints'

export default function UserHome() {
	const { id } = useParams()

	const { data, isLoading, error } = useUserData(id, true)

	if (isLoading) {
		return <div>isLoading...</div>
	}

	if (error) {
		redirect('/')
		return <Error />
	} else {
		const {
			user,
			score,
			keyData,
			activity,
			averageSessions,
			performance,
		} = formatUserData(data)

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

						<InfoContainer>
							<ChartsContainer>
								<ActivityContainer>
									<ActivityChart
										data={
											activity
										}
									/>
								</ActivityContainer>

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

							<NutritionalContent>
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
							</NutritionalContent>
						</InfoContainer>
					</HomeSection>
				</Main>
			</div>
		)
	}
}

const Main = styled.main`
	display: flex;
`
const HomeSection = styled.section`
	width: 100%;
	margin: 67px 90px 88px 107px;

	@media (${device.laptopSmall}) {
		margin: 50px 67px 66px 80px;
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
	}
`

const ChartsContainer = styled.div`
	width: 70%;
	height: 1212px;

	@media (${device.laptopSmall}) {
		width: 100%;
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
	width: 100%;
	height: 300px;

	@media (${device.laptopSmall}) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(2, 300px);
	}
`

const AverageSessionsContainer = styled.div`
	height: inherit;
	@media (${device.laptopSmall}) {
		grid-column: 1 / span 2;
		grid-row: 2;
	}
`
const PerformanceContainer = styled.div`
	height: inherit;
`

const ScoreContainer = styled.div`
	height: inherit;
`

const NutritionalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 39px;

	@media (${device.laptopSmall}) {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		background-color: ${colors.bgGraph};
		gap: 0;
	}
`
