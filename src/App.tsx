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
    <body>
      <RouterProvider router={router} />
    </body>
    <Footer />
    </>
  )
}

export default App
