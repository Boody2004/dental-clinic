import { Link } from "react-router-dom";

const VolunteeringBannerRight = (props) => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <h2 className="title text-center fw-bold fs-1 m-3">
        {props.title}
      </h2>
      <div
        className="about-clinic d-flex flex-wrap align-items-center mt-5"
        style={{
           background: `${props.background}`,
        }}
      >
        <div className="banner-left">
          <div
            className="m-5"
            style={{
              maxWidth: "600px",
            }}
          >
            <h3>{props.subtitle}</h3>
            <p>{props.paragraphOne}</p>
            <p dangerouslySetInnerHTML={{ __html: props.paragraphTwo}} />
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
        <div className="banner-right">
          <img
            src={props.img}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default VolunteeringBannerRight;
