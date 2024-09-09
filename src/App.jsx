import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  let paths = createBrowserRouter([
    { path: "", element: <Layout />, children: [{path:"about" , element:<About/>},
      {path:"contact" , children:<Contact/>     

      }
      , {path:"portfolio" , element:<Portfolio/>}
      , {}
    ] },
  ]);

  return <>
  
  <RouterProvider router={paths} ></RouterProvider>
  
  
  </>;
}

export default App;
