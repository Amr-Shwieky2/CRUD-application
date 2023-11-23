import { Link } from "react-router-dom";
import "../style/Header.css";
import logo from "../images/pngtree-cake-logo-vector-playful-color-happy-celebration-white-background-png-image_5428496.jpg";
import simpleCake from "../images/simple.jpg";

const Header = () => {
  return (
    <nav className=" navbar navbar-expand-lg header-bg m-3  ">
      <div className="container-fluid">
        <Link className="navbar-brand " to="#">
          <img src={logo} className="logo" />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active mx-3" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/about">
                Abous Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
          <ul className=" navbar-item my-2">
            <li className="nav-item" style={{ marginLeft: "auto" }}>
              <img src={simpleCake} className="simple-cake" alt="Simple Cake" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
