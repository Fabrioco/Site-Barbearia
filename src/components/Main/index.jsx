import React from "react";
import "./main.css";
import icon from "../../assets/images/icon.png";
import { useAppointment } from "../../contexts/appointmentContext";

export default function Main() {
  const { toDoAppointment } = useAppointment();

  const handleClickAppointment = () => {
    toDoAppointment();
  };

  return (
    <main className="main">
      <div className="content">
        <img src={icon} alt="icone" className="img" />
        <h1 className="title">Relaxe, Fique Bem, Sinta a Confiança</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et
          tempora maxime animi ullam sequi, culpa asperiores nam obcaecati
          ipsum. Autem voluptatem omnis saepe illo consequuntur nobis natus,
          temporibus accusantium.
        </p>
        <div className="btns">
          <button className="appointment" onClick={handleClickAppointment}>
            Fazer Agendamento
          </button>
          <button className="contact">Contate Nos</button>
        </div>
      </div>
    </main>
  );
}
