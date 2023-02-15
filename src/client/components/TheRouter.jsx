import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Products from "./Products/Products";
import ErrorPage from "./ErrorPage/ErrorPage";
import Root from "./Root/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },   
            {
                path: '/products',
                element: <Products/>
            },   
        ],
    },
]);

const TheRouter = () => {
    return(
        <RouterProvider router={router} />
        );
}

export default TheRouter;