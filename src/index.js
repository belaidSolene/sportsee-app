import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import UserHome from './pages/UserHome'
import Error from './pages/Error'

const router = createBrowserRouter([
	{
		path: '/user/:id',
		element: <UserHome />,
		errorElement: <Error />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
