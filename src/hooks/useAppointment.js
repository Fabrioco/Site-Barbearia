import React from "react";
import { AppointmentContext } from "../contexts/appointmentContext.jsx";

export const useAppointment = () => {
  return React.useContext(AppointmentContext);
};