import React, { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AvailableFood from "../../Pages/AvailableFood/AvailableFood";
import ManageFood from "../../Pages/ManageFood/ManageFood";
import AddFood from "../../Pages/AddFood/AddFood";
import FoodRequest from "../../Pages/FoodRequest/FoodRequest";
import SingleFood from "../../Pages/SingleFood/SingleFood";
import UpdateFood from "../../Pages/ManageFood/UpdateFood";
import ManageSingleFood from "../../Pages/ManageFood/ManageSingleFood";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "availableFoods",
                element: <AvailableFood></AvailableFood>,
                loader: () => fetch("http://localhost:5000/availableFood"),
            },
            {
                path: "/manageFoods",
                element: <ManageFood></ManageFood>,
            },
            {
                path: "/foodRequests",
                element: <FoodRequest></FoodRequest>,
            },
            {
                path: "/addFood",
                element: <AddFood></AddFood>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "/singleFood/:id",
                element: <SingleFood></SingleFood>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/singleFood/${params.id}`),
            },
            {
                path: "/updateFood/:id",
                element: <UpdateFood></UpdateFood>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/singleFood/${params.id}`),
            },
            {
                path: "/manage/singleFood/:id",
                element: <ManageSingleFood></ManageSingleFood>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/food/request/${params.id}`),
            },
        ],
    },
]);

export default Router;
