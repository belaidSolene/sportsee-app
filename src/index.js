import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserHome from './pages/UserHome'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<UserHome />
	</React.StrictMode>,
)
