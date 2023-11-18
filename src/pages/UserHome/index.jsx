import { useParams } from 'react-router-dom'

import { useUserData } from '../../utils/hooks'
import { formatUserData } from '../../utils/format'

import Header from '../../components/Header'
import LateralBar from '../../components/LateralBar'

import ActivityChart from '../../components/ActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import KeyDataCard from '../../components/KeyDataCard'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function UserHome() {
	const { id } = useParams()

	const { data, isLoading, error } = useUserData(id)

	if (isLoading) {
		return <div>isLoading...</div>
	}

	const { user, score, activity, averageSessions, performance } =
		formatUserData(data)

	console.log(score)

	const firstName = user.userInfos.firstName
	const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
		user.keyData

	return (
		<div>
			<Header />

			<Section>
				<LateralBar />

				<HomeSection>
					<Title>
						Bonjour{' '}
						<FirstName>{firstName}</FirstName>
					</Title>

					<SubTitle>
						Félicitation ! Vous avez explosé vos
						objectifs hier 👏
					</SubTitle>

					<InfoContainer>
						<ChartsContainer>
							<ActivityContainer>
								<ActivityChart
									data={activity}
								/>
							</ActivityContainer>

							<SmallCharts>
								<AverageSessionsChart
									data={
										averageSessions
									}
								/>
								<PerformanceChart
									data={
										performance
									}
								/>
								<ScoreChart
									data={score}
								/>
							</SmallCharts>
						</ChartsContainer>

						<NutritionalContent>
							<KeyDataCard
								type='calories'
								number={calorieCount}
							/>

							<KeyDataCard
								type='proteines'
								number={proteinCount}
							/>

							<KeyDataCard
								type='glucides'
								number={
									carbohydrateCount
								}
							/>

							<KeyDataCard
								type='lipides'
								number={lipidCount}
							/>
						</NutritionalContent>
					</InfoContainer>
				</HomeSection>
			</Section>
		</div>
	)
}

const Section = styled.section`
	display: flex;
`
const HomeSection = styled.section`
	width: 100%;
	margin: 67px 90px 88px 107px;
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
`

const ChartsContainer = styled.div`
	width: 70%;
	height: 1212px;
`

const ActivityContainer = styled.div`
	margin-bottom: 5vh;
	background-color: ${colors.bgGraph};
	height: 44%;
	overflow: hidden;
	border-radius: 10px;
`

const SmallCharts = styled.div`
	display: flex;
	gap: 30px;
	justify-content: center;
	margin-top: 20px;
	height: 263px;
`

const NutritionalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 39px;
`
