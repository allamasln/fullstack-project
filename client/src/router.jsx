import { createBrowserRouter } from 'react-router-dom'

import Layout from './layout/Layout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import NewCountryPage from './pages/NewCountryPage'
import UpdateCountryPage from './pages/UpdateCountryPage'
// import DeleteCountryPage from './pages/DeleteCountryPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
// import LogoutPage from './pages/LogoutPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/country/new',
				element: <NewCountryPage />,
			},
			{
				path: '/country/:countryId',
				element: <DetailPage />,
			},
			{
				path: '/country/:countryId/update',
				element: <UpdateCountryPage />,
			},
			// {
			// 	path: '/country/:countryId/delete',
			// 	element: <DeleteCountryPage />,
			// },
			{
				path: '/signup',
				element: <RegisterPage />,
			},
			{
				path: '/signin',
				element: <LoginPage />,
			},
			// {
			// 	path: '/logout',
			// 	element: <LogoutPage />,
			// },
		],
	},
])

export default router
