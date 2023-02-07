import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const Testimonials = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://dental-clinic-api.vercel.app/testimonials/wordsFromOurPatients"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section>
      <Intro
        imgBg="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648898146/istockphoto-517899146-612x612_mhvffg.jpg"
        title="Testimonials"
        linkBtn="#testimonials"
      />
      <div
        id="testimonials"
        className="container"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Testimonials
            </li>
          </ol>
        </nav>
        <h2 className="title">Words from our patients</h2>
        <div className="row my-5">
          {items.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 my-2">
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <div
                    className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: `${item.color}`,
                    }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  {item.name}
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <h3 className="title fw-light mb-4">{item.title}</h3>
                    <footer className="blockquote-footer">
                      {item.subtitle}
                      <br />
                      <cite title="Source Title">{item.date}</cite>
                    </footer>
                  </blockquote>
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

export default Testimonials;
