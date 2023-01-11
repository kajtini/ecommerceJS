import cart from "../assets/icons/icon-cart.svg";
import logo from "../assets/icons/logo.svg";
import menuOpen from "../assets/icons/icon-menu.svg";
import avatar from "../assets/images/image-avatar.png";
import Cart from "./Cart";

function Navbar(props) {
  return (
    <div className="w-full py-5 px-6">
      <div className="flex items-center justify-between md:mb-7">
        <div className="flex items-center gap-4 md:gap-12">
          <img className="md:hidden" src={menuOpen} alt="menu icon" />
          <img className="md:max-h-7" src={logo} alt="logo" />
          <ul className="hidden md:flex items-center gap-5 text-sm text-neutral-dark-grayish ">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 md:gap-10 relative">
          <img
            className="md:max-h-7 cursor-pointer"
            src={cart}
            alt="cart icon"
            onClick={props.handleCartClick}
          />
          <img
            className="max-h-6 md:max-h-11"
            src={avatar}
            alt="user picture"
          />
          {props.isOpen && <Cart />}
        </div>
      </div>

      <hr className="md:mb-16 md:block hidden" />
    </div>
  );
}

export default Navbar;
