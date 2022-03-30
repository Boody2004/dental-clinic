const OurCompetencies = () => {
  return (
    <div
      className="container text-center"
      style={{ marginTop: "6rem", marginBottom: "6rem" }}
    >
      <h2 className="title fw-bold fs-1 m-3">Our Competencies</h2>
      <div className="row my-4">
        <div className="col-lg-3 col-md-6 col-sm-12 py-3">
          <div
            className="card"
            style={{
              width: "18rem",
              height: "24rem",
              margin: "auto",
              border: "none",
              borderBottom: "0.4rem solid var(--brand_secondary)",
              backgroundColor: "var(--background)",
            }}
          >
            <div className="card-body py-5 px-3">
              <i
                className="fa fa-tooth mt-2 mb-4"
                style={{
                  fontSize: "3rem",
                  color: "var(--brand_secondary)",
                }}
              ></i>
              <h5 className="title fs-4 fw-bold mb-4">Specialized Dentistry</h5>
              <p className="subtitle fs-5 fw-lighter">
                We have faculty dental specialties working in one location.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 py-3">
          <div
            className="card"
            style={{
              width: "18rem",
              height: "24rem",
              margin: "auto",
              border: "none",
              borderBottom: "0.4rem solid var(--brand_secondary)",
              backgroundColor: "var(--background)",
            }}
          >
            <div className="card-body py-5 px-3">
              <i
                className="fa fa-lightbulb mt-2 mb-4"
                style={{
                  fontSize: "3rem",
                  color: "var(--brand_secondary)",
                }}
              ></i>
              <h5 className="title fs-4 fw-bold mb-4">New Technologies</h5>
              <p className="subtitle fs-5 fw-lighter">
                Using new and emerging technology for best patient experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 py-3">
          <div
            className="card"
            style={{
              width: "18rem",
              height: "24rem",
              margin: "auto",
              border: "none",
              borderBottom: "0.4rem solid var(--brand_secondary)",
              backgroundColor: "var(--background)",
            }}
          >
            <div className="card-body py-5 px-3">
              <i
                className="fa fa-spray-can mt-2 mb-4"
                style={{
                  fontSize: "3rem",
                  color: "var(--brand_secondary)",
                }}
              ></i>
              <h5 className="title fs-4 fw-bold mb-4">Infection Control</h5>
              <p className="subtitle fs-5 fw-lighter">
                Implementing strict strategies to ensure safe & effective
                treatment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 py-3">
          <div
            className="card"
            style={{
              width: "18rem",
              height: "24rem",
              margin: "auto",
              border: "none",
              borderBottom: "0.4rem solid var(--brand_secondary)",
              backgroundColor: "var(--background)",
            }}
          >
            <div className="card-body py-5 px-3">
              <i
                className="fa fa-spa mt-2 mb-4"
                style={{
                  fontSize: "3rem",
                  color: "var(--brand_secondary)",
                }}
              ></i>
              <h5 className="title fs-4 fw-bold mb-4">
                Comfortable Environment
              </h5>
              <p className="subtitle fs-5 fw-lighter">
                Decoration designed to give a sense of relaxation and comfort
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompetencies;
