import "./App.css";
import { Component } from "./components/Component";
import { ParallaxProvider } from "react-scroll-parallax";
import Banner from "./components/Banner";
import Spring from "./components/Spring";

export default function App() {
  return (
    <ParallaxProvider>
      {/* <Component /> */}

      {/* <Banner /> */}
      <Spring />
    </ParallaxProvider>
  );
}
