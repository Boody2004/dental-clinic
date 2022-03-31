import { Link } from "react-router-dom";

const AboutDr = () => {
  return (
    <div
      id="AboutDr"
      className="d-flex flex-wrap align-items-center"
      style={{
        background: "var(--brand_primary)",
      }}
    >
      <div className="banner-left">
        <img
          src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648753307/pexels-antoni-shkraba-5215017_sioooz.jpg"
          alt="DR.img"
        />
      </div>

      <div className="banner-right">
        <div
          className="text-light m-3 "
          style={{
            maxWidth: "600px",
          }}
        >
          <h1>DR. Name</h1>
          <p>
            Minim reprehenderit ipsum ullamco ullamco sint mollit sunt in
            reprehenderit reprehenderit commodo sunt elit pariatur. Consequat
            proident voluptate consectetur laborum esse ad ea ex dolor
            consequat. Velit amet est ullamco ut proident amet duis ut
            incididunt irure non culpa.
          </p>

          <p>
            In aliqua minim officia minim do ad eiusmod sit velit laborum
            occaecat. Lorem aliquip anim anim est et magna irure veniam. Non
            dolore do cupidatat Lorem sunt sint aute adipisicing pariatur duis
          </p>

          <Link to="/aboutUs">
            <button className="btn btn-outline-light">
              Read more
              <i className="bi bi-caret-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutDr;
