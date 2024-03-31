import App from "../App.jsx";
import HomePageLayout from "../layouts/HomePageLayout.jsx";
import { Home, About, Search, Contribute, Contact } from "../pages";

export const routes = [
  {
    path: "/",
    element: <HomePageLayout />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dictionary",
        element: <Search />,
      },
    ],
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "contribute",
        element: <Contribute />,
      },
    ],
  },
];
