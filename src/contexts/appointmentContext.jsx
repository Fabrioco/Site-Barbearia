import React from "react";
import { db } from "../services/firebaseConnection";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export const AppointmentContext = React.createContext({});

export function AppointmentProvider({ children }) {
  const [isOpenedModal, setIsOpenedModal] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const verifyDay = async (day) => {
    if (!date || !time) {
      toast.error("Preencha todos os campos");
      return;
    }
    const docRef = doc(db, "dias_marcados", `${day}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      toast.error("Esse Horário já foi marcado");
      return false;
    } else {
      toast.success("Horário livre");
      return true;
    }
  };

  const handleAppointment = async (dateHour) => {
    if (!date || !time || !name || !phone) {
      toast.error("Preencha todos os campos");
      return;
    }

    try {
      await setDoc(doc(db, "dias_marcados", `${dateHour}`), {
        [dateHour]: name,
      });

      toast.success("Agendamento realizado com sucesso");
      setIsOpenedModal(false);
      setName("");
      setPhone("");
      setDate("");
      setTime("");
      return true;
    } catch (err) {
      toast.error("Erro ao agendar");
      console.log(err);
      return false;
    }
  };

  const toDoAppointment = () => {
    setIsOpenedModal(true);
  };

  return (
    <AppointmentContext.Provider
      value={{
        toDoAppointment,
        verifyDay,
        isOpenedModal,
        setIsOpenedModal,
        handleAppointment,
        name,
        setName,
        phone,
        setPhone,
        date,
        setDate,
        time,
        setTime,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

AppointmentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
