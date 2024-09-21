import React from "react";
import corte1 from "../../assets/images/corte1.jpg";
import corte2 from "../../assets/images/corte2.jpg";
import corte3 from "../../assets/images/corte3.jpg";
import corte4 from "../../assets/images/corte4.jpg";
import corte5 from "../../assets/images/corte5.jpg";

import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="line"></div>
      <h1 className="title">Bem vindo a nossa barbearia</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ad
        dignissimos beatae ut odio animi at ullam nostrum neque totam quae
        expedita quasi debitis reprehenderit quod! Ipsum repellendus facilis
        laudantium.
      </p>
      <div className="gallery">
        <div className="post">
          <img src={corte1} alt="Corte masculino" />
          <div className="text-overlay">
            <h3>Corte Masculino</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit
              debitis temporibus quos
            </p>
          </div>
        </div>
        <div className="posts">
          <div className="post">
            <img src={corte2} alt="Corte Infantil" />
            <div className="text-overlay">
              <h3>Corte Infantil</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                fugit debitis temporibus
              </p>
            </div>
          </div>
          <div className="post">
            <img src={corte3} alt="Barba" />
            <div className="text-overlay">
              <h3>Bigode</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                fugit debitis temporibus
              </p>
            </div>
          </div>
          <div className="post">
            <img src={corte4} alt="Barba" />
            <div className="text-overlay">
              <h3>Barba</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                fugit debitis temporibus
              </p>
            </div>
          </div>
          <div className="post">
            <img src={corte5} alt="Pintura de Cabelo" />
            <div className="text-overlay">
              <h3>Pintura de cabelo</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                fugit debitis temporibus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
