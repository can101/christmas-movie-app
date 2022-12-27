import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../components/layouts/mainLayout";
import Search from "../pages/search";

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "about",
                element: <div>About</div>,
            },
            {
                path: "search",
                element: <Search/>,
            },
        ]
    },
]);

export default router;
