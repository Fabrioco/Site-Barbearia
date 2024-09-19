import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Story from "./components/Story";
import CutValues from "./components/CutValues";
import { AppointmentProvider } from "./contexts/appointmentContext";
import { ModalAppointment } from "./components/ModalAppointment";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  React.useEffect(() => {
    const button = document.getElementsByClassName("to-top")[0];

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

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className="container">
      <ToastContainer />
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
        <button className="to-top" style={{ display: "none" }}>
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
