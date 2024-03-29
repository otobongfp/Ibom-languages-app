import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { routes } from "./utils/routes.jsx";

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
