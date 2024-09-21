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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et
          tempora maxime animi ullam sequi, culpa asperiores nam obcaecati
          ipsum. Autem voluptatem omnis saepe illo consequuntur nobis natus,
          temporibus accusantium.
        </p>
        <div className="btns">
          <ButtonAppointment />
        </div>
      </div>
    </main>
  );
}
