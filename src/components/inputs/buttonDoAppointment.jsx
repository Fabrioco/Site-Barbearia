import { useAppointment } from "../../hooks/useAppointment";

export function ButtonAppointment() {
  const { toDoAppointment } = useAppointment();

  const handleClickAppointment = () => {
    toDoAppointment();
  };

  return (
    <button className="appointment" onClick={handleClickAppointment}>
      Fazer Agendamento
    </button>
  );
}
