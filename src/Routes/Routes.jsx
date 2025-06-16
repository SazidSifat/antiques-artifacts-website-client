import { createBrowserRouter } from "react-router";
import MainLaout from "../Layouts/MainLaout";
import error_404 from "../Error/error_404";
import Home from "../Pages/Home";
import AllArtifacts from "../Pages/AllArtifacts";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddArtifact from "../Pages/AddArtifact";
import ArtifactsDetails from "../Pages/ArtifactsDetails";
import axios from "axios";
import Myartifacts from "../Pages/Myartifacts";
import UpdateArtifacts from "../Pages/UpdateArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";
import Loading from "../Components/Loading";


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
                element: <AllArtifacts />
            },
            {
                path: "/artifacts-details/:id",
                element: <PrivateRoute><ArtifactsDetails /></PrivateRoute>,
            },
            {
                path: '/add-artifacts',
                element: <PrivateRoute><AddArtifact /></PrivateRoute>
            },
            {
                path: '/update-artifacts/:id',
                element: <PrivateRoute><UpdateArtifacts /></PrivateRoute>,
              
            },
            {
                path: '/myArtifacts',
                element: <PrivateRoute><Myartifacts /></PrivateRoute>,
            },
            {
                path: '/myLikedArtifacts',
                element: <PrivateRoute><LikedArtifacts /></PrivateRoute>,
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