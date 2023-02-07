import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteeringBannerRight = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://dental-clinic-api.vercel.app/${props.url}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} style={{ marginTop: "6rem" }}>
          <h2 className="title text-center fw-bold fs-1 m-3">{item.title}</h2>
          <div
            className="about-clinic d-flex flex-wrap align-items-center mt-5"
            style={{
              background: `${item.background}`,
            }}
          >
            <div className="banner-left">
              <div
                className="m-5"
                style={{
                  maxWidth: "600px",
                }}
              >
                <h3>{item.subtitle}</h3>
                <p>{item.subtitleOne}</p>
                <p dangerouslySetInnerHTML={{ __html: item.subtitleTwo }} />
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
            <div className="banner-right">
              <img src={item.img} alt="img" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VolunteeringBannerRight;
