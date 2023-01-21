import React from "react";
import reactDom from "react-dom/client";
import { Title } from "../src/components/Title"; //named import
import Header from "../src/components/Title"; //default import
import * as xy from "../src/components/Title"; //for importing all
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


const Applayout = () => {
  console.log("Inside app");
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([ 
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Body />
      },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
      },
      {
       path: "/restaurant/:id",
       element: <RestaurantMenu/> 
      }
    ]
  }
])

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/ >);
