import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Story from "./components/Story";
import CutValues from "./components/CutValues";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      <Story />
      <CutValues />
    </div>
  );
}
