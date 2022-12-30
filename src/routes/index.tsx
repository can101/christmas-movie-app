import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../components/layouts/mainLayout";
import Search from "../pages/search";
import FilmDetails from "../pages/film-details";

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
                path: "details/:id",
                element: <FilmDetails/>,
            },
            {
                path: "search",
                element: <Search/>,
            },
        ]
    }
]);

export default router;
