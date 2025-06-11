import { createBrowserRouter } from "react-router";
import MainLaout from "../Layouts/MainLaout";
import error_404 from "../Error/error_404";
import Home from "../Pages/Home";
import AllArtifacts from "../Pages/AllArtifacts";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: MainLaout,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: '/all-artifacts',
                element: <PrivateRoute><AllArtifacts /></PrivateRoute>
            },





            {
                path: '/login',
                Component: Login

            },
            {
                path: '/signUp',
                Component: Signup

            },
        ]
    },
    {
        path: '/*',
        Component: error_404
    }
])