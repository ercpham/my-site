import { links } from "../data/data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import "../styles/NavBar.css";
function NavBar() {
  const { sticky } = useGlobalContext();
  return (
    <nav className={`nav ${sticky && "sticky"}`}>
      <ul className="list">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url}>
                <p className={`list-item-text ${sticky && "sticky-text"}`}>{link.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
