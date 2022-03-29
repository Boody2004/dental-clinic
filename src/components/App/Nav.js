import companyLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  window.onscroll = function () {
    const scrolled = window.scrollY;

    if (scrolled >= 790) {
      document.querySelector("nav").style.background = "var(--background)";
    } else {
      document.querySelector("nav").style.background = "none";
    }
  };

  return (
    <nav
      id="nav"
      className="navbar navbar-expand-lg navbar-light"
      style={{
        padding: "3vh 0",
      }}
    >
      <div className="container-fluid container">
        <h1>
          <Link className="navbar-brand fs-2" to="/">
            <img
              src={companyLogo}
              alt="logo img"
              style={{
                width: "15%",
              }}
            />
            <span>DR. Name</span>
          </Link>
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                <span>About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ourServices">
                <span>Our Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">
                <span>Testimonials</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
