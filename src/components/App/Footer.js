import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 py-3">
            <h4 className="title mb-0">
              <img
                src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648752167/logo_uuwjoy.png"
                alt="logo img"
                style={{
                  width: "25%",
                }}
              />
              DR. Name
            </h4>
            <div className="ms-4">
              <p className="subtitle">
                <i
                  className="fas fa-phone-alt me-2 fs-5"
                  style={{
                    color: "var(--brand_primary)",
                  }}
                ></i>
                +20 123 1234 123
              </p>
              <p className="subtitle">
                <i
                  className="fa fa-envelope me-2 fs-5"
                  style={{
                    color: "var(--brand_primary)",
                  }}
                ></i>
                test@gmail.com
              </p>
              <Link to="/" target="_blank">
                <i
                  className="bi bi-facebook me-3 fs-4"
                  style={{
                    color: "var(--brand_primary)",
                  }}
                ></i>
              </Link>
              <Link to="/" target="_blank">
                <i
                  className="bi bi-instagram me-3 fs-4"
                  style={{
                    color: "var(--brand_primary)",
                  }}
                ></i>
              </Link>
              <Link to="/" target="_blank">
                <i
                  className="bi bi-twitter me-3 fs-4"
                  style={{
                    color: "var(--brand_primary)",
                  }}
                ></i>
              </Link>
              <Link to="/" target="_blank">
                <i
                  className="bi bi-youtube me-3 fs-4"
                  style={{
                    color: "var(--brand_primary)",
                  }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-3">
            <div className="ms-4">
              <h4 className="title mb-3">Organization</h4>
              <Link to="/aboutUs">
                <p className="subtitle">About Us</p>
              </Link>
              <Link to="/ourServices">
                <p className="subtitle">Our Services</p>
              </Link>
              <Link to="/testimonials">
                <p className="subtitle">Testimonials</p>
              </Link>
              <Link to="/contactUs">
                <p className="subtitle">Contact Us</p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-3">
            <div className="ms-4">
              {" "}
              <h4 className="title mb-3">Services</h4>
              <Link to="/">
                <p className="subtitle">All-On-4 Dental Implants</p>
              </Link>
              <Link to="/">
                <p className="subtitle">Smile Design</p>
              </Link>
              <Link to="/">
                <p className="subtitle">Orthodontics</p>
              </Link>
              <Link to="/">
                <p className="subtitle">Child Dentistry</p>
              </Link>
              <Link to="/">
                <p className="subtitle">Elder Dentistry</p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-3">
            <div className="ms-4">
              <h4 className="title mb-3">Opening Hours</h4>
              <p className="subtitle">Sunday 10:00 - 10:00</p>
              <p className="subtitle">Monday 10:00 - 10:00</p>
              <p className="subtitle">Tuesday 10:00 - 10:00</p>
              <p className="subtitle">Wednesday 10:00 - 10:00</p>
              <p className="subtitle">Thursday 10:00 - 10:00</p>
              <p className="subtitle">Friday Closed</p>
              <p className="subtitle">Saturday Closed</p>
              <Link to="/" className="my-3">
                <button className="btn btn-outline-dark fs-6">
                  Request Now! <i className="fa fa-calendar-day px-2"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center pt-3"
        style={{ borderTop: "2px solid var(--brand_primary)" }}
      >
        <p className="title">
          Copyright © 2022 <span>Dental Clinic</span>. All rights reserved. Site
          designed by:
          <Link
            to="https://abd-elrahman-be-portfolio.herokuapp.com/"
            target="_blank"
          >
            BE
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
