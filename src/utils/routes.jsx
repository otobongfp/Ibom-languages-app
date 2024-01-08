import App from "../App.jsx";
import { About, Search, Contribute } from "../pages";

export const routes = [
  {
    path: "/",
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
