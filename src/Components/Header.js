import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex py-1 justify-between shadow-md px-1 items-center">
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Atul_logo.png"
          width={"70px"}
          height={"50px"}
          data-testid="header-image-logo"
        />
      </Link>

      <ul className="flex gap-x-2">
        <li>
          <Link to={"/instamart"} data-testid="instamart-link">
            Instamart
          </Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/cart"} data-testid="cart">
            Cart {cartItems.length}-items
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
