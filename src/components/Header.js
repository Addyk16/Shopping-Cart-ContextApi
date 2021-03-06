import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import "./styles.css";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div>
      <span className="header">My Shopping Cart</span>
      <ul className="nav">
        <li>
          <Link to="/Shopping-Cart-ContextApi/">Home Page</Link>
        </li>
        <li>
          <Link to="/Shopping-Cart-ContextApi/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
