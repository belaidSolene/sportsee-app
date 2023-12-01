/**
 * The IconsNav component serves as a navigation bar featuring icons, each associated with specific activities.
 * Links are organized in the 'iconsLink' array, requiring the image link, alternative text, and destination link.
 * The styling is achieved using styled-components.
 *
 * @note Currently, the links in the 'iconsLink' array are placeholders and remain empty.
 */

import { Link } from 'react-router-dom'

// Importing icons for the IconsNav component
import icon1 from '../../assets/iconsNav/icon-1.svg'
import icon2 from '../../assets/iconsNav/icon-2.svg'
import icon3 from '../../assets/iconsNav/icon-3.svg'
import icon4 from '../../assets/iconsNav/icon-4.svg'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function IconsNav() {
	// Array containing information about each icon and its link
	const iconsLink = [
		{
			icon: icon1,
			alt: 'Lien pour des activités calmes',
			link: '', // Placeholder for the destination path (to be updated)
		},
		{
			icon: icon2,
			alt: 'Lien pour des activités aquatiques',
			link: '', // Placeholder for the destination path (to be updated)
		},
		{
			icon: icon3,
			alt: 'Lien pour des activités en extérieur',
			link: '', // Placeholder for the destination path (to be updated)
		},
		{
			icon: icon4,
			alt: 'Lien pour des activités musclées',
			link: '', // Placeholder for the destination path (to be updated)
		},
	]

	// JSX structure defining the IconsNav component layout
	return (
		<nav>
			<ul>
				{iconsLink.map(({ icon, alt, link }, index) => {
					return (
						<StyledLi key={index}>
							<StyledLink to={link}>
								<img
									src={icon}
									alt={alt}
								/>
							</StyledLink>
						</StyledLi>
					)
				})}
			</ul>
		</nav>
	)
}

// Icon container styling
const StyledLi = styled.li`
	height: 64px;
	width: 64px;
	background-color: ${colors.white};
	border-radius: 6px;

	margin: 20px 0;
`
// Link styling
const StyledLink = styled(Link)`
	display: inline-flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`
