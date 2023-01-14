import React from "react";
import reactDom from "react-dom/client";
import { Title } from "../src/components/Title"; //named import
import Header from "../src/components/Title"; //default import
import * as xy from "../src/components/Title"; //for importing all
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import { IMG_CDN_URL } from "../src/config";

const root = reactDom.createRoot(document.getElementById("root"));

const Applayout = () => {
  console.log("Inside app");
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

root.render(<Applayout />);
