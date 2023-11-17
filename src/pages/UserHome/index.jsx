import Header from '../../components/Header'
import LateralBar from '../../components/LateralBar'

import ActivityChart from '../../components/ActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import TodayScoreChart from '../../components/TodayScoreChart'

import KeyDataCard from '../../components/KeyDataCard'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { useParams } from 'react-router-dom'

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
const calorieCount = 2500
const proteinCount = 90
const lipidCount = 120
const carbohydrateCount = 150

export default function UserHome() {
	const { id } = useParams()

	return (
		<div>
			<Header />

			<Section>
				<LateralBar />

				<HomeSection>
					<Title>
						Bonjour <FirstName>{id}</FirstName>
					</Title>

					<SubTitle>
						Félicitation ! Vous avez explosé vos
						objectifs hier 👏
					</SubTitle>

					<InfoContainer>
						<ChartsContainer>
							<ActivityContainer>
								<ActivityChart />
							</ActivityContainer>

							<SmallCharts>
								<AverageSessionsChart />
								<PerformanceChart />
								<TodayScoreChart />
							</SmallCharts>
						</ChartsContainer>

						<NutritionalContent>
							<KeyDataCard
								name='calories'
								number={calorieCount}
							/>

							<KeyDataCard
								name='proteines'
								number={proteinCount}
							/>

							<KeyDataCard
								name='glucides'
								number={
									carbohydrateCount
								}
							/>

							<KeyDataCard
								name='lipides'
								number={lipidCount}
							/>
						</NutritionalContent>
					</InfoContainer>
				</HomeSection>
			</Section>
		</div>
	)
}
