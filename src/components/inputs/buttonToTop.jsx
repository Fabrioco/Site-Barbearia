import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export function ButtonToTop() {
  const button = React.useRef(null);

  React.useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 70) {
        button.current.style.display = "block";
      } else {
        button.current.style.display = "none";
      }
    };
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="to-top"
      style={{ display: "none" }}
      onClick={scrollToTop}
      ref={button}
    >
      <i>
        <FaArrowAltCircleUp />
      </i>
    </button>
  );
}
