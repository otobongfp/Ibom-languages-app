import App from "../App.jsx";
import { Home, About, Search, Contribute } from "../pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "contribute",
        element: <Contribute />,
      },
    ],
  },
];
