/**
 * The Header component represents the header section of the user's home page.
 * It includes the application logo and navigation links using styled-components
 * and React Router DOM's Link component.
 *
 * @note The React Router Link components (to='/') are currently empty and need
 * to be updated with the appropriate destination paths.
 */

import { Link } from 'react-router-dom'

// Importing the SportSee logo as a React component
import { ReactComponent as Logo } from '../../assets/logo/logo.svg'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function Header() {
	// JSX structure defining the Header component layout
	return (
		<StyleHeader>
			<Logo />

			<StyledNav>
				{/* Link to the Home page (to be updated) */}
				<StyleLink to={''}>Accueil</StyleLink>

				{/* Link to the Profile page (to be updated) */}
				<StyleLink to={''}>Profil</StyleLink>

				{/* Link to the Settings page (to be updated) */}
				<StyleLink to={''}>Réglage</StyleLink>

				{/* Link to the Community page (to be updated) */}
				<StyleLink to={''}>Communauté</StyleLink>
			</StyledNav>
		</StyleHeader>
	)
}

// Styling for the Header component
// Header container styling
const StyleHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 0 90px 0 28px;
	gap: 149px;
	height: 91px;
	background-color: ${colors.bgNav};
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

// Navigation container styling
const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

// Link styling
const StyleLink = styled(Link)`
	color: ${colors.white};
`
