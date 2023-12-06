import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			<h1>
				Une seule page est disponible : la page accueil de
				l'utilisateur
			</h1>
			<h2>avec deux profils possibles</h2>
			<ul>
				<li>
					<Link to={'/user/12'}>Karl</Link>
				</li>
				<li>
					<Link to={'/user/18'}>Cecilia</Link>
				</li>
			</ul>
		</div>
	)
}
