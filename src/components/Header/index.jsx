import "./header.css";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Barber</h1>
        <p>Shop</p>
      </div>
      <nav className="nav">
        <ul>
          <li className="link">
            <a href="">Sobre mim</a>
          </li>
          <li className="link">
            <a href="">Serviços</a>
          </li>
          <li className="link">
            <a href="">Contatos</a>
          </li>
        </ul>
      </nav>
      <div className="info">
        <p className="location">
          <i>
            <IoLocationOutline size={25} color="#F1B55B" />
          </i>
          Monte Mor
        </p>
        <p className="phone">
          <i>
            <HiOutlinePhone size={25} color="#F1B55B" />
          </i>
          +19-91234-5678
        </p>
      </div>
    </header>
  );
}
