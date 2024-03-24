import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'
import ErrorPage from './components/pages/error-page'
import Home from './components/pages/Home/Home'
import Rooms from './components/pages/Rooms/Rooms'
import RoomDetails from './components/pages/RoomDetails/RoomDetails'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserProfile from './components/pages/Profile/UserProfile'
import MyListings from './components/pages/MyListings/MyListings'
import CreateListing from './components/pages/CreateListing/CreateListing'

const router = createBrowserRouter([
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
    element: <CreateListing />,
    errorElement: <ErrorPage />,
  },
])

function App() {
  return (
    <>
      <Header />
      <div>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  )
}

export default App
