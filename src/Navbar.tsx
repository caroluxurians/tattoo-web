import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-board">
      <nav className="flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
