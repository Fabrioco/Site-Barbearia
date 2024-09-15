import React from "react";
import demo from "../../assets/images/fotodemo.jpg";
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
          <img src={demo} alt="" />
          <div className="text-overlay">
            <h3>foto 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit
              debitis temporibus quos 
            </p>
          </div>
        </div>
        <div className="gallery-four">
          <div className="post">
            <img src={demo} alt="" />
            <div className="text-overlay">
              <h3>foto 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                fugit debitis temporibus 
              </p>
            </div>
          </div>
          <div className="post">
            <img src={demo} alt="" />
            <div className="text-overlay">
              <h3>foto 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                fugit debitis temporibus 
              </p>
            </div>
          </div>
          <div className="post">
            <img src={demo} alt="" />
            <div className="text-overlay">
              <h3>foto 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                fugit debitis temporibus 
              </p>
            </div>
          </div>
          <div className="post">
            <img src={demo} alt="" />
            <div className="text-overlay">
              <h3>foto 1</h3>
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
