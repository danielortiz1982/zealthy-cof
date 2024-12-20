import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/users">User</Link>
    </nav>
  );
};

export default Navigation;
