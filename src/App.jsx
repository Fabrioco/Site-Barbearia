import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Story from "./components/Story";
import CutValues from "./components/CutValues";
import { AppointmentProvider } from "./contexts/appointmentContext";
import { ModalAppointment } from "./components/ModalAppointment";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function App() {
  const button = document.querySelector(".to-top");
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <div className="container">
      <AppointmentProvider>
        <Header />
        <section id="main">
          <Main />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="story">
          <Story />
        </section>
        <section id="cut">
          <CutValues />
        </section>
        <ModalAppointment />
        <button className="to-top">
          <a href="#main">
            <i>
              <FaArrowAltCircleUp />
            </i>
          </a>
        </button>
      </AppointmentProvider>
    </div>
  );
}
