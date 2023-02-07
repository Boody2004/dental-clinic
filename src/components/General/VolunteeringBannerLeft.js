import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteeringBannerLeft = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://dental-clinic-api.vercel.app/${props.url}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} style={{ paddingTop: "6rem" }}>
          <h2 className="title text-center fw-bold fs-1 m-3">{item.title}</h2>
          <div
            className="volunteering-banner d-flex flex-wrap align-items-center mt-5"
            style={{
              background: "var(--brand_primary)",
            }}
          >
            <div className="banner-left">
              <img src={item.img} alt="img" />
            </div>

            <div className="banner-right">
              <div
                className="text-light m-5"
                style={{
                  maxWidth: "600px",
                }}
              >
                <h3>{item.subtitle}</h3>
                <p>{item.subtitleOne}</p>
                <p>{item.subtitleTwo}</p>
                <a className="text-light" href={item.link} target="_blank">
                  {item.titleLink}
                </a>
                <div style={{ display: `${item.btn}` }}>
                  <Link to={item.link}>
                    <button className="btn btn-outline-light">
                      {item.btnTitle}
                      <i className="bi bi-caret-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VolunteeringBannerLeft;
