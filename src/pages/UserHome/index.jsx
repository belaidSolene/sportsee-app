import Header from '../../components/Header'
import LateralBar from '../../components/LateralBar'

import ActivityChart from '../../components/ActivityChart'
import AverageSessionsChart from '../../components/AverageSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'

import KeyDataCard from '../../components/KeyDataCard'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

const Section = styled.section`
	display: flex;
`

const InfoContainer = styled.div`
	display: flex;
	margin-top: 50px;
	gap: 28px;
	justify-content: center;
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
	width: 20%;
`

export default function UserHome() {
	const calorieCount = 2500
	const proteinCount = 90
	const lipidCount = 120
	const carbohydrateCount = 150

	return (
		<div>
			<Header />

			<Section>
				<LateralBar />

				<InfoContainer>
					<ChartsContainer>
						<ActivityContainer>
							<ActivityChart />
						</ActivityContainer>

						<SmallCharts>
							<AverageSessionsChart />
							<PerformanceChart />
							<ScoreChart />
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
							number={carbohydrateCount}
						/>

						<KeyDataCard
							name='lipides'
							number={lipidCount}
						/>
					</NutritionalContent>
				</InfoContainer>
			</Section>
		</div>
	)
}
