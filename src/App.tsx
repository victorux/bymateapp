import ErrorPage from './components/pages/error-page'
import Home from './components/pages/Home/Home'
import Rooms from './components/pages/Rooms/Rooms'
import RoomDetails from './components/pages/RoomDetails/RoomDetails'

import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom'
import UserProfile from './components/pages/Profile/UserProfile'
import MyListings from './components/pages/MyListings/MyListings'
import Layout from './components/layout/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/rooms',
        element: <Rooms />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/rooms/:id',
        element: <RoomDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/user/:id',
        element: <UserProfile />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/my-listings',
        element: <MyListings />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/create-listing',
        element: <Form />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
