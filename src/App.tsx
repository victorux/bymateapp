import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ErrorPage from "./pages/error-page";
import Home from "./pages/home/Home"

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
