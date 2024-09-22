import "./story.css";
import pic from "../../assets/images/pic-story.jpg";
import { CiTimer } from "react-icons/ci";
import small from "../../assets/images/small-story-pic.jpg";
import big from "../../assets/images/big-story-pic.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ButtonAppointment } from "../inputs/buttonDoAppointment";

export default function Story() {
  return (
    <div className="story">
      <div className="history">
        <div className="text">
          <h1 className="title">História da Barbearia</h1>
          <p className="description">
            Nascemos com a paixão por transformar visual e oferecer uma
            experiência única. Desde o primeiro corte, nosso compromisso é com a
            qualidade e o bem-estar de cada cliente. Mais que uma barbearia,
            somos um espaço de estilo e confiança.
          </p>
          <ButtonAppointment />
        </div>
        <div className="timetable">
          <div className="border"></div>
          <img src={pic} alt="" className="pic" />
          <div className="info">
            <i className="icon">
              <CiTimer size={25} color="#fff" />
            </i>
            <span className="title">Horarios Abertos</span>
            <p>Seg-Sex 08:00 - 10:00</p>
          </div>
        </div>
      </div>
      <div className="socialmedia">
        <div className="pics">
          <img src={small} alt="pequena" className="small" />
          <img src={big} alt="grande" className="big" />
          <div className="border-big"></div>
        </div>
        <div className="contacts">
          <h2>Entre em Contato conosco</h2>
          <p>
            Quer agendar um horário ou tirar dúvidas? Fale com a gente! Estamos
            prontos para atendê-lo pelo WhatsApp, telefone ou redes sociais
          </p>
          <div className="info">
            <div className="address">
              <i className="icon">
                <IoLocationOutline size={25} color="#fff" />
              </i>
              <p>Monte Mor</p>
              <p>Rua Beato João XXIII</p>
            </div>
            <div className="phone-contact">
              <i className="icon">
                <HiOutlinePhone size={25} color="#fff" />
              </i>
              <p>+11-91234-5678</p>
              <p>Atendemos apenas quando aberto!</p>
            </div>
          </div>

          <nav className="social-nav">
            <span className="icon">
              <a href="">
                <FaFacebook color="#fff" size={35} />
              </a>
            </span>

            <span className="icon">
              <a href="">
                <FaInstagram color="#fff" size={35} />
              </a>
            </span>

            <span className="icon">
              <a href="">
                <FaTwitter color="#fff" size={35} />
              </a>
            </span>

            <span className="icon">
              <a href="">
                <FaLinkedin color="#fff" size={35} />
              </a>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
