import Navigation from "../Navigation/Navigation";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="header-banner">{"Zealth Customer Onboarding Flow"}</h1>
      <Navigation />
    </header>
  );
};

export default Header;
