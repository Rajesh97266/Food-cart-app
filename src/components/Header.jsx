import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">Food Cart</div>
        <ul className="links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/cart"> Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
