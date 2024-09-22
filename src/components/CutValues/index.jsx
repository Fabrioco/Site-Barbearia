import { BsScissors } from "react-icons/bs";
import { FaBrush } from "react-icons/fa";
import { GiBeard } from "react-icons/gi";
import { TbMoustache } from "react-icons/tb";
import "./cutvalues.css";
import { ButtonAppointment } from "../inputs/buttonDoAppointment";

export default function CutValues() {
  return (
    <div className="cut">
      <div className="line"></div>
      <h1 className="title">Cortando Conversa Fiada</h1>
      <p className="description">
        Mais do que um corte, aqui você encontra estilo e boas histórias. Venha
        relaxar e renovar o visual enquanto bate aquele papo descontraído com os
        nossos barbeiros. O cuidado com seu cabelo e barba é só o começo!
      </p>
      <div className="values">
        <div className="option">
          <i className="icon">
            <BsScissors size={40} color="#F1B55B" />
          </i>
          <div>
            <p className="title">Corte de Cabelo</p>
            <p className="description">
              Transforme seu visual com um corte moderno e estiloso.
            </p>
          </div>
          <p className="price">R$ 30.00</p>
        </div>
        <div className="option">
          <i className="icon">
            <FaBrush size={40} color="#F1B55B" />
          </i>
          <div>
            <p className="title">Pintura de cabelo</p>
            <p className="description">
              Renove sua cor com qualidade e sofisticação.
            </p>
          </div>
          <p className="price">R$ 50.00</p>
        </div>
        <div className="option">
          <i className="icon">
            <GiBeard size={40} color="#F1B55B" />
          </i>
          <div>
            <p className="title">Corte de Barba</p>
            <p className="description">
              Barba bem cuidada para realçar seu estilo.
            </p>
          </div>
          <p className="price">R$ 10.00</p>
        </div>
        <div className="option">
          <i className="icon">
            <TbMoustache size={40} color="#F1B55B" />
          </i>
          <div>
            <p className="title">Corte de bigode</p>
            <p className="description">
              Bigode modelado com precisão e estilo.
            </p>
          </div>
          <p className="price">R$ 10.00</p>
        </div>
      </div>
      <ButtonAppointment />
    </div>
  );
}
