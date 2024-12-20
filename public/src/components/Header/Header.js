import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="header-banner">{"Zealth Customer Onboarding Flow"}</h1>
      <nav>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
