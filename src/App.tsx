import React, { useContext, createContext } from "react";

import { LoginPage } from "./routes/login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const ThemeContext = createContext("light");

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <div>SIGNUP PAGE</div>,
  },
  {
    path: "/dashboard",
    element: <div>DASHBOARD PAGE</div>,
  },
  {
    path: "/not-implemented-yet",
    element: <div>NOT IMPLEMENTED YET!</div>,
  },
]);

function App() {
  return (
    <ThemeContext.Provider value="pussy">
      <RouterProvider router={router}></RouterProvider>
    </ThemeContext.Provider>
  );
}

export default App;
