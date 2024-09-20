import "./header.css";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
import { toast } from "react-toastify";

export default function Header() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("+19-91234-5678");

    toast.success("Número copiado para a área de transferência!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Barber</h1>
        <p>Shop</p>
      </div>
      <nav className="nav">
        <ul>
          <li className="link">
            <a href="#about">Barbearia</a>
          </li>
          <li className="link">
            <a href="#story">História da Barbearia</a>
          </li>
          <li className="link">
            <a href="#cut">Cortes</a>
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
        <p className="phone" onClick={copyToClipboard}>
          <i>
            <HiOutlinePhone size={25} color="#F1B55B" />
          </i>
          +19-91234-5678
        </p>
      </div>
    </header>
  );
}
