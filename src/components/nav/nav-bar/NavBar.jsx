import "./navbar-styles.css";
import { SearchBar } from "../search-bar/SearchBar";
import { Logo } from "../../logo/Logo";
import { FiUser } from "react-icons/fi";

export const NavBar = ({ hideSearch }) => {
  return (
    <nav className="navbar">
      <section className="navbar-container">
        <Logo />
        {!hideSearch && <SearchBar />}
        <FiUser size={30} />
      </section>
    </nav>
  );
};
