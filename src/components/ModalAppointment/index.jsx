import { useAppointment } from "../../contexts/appointmentContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./modalappointment.css";
import React from "react";

export function ModalAppointment() {
  const {
    isOpenedModal,
    setIsOpenedModal,
    date,
    setDate,
    time,
    setTime,
    name,
    setName,
    phone,
    setPhone,
  } = useAppointment();

  return (
    <div className={isOpenedModal ? "modal active" : "modal"}>
      <div className="content">
        <i className="close" onClick={() => setIsOpenedModal(false)}>
          <IoCloseCircleOutline size={40} color="#F1B55B" />
        </i>
        <h1 className="title">Fazer Agendamento</h1>
        <p className="description">
          Preencha todos os campos. Após o confirmar o agendamento, se
          necessário o barbeiro entrara em contato.
        </p>

        <div className="box-date">
          <p className="title">Selecione o dia</p>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className="date"
          />
          <button className="appointment">Proximo</button>
        </div>

        <div className="box-time">
          <p className="title">Horários</p>
          <select
            name="time"
            id="time"
            className="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          >
            <option value="">Selecione um horário</option>
            <option value="08-00">08:00</option>
            <option value="09-00">09:00</option>
            <option value="10-00">10:00</option>
            <option value="11-00">11:00</option>
          </select>
          <button
            className="appointment"
            onClick={() => verifyDay(`${date}_${time}`)}
          >
            Proximo
          </button>
        </div>

        <div className="form">
          <p className="title">Informações pessoais</p>
          <input
            type="text"
            placeholder="Nome"
            className="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            className="appointment"
            onClick={() => handleAppointment(`${date}_${time}`)}
          >
            Agendar
          </button>
        </div>
      </div>
    </div>
  );
}
