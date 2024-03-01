import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Earth from "./pages/earth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Earth />,
    errorElement: <Error />,
  },
  {
    path: "/earth",
    element: <Earth />,
    errorElement: <Error />,
  },
]);
