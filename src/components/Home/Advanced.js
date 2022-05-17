import React, { useEffect, useState } from "react";

const Advanced = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://test-dental-clinic-api.herokuapp.com/home/advanced")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div style={{ background: "var(--brand_primary)" }}>
      <div className="container text-center text-light">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="item col-lg-4 col-md-6 col-sm-12">
              <div
                className="rounded-0"
                style={{
                  width: "18rem",
                  margin: "auto",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                <div className="card-body py-5">
                  <h5
                    className="fs-3 fw-light mt-5 mb-4"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h5>
                  <p
                    className="fs-5 fw-light"
                    dangerouslySetInnerHTML={{ __html: item.subtitle }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advanced;
