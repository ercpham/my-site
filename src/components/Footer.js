import "../styles/Footer.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="foot">
      <a
        href="https://www.linkedin.com/in/ercpham/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-wrap"
      >
        <FaLinkedinIn className="icon" />
      </a>
      <a
        href="https://github.com/ercpham"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-wrap"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.instagram.com/the_eric_pham/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-wrap"
      >
        <FaInstagram className="icon" />
      </a>
    </footer>
  );
}

export default Footer;
