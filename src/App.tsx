import React, { useContext, createContext } from "react";

import { LoginPage, SignupPage } from "./routes/auth";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./routes/dashboard";

const ThemeContext = createContext("light");

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>index</div>,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/not-implemented-yet",
    element: <div>NOT IMPLEMENTED YET!</div>,
  },
]);

function App() {
  return (
    <ThemeContext.Provider value="">
      <RouterProvider router={router}></RouterProvider>
    </ThemeContext.Provider>
  );
}

export default App;
