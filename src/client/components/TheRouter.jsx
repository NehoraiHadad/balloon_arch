import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Products from "./Products/Products";
import ErrorPage from "./ErrorPage/ErrorPage";
import Root from "./Root/Root";
import AboutUs from "./AboutUs/AboutUs";
import Categories from "./Categories/Categories";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/AboutUs",
          element: <AboutUs />,
        },
      ],
    },
  ],
  {
    basename: "/balloon_arch",
  }
);

const TheRouter = () => {
  return <RouterProvider router={router} />;
};

export default TheRouter;
