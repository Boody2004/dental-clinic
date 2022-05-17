import React, { useEffect, useState } from "react";

const ClinicData = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://test-dental-clinic-api.herokuapp.com/general/clinicData")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div style={{ background: "var(--background)" }}>
      <div className="container py-5">
        <div className="row">
          {items.map((item) => (
            <div
              key={item.id}
              className=" col-lg-3 col-md-6 col-sm-12 py-3 d-flex align-items-center"
            >
              <i
                className={`${item.icon}  mx-4 fs-4`}
                style={{
                  color: "var(--brand_primary)",
                }}
              ></i>
              <div className="text">
                <h6>{item.title}</h6>
                <p className="mb-0">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicData;
