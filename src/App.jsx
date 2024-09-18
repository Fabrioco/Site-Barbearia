import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Story from "./components/Story";
import CutValues from "./components/CutValues";
import { AppointmentProvider } from "./contexts/appointmentContext";
import { ModalAppointment } from "./components/ModalAppointment";

export default function App() {
  return (
    <div className="container">
      <AppointmentProvider>
        <Header />
        <Main />
        <About />
        <Story />
        <CutValues />
        <ModalAppointment />
      </AppointmentProvider>
    </div>
  );
}
