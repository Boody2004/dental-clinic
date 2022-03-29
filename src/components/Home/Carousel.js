import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-interval="5000"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('https://res.cloudinary.com/dirbnpgsp/image/upload/v1648544300/pexels-karolina-grabowska-6627575_zlpqn0.jpg')",
            height: "100vh",
            position: "relative",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="carousel-caption text-start"
            style={{
              position: "absolute",
              top: "25%",
              left: "15%",
            }}
          >
            <h2 className="title fw-bold fs-1">Bringing life to your smile</h2>
            <p
              className="subtitle fw-lighter fs-4"
              style={{ maxWidth: "500px" }}
            >
              Enhance your smile personality and appearance that suit your face
              with our advanced treatments in Smile Design
            </p>
            <Link to="/">
              <button className="btn btn-carousel btn-outline-light">
                Learn more
                <i className="bi bi-caret-right"></i>
              </button>
            </Link>
          </div>
        </div>

        <div
          className="carousel-item "
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('https://res.cloudinary.com/dirbnpgsp/image/upload/v1648547888/pexels-daniel-frank-305567_lpkg4r.jpg')",
            height: "100vh",
            position: "relative",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="carousel-caption text-start"
            style={{
              position: "absolute",
              top: "25%",
              left: "15%",
            }}
          >
            <h2 className="title fw-bold fs-1">
              Care in an environment of excellence
            </h2>
            <p
              className="subtitle fw-lighter fs-4"
              style={{ maxWidth: "500px" }}
            >
              Our staff work to create and maintain a culture of excellence. We
              emphasize accountability, transparency and effective
              communication.
            </p>
            <Link to="/">
              <button className="btn btn-carousel btn-outline-light">
                Learn more
                <i className="bi bi-caret-right"></i>
              </button>
            </Link>
          </div>
        </div>

        <div
          className="carousel-item "
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('https://res.cloudinary.com/dirbnpgsp/image/upload/v1648548860/pexels-cottonbro-6502308_tjojmw.jpg')",
            height: "100vh",
            position: "relative",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="carousel-caption text-start"
            style={{
              position: "absolute",
              top: "25%",
              left: "15%",
            }}
          >
            <h2 className="title fw-bold fs-1">The experience you can trust</h2>
            <p
              className="subtitle fw-lighter fs-4"
              style={{ maxWidth: "500px" }}
            >
              We take pride in our talented and caring team and in our work
            </p>
            <Link to="/">
              <button className="btn btn-carousel btn-outline-light">
                Learn more
                <i className="bi bi-caret-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
