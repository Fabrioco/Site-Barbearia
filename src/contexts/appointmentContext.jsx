import React from "react";
import { db } from "../services/firebaseConnection";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AppointmentContext = React.createContext({});

export function AppointmentProvider({ children }) {
  const [isOpenedModal, setIsOpenedModal] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const verifyDay = async (day) => {
    const docRef = doc(db, "dias_marcados", `${day}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      alert("Esse Horário ja foi marcado");
    }
  };

  const handleAppointment = async (dateHour) => {
    if (!date || !time || !name || !phone) {
      alert("Preencha todos os campos");
      return;
    }
    await setDoc(doc(db, "dias_marcados", `${dateHour}`), {
      [dateHour]: name,
    })
      .then(() => {
        setIsOpenedModal(false);
        setName("");
        setPhone("");
        setDate("");
        setTime("");
      })
      .catch((err) => {
        console.log(err);
      });
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

export const useAppointment = () => React.useContext(AppointmentContext);
