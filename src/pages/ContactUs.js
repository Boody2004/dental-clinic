import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const ContactUs = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dental-clinic-api.vercel.app/contactUs/textPage")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section>
      <Intro
        imgBg="https://dental-clinic-api.vercel.app/contactUs/textPage"
        title="Contact Us"
        linkBtn="#contact-us-form"
      />
      <div
        id="contact-us-form"
        className="container"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
        {items.map((item) => (
          <div key={item.id}>
            <h2 className="title">{item.title}</h2>
            <p className="subtitle lead">{item.subtitle}</p>
          </div>
        ))}

        <div className="card my-5 p-5 shadow">
          <form
            action={`https://formsubmit.co/${process.env.REACT_APP_EMAIL_CONTACTUS}`}
            method="POST"
          >
            <label type="email" className="form-label">
              Email address:
            </label>
            <div className="mb-4 input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                className="form-control"
                type="email"
                name="Email"
                placeholder="e.g.email@example.com"
                required
              />
              <span className="input-group-text">
                <span
                  data-bs-placement="bottom"
                  title="Enter an email address we can reply to."
                >
                  <i className="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>
            <label type="name" className="form-label">
              Name:
            </label>
            <div className="mb-4 input-group">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                className="form-control"
                type="text"
                name="Name"
                placeholder="e.g.Mario"
                required
              />
              <span className="input-group-text">
                <span
                  data-bs-placement="bottom"
                  title="Pretty self explantoty rely..."
                >
                  <i className="bi bi-question-circle text-muted"></i>
                </span>
              </span>
            </div>
            <div className="mb-4 form-floating">
              <textarea
                className="form-control"
                type="text"
                name="Message"
                required
                style={{ height: " 140px" }}
              ></textarea>
              <label className="form-label">Message</label>
            </div>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="Acceptance"
                  value="True"
                  aria-invalid="false"
                  required
                ></input>
                <span className="ms-3 title">
                  By sumbitting this form I acknowledge that I have read and
                  agree to Care Dental Clinic
                </span>
              </label>
            </div>
            <input
              type="hidden"
              name="_next"
              value={`http://${process.env.REACT_APP_URL_CONTACTUS}/contactUs`}
            ></input>
            <button type="submit" className="btn btn-outline-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default ContactUs;
