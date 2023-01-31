import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./HomePage/HomePage";
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
        ],
    },
]);

const TheRouter = () => {
    return(
        <RouterProvider router={router} />
        );
}

export default TheRouter;