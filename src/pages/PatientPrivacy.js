import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import VolunteeringBannerRight from "../components/General/VolunteeringBannerRight";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const PatientPrivacy = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://test-dental-clinic-api.herokuapp.com/patientPrivacy/textPage"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section>
      <Intro
        imgBg="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649416435/pexels-shvets-production-7176319_doux6x.jpg"
        title="Patient Privacy"
        linkBtn="#patient-privacy"
      />
      <div
        id="patient-privacy"
        className="container"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Patient Privacy
            </li>
          </ol>
        </nav>
        <h2 className="title">Respecting Patient Privacy</h2>
        <div className="text-light">
          <VolunteeringBannerRight
            background="var(--brand_primary)"
            img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648770945/pexels-mentatdgt-1024311_fp988a.jpg"
            paragraphOne="Safeguarding patients privacy and confidentiality in today’s
          health care environment is increasingly challenging. Advanced
          technology, new demands in health care, and development, make it
          more and more difficult to do so."
            paragraphTwo=" As a best dentist, our connection to our patients depends on
          understanding and respecting their personal health
          confidentiality, it is our ethical and legal obligation as health
          care providers and it is our duty to protect the well being of
          those who are entrusted to our care."
            btn="none"
            link="/"
          />
        </div>
        {items.map((item) => (
          <div key={item.id}>
            <h1 className="title fw-light my-4">{item.titleOne}</h1>
            <h2 className="title fs-3 fw-bold my-3">{item.title}</h2>
            <p
              className="subtitle fs-5 fw-lighter mb-5"
              dangerouslySetInnerHTML={{ __html: item.subtitle }}
            ></p>
            <h1 className="title fs-1 fw-bold my-5">{item.titleTwo}</h1>
          </div>
        ))}
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default PatientPrivacy;
