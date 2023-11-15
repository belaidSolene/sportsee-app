import { ReactComponent as Logo } from '../../assets/logo/logo.svg'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

const StyleHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 0 90px 0 28px;
	gap: 149px;
	height: 91px;
	background-color: ${colors.bgNav};
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const StyleLink = styled.a`
	color: ${colors.white};
`

// id must be a hook for tomorrow to do

export default function Header() {
	return (
		<StyleHeader>
			<Logo />

			<StyledNav>
				<StyleLink>Accueil</StyleLink>

				<StyleLink>Profil</StyleLink>

				<StyleLink>Réglage</StyleLink>

				<StyleLink>Communauté</StyleLink>
			</StyledNav>
		</StyleHeader>
	)
}
