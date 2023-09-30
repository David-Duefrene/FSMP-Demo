import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Containers/Home/Home.tsx'
import Create from './Containers/Create/Create.tsx'
import View from './Containers/View/View.tsx'
import ErrorPage from './error.tsx'

import './index.css'

const router = createBrowserRouter([
	{
		path: '/', element: <Home />, errorElement: <ErrorPage />,
	},
	{
		path: '/create', element: <Create />, errorElement: <ErrorPage />,
	},
	{
		path: '/view', element: <View />, errorElement: <ErrorPage />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
