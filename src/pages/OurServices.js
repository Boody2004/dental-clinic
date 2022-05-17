import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const OurServices = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://test-dental-clinic-api.herokuapp.com/ourServices/servicesList"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section>
      <Intro
        imgBg="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649291731/pexels-anna-shvets-3845550_og7gfw.jpg"
        title="Our Services"
        linkBtn="#services"
      />
      <div
        id="services"
        className="container"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Our Services
            </li>
          </ol>
        </nav>
        <h2 className="title">Services List</h2>
        <div className="row  my-5">
          {items.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="card">
                <img src={item.img} className="card-img-top" alt="Card Img" />
                <div
                  className="card-body"
                  style={{
                    background: "var(--background)",
                  }}
                >
                  <h3 className="title fw-light mb-3">{item.title}</h3>
                  <p className="subtitle fs-5 mb-4">{item.subtitle}</p>
                  <Link to="/" className="btn  btn-outline-dark">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default OurServices;
