import { Link } from "react-router-dom";

const VolunteeringBannerLeft = (props) => {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <h2 className="title text-center fw-bold fs-1 m-3">{props.title}</h2>
      <div
        className="volunteering-banner d-flex flex-wrap align-items-center mt-5"
        style={{
          background: "var(--brand_primary)",
        }}
      >
        <div className="banner-left">
          <img src={props.img} alt="img" />
        </div>

        <div className="banner-right">
          <div
            className="text-light m-5"
            style={{
              maxWidth: "600px",
            }}
          >
            <h3>{props.subtitle}</h3>
            <p>{props.paragraphOne}</p>
            <p>{props.paragraphTwo}</p>
            <div style={{display: `${props.btn}`}}>
            <Link to={props.link}>
              <button className="btn btn-outline-light">
                {props.btnTitle}
                <i className="bi bi-caret-right"></i>
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteeringBannerLeft;
