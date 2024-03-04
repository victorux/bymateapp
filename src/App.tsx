import Footer from "./components/layout/Footer/Footer"
import Header from "./components/layout/Header/Header"
import ErrorPage from "./components/pages/error-page";
import Home from "./components/pages/home/Home"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
]);


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
