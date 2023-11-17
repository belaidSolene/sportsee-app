import icon1 from '../../assets/iconsNav/icon-1.svg'
import icon2 from '../../assets/iconsNav/icon-2.svg'
import icon3 from '../../assets/iconsNav/icon-3.svg'
import icon4 from '../../assets/iconsNav/icon-4.svg'

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

const StyledLi = styled.li`
	height: 64px;
	width: 64px;
	background-color: ${colors.white};
	border-radius: 6px;

	margin: 20px 0;
`

const StyledLink = styled.a`
	display: inline-flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`

export default function IconsNav() {
	const iconsLink = [
		{
			icon: icon1,
			alt: 'Lien pour des activités calmes',
			link: '',
		},
		{
			icon: icon2,
			alt: 'Lien pour des activités aquatiques',
			link: '',
		},
		{
			icon: icon3,
			alt: 'Lien pour des activités en extérieur',
			link: '',
		},
		{
			icon: icon4,
			alt: 'Lien pour des activités musclées',
			link: '',
		},
	]

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
