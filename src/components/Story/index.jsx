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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            qui? Accusantium non quasi sint facilis, unde nesciunt consequatur
            quidem veniam laudantium eos, accusamus vero itaque? Doloribus
            repellat nostrum temporibus libero?
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
            <p>Seg-Sex 10:00 - 22:00</p>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsa
            magni, omnis reprehenderit et blanditiis minus ducimus
          </p>
          <div className="info">
            <div className="address">
              <i className="icon">
                <IoLocationOutline size={25} color="#fff" />
              </i>
              <p>Monte Mor</p>
              <p>rua com endereco completo</p>
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
