import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import LogIn from "../log/LogIn";
import Register from "../log/Register";
import Science from "../Pages/Blog/Science";
import ArtDrawing from "../Pages/Blog/ArtDrawing";
import Business from "../Pages/Blog/Business";
import Language from "../Pages/Blog/Language";
import BasicScience from "../Pages/Blog/BasicScience";
import Law from "../Pages/Blog/Law";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/science",
        element: <Science />,
      },
      {
        path: "/art",
        element: <ArtDrawing />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/language",
        element: <Language />,
      },
      {
        path: "/basic-science",
        element: <BasicScience />,
      },
      {
        path: "/law",
        element: <Law />,
      },
    ],
  },
]);
export default router;
