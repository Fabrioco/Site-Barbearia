import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Story from "../components/Story";
import CutValues from "../components/CutValues";
import { AppointmentProvider } from "../contexts/appointmentContext.jsx";
import { ModalAppointment } from "../components/ModalAppointment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonToTop } from "../components/inputs/buttonToTop";

export default function App() {
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
        <ButtonToTop />
      </AppointmentProvider>
    </div>
  );
}
