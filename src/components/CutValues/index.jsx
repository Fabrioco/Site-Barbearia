import React from "react";
import { BsScissors } from "react-icons/bs";
import { FaBrush } from "react-icons/fa";
import { GiBeard } from "react-icons/gi";
import { TbMoustache } from "react-icons/tb";
import "./cutvalues.css";

export default function CutValues() {
  return (
    <div className="cut">
      <div className="line"></div>
      <h1 className="title">Nós cortamos cabelos, não barbearias</h1>
      <p className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        nostrum dicta sapiente natus accusamus suscipit quisquam unde itaque
        veritatis eum. Voluptatem iste deleniti neque nostrum nesciunt aperiam
        sapiente laboriosam esse?
      </p>
      <div className="values">
        <div className="option">
          <i>
            <BsScissors size={40} color="#F1B55B" />
          </i>
          <div>
            <p className="title">Corte de Cabelo</p>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="price">R$ 30.00</p>
        </div>
        <div className="option">
          <i>
            <FaBrush size={40} color="#F1B55B" />
          </i>
          <div>
            <p className="title">Pintura de cabelo</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="price">R$ 50.00</p>
        </div>
        <div className="option">
          <i>
            <GiBeard size={40} color="#F1B55B" />
          </i>
          <div>
            <p className="title">Corte de Barba</p>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="price">R$ 10.00</p>
        </div>
        <div className="option">
          <i>
            <TbMoustache size={40} color="#F1B55B" />
          </i>
          <div>
            <p className="title">Corte de bigode</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur,
            </p>
          </div>
          <p className="price">R$ 10.00</p>
        </div>
      </div>
      <button className="appointment">Fazer Agendamento</button>
    </div>
  );
}
