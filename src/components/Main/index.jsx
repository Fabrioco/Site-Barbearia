import "./main.css";
import icon from "../../assets/images/icon.png";
import { ButtonAppointment } from "../inputs/buttonDoAppointment";

export default function Main() {
  return (
    <main className="main">
      <div className="content">
        <img src={icon} alt="icone" className="img" />
        <h1 className="title">Relaxe, Fique Bem, Sinta a Confiança</h1>
        <p className="description">
          Seja bem vindo ao BarberShop, aqui somos uma familia que sempre
          estamos antes de tudo.
        </p>
        <div className="btns">
          <ButtonAppointment />
        </div>
      </div>
    </main>
  );
}
