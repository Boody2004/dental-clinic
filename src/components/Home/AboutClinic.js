import { Link } from "react-router-dom";

const AboutClinic = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <h2 className="title text-center fw-bold fs-1 m-3">
        Respecting Patient Privacy
      </h2>
      <div
        className="about-clinic d-flex flex-wrap align-items-center mt-5"
        style={{
          background: "var(--brand_primary)",
        }}
      >
        <div className="banner-left">
          <div
            className="text-light m-5"
            style={{
              maxWidth: "600px",
            }}
          >
            <p>
              Safeguarding patients privacy and confidentiality in today’s
              health care environment is increasingly challenging. Advanced
              technology, new demands in health care, and development, make it
              more and more difficult to do so.
            </p>
            <p>
              As a best dentist, our connection to our patients depends on
              understanding and respecting their personal health
              confidentiality, it is our ethical and legal obligation as health
              care providers and it is our duty to protect the well being of
              those who are entrusted to our care.
            </p>
            <Link to="/aboutUs">
              <button className="btn btn-outline-light">
                Read more
                <i className="bi bi-caret-right"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="banner-right">
          <img
            src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648770945/pexels-mentatdgt-1024311_fp988a.jpg"
            alt="DR.img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutClinic;
