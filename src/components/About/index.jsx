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
        Um espaço feito para você relaxar enquanto cuida do seu visual. Sinta-se
        em casa na nossa barbearia.
      </p>
      <div className="gallery">
        <div className="post">
          <img src={corte1} alt="Corte masculino" />
          <div className="text-overlay">
            <h3>Corte Masculino</h3>
            <p>
              Transforme seu visual com cortes modernos e personalizados. Aqui,
              seu estilo é prioridade!
            </p>
          </div>
        </div>
        <div className="posts">
          <div className="post">
            <img src={corte2} alt="Corte Infantil" />
            <div className="text-overlay">
              <h3>Corte Infantil</h3>
              <p>
                Os pequenos também merecem um estilo incrível. Traga seu filho
                para um corte divertido e descolado.
              </p>
            </div>
          </div>
          <div className="post">
            <img src={corte3} alt="Barba" />
            <div className="text-overlay">
              <h3>Bigode</h3>
              <p>
                Deixe seu bigode impecável com nossos serviços de modelagem e
                cuidados. Precisão e estilo para um visual marcante!
              </p>
            </div>
          </div>
          <div className="post">
            <img src={corte4} alt="Barba" />
            <div className="text-overlay">
              <h3>Barba</h3>
              <p>
                Cuide da sua barba com nossos serviços de barba e modelagem.
                Elegância e precisão em cada detalhe.
              </p>
            </div>
          </div>
          <div className="post">
            <img src={corte5} alt="Pintura de Cabelo" />
            <div className="text-overlay">
              <h3>Pintura de cabelo</h3>
              <p>
                Utilizamos os melhores produtos do mercado para garantir que seu
                cabelo e barba recebam o cuidado que merecem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
