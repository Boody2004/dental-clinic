import React, { useEffect, useState } from "react";

const OurCompetencies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dental-clinic-api.vercel.app/home/ourCompetencies")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div
      className="container text-center"
      style={{ marginTop: "6rem", marginBottom: "6rem" }}
    >
      <h2 className="title fw-bold fs-1 m-3">Our Competencies</h2>
      <div className="row my-5">
        {items.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 py-3">
            <div
              className="card"
              style={{
                maxWidth: "18rem",
                height: "24rem",
                margin: "auto",
                border: "none",
                borderBottom: "0.4rem solid var(--brand_secondary)",
                backgroundColor: "var(--background)",
              }}
            >
              <div className="card-body py-5 px-3">
                <i
                  className={`${item.icon} mt-2 mb-4`}
                  style={{
                    fontSize: "3rem",
                    color: "var(--brand_secondary)",
                  }}
                ></i>
                <h5 className="title fs-4 fw-bold mb-4">{item.title}</h5>
                <p className="subtitle fs-5 fw-lighter">{item.subtitle} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCompetencies;
