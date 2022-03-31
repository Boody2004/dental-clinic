import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="text-center" style={{ marginTop: "6rem" }}>
      <h2 className="title fw-bold fs-1 m-3">Dental Services We Offer</h2>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide pt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="4000"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('https://res.cloudinary.com/dirbnpgsp/image/upload/v1648760835/pexels-shiny-diamond-3762402_qu2bkt.jpg')",
              height: "70vh",
              position: "relative",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="carousel-caption text-start text-light"
              style={{
                position: "absolute",
                top: "25%",
                left: "15%",
              }}
            >
              <h2 className="fw-bold fs-1">All-On-4 Dental Implants</h2>
              <p className="fw-lighter fs-4" style={{ maxWidth: "500px" }}>
                The All-On-4 dental implant methods is used to replace a full or
                partial bridge in just one visit to our clinic. With this
                process, we use 4 dental implants to fix a full bridge into the
                mouth. Depending on your case, we
              </p>
              <Link to="/">
                <button className="btn btn-outline-light">
                  Continue Reading <i className="bi bi-caret-right"></i>
                </button>
              </Link>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="4000"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('https://res.cloudinary.com/dirbnpgsp/image/upload/v1648761506/pexels-andrea-piacquadio-789822_wxlnhu.jpg')",
              height: "70vh",
              width: "100%",
              position: "relative",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="carousel-caption text-start text-light"
              style={{
                position: "absolute",
                top: "25%",
                left: "15%",
              }}
            >
              <h2 className="title fw-bold fs-1">Smile Design</h2>
              <p
                className="subtitle fw-lighter fs-4"
                style={{ maxWidth: "500px" }}
              >
                The new desired smile is created through several references to
                patient's old photographs and by engaging with the patient to
                understand their requirements. Thus can see what would look like
                before even starting the treatment. Our clinic is trained in
              </p>
              <Link to="/">
                <button className="btn btn-carousel btn-outline-light">
                  Continue Reading <i className="bi bi-caret-right"></i>
                </button>
              </Link>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="4000"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('https://res.cloudinary.com/dirbnpgsp/image/upload/v1648762002/pexels-cottonbro-6528861_sxvuvi.jpg')",
              height: "70vh",
              position: "relative",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="carousel-caption text-start text-light"
              style={{
                position: "absolute",
                top: "25%",
                left: "15%",
              }}
            >
              <h2 className="fw-bold fs-1">Orthodontics</h2>
              <p className="fw-lighter fs-4" style={{ maxWidth: "500px" }}>
                Teeth that function well together make it possible to bite and
                chew properly, contribute to clear speech and have a pleasing
                appearance. Based on variables like your age, possible jaw
                imbalances, differences in the size of your teeth and more,
              </p>
              <Link to="/">
                <button className="btn btn-outline-light">
                  Continue Reading <i className="bi bi-caret-right"></i>
                </button>
              </Link>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="4000"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('https://res.cloudinary.com/dirbnpgsp/image/upload/v1648762273/pexels-alexander-dummer-1912868_ns8iqq.jpg')",
              height: "70vh",
              position: "relative",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="carousel-caption text-start text-light"
              style={{
                position: "absolute",
                top: "25%",
                left: "15%",
              }}
            >
              <h2 className="fw-bold fs-1">Child Dentistry</h2>
              <p className="fw-lighter fs-4" style={{ maxWidth: "500px" }}>
                We believe that every child deserves quality dental care, We
                don't think anything should stand in the way of your child
                having a healthy smile for a lifetime! From the time your son or
                daughter is between one and two
              </p>
              <Link to="/">
                <button className="btn btn-outline-light">
                  Continue Reading <i className="bi bi-caret-right"></i>
                </button>
              </Link>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="4000"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('https://res.cloudinary.com/dirbnpgsp/image/upload/v1648762601/pexels-anderson-guerra-1197132_cwkd36.jpg')",
              height: "70vh",
              position: "relative",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="carousel-caption text-start text-light"
              style={{
                position: "absolute",
                top: "25%",
                left: "15%",
              }}
            >
              <h2 className="title fw-bold fs-1">Elder Dentistry</h2>
              <p
                className="subtitle fw-lighter fs-4"
                style={{ maxWidth: "500px" }}
              >
                Many practices are not prepared to help the aging patients that
                require extra care, Dr. Heba Ammar has made it a point to
                provide additional care emphasis in Elder dentistry, she is
                aware of the emotional strain associated with caring
              </p>
              <Link to="/">
                <button className="btn btn-carousel btn-outline-light">
                  Continue Reading <i className="bi bi-caret-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Services;
