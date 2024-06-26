import ErrorPage from './components/pages/error-page'
import Home from './components/pages/Home/Home'
import Rooms from './components/pages/Rooms/Rooms'
import RoomDetails from './components/pages/RoomDetails/RoomDetails'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserProfile from './components/pages/Profile/UserProfile'
import MyListings from './components/pages/MyListings/MyListings'
import Layout from './components/layout/Layout'
import Form from './components/pages/CreateListing/Form'
import Login from './components/pages/Login/Login'
import Messages from './components/pages/Messages/Messages'

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
        path: '/messages',
        element: <Messages />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/rooms/:id',
        element: <RoomDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/user/:id/profile',
        element: <UserProfile />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/my-listings',
        element: <MyListings />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/create-listing/:id/step/:step',
        element: <Form />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/login',
        element: <Login />,
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
