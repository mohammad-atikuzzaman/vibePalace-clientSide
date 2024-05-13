import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./Components/ErrorElement.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AuthContextComponent from "./Contexts/AuthContextComponent.jsx";
import Rooms from "./Pages/Rooms.jsx";
import Bookings from "./Pages/Bookings.jsx";
import ProtectedRoute from "./PersonalPages/ProtectedRoute.jsx";
import RoomShowDetails from "./Pages/RoomShowDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/bookings",
        element: (
          <ProtectedRoute>
            <Bookings></Bookings>
          </ProtectedRoute>
        ),
      },
      {
        path: "/room/:id",
        element: <RoomShowDetails></RoomShowDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextComponent>
      <RouterProvider router={router} />
    </AuthContextComponent>
  </React.StrictMode>
);
