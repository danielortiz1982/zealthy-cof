import Navigation from "../Navigation/Navigation";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="header-banner">
        {"Zealthy - Full Stack Engineering Leader Exercise"}
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
