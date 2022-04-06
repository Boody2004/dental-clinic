import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const Testimonials = () => {
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
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#f50057",
                  }}
                >
                  E
                </div>
                Elham
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    One of the best in Cosmetic Dentistry
                  </h3>
                  <footer className="blockquote-footer">
                    I replaced the old black filling with a new white one. It
                    has come out to be perfect, no-one even me can tell that
                    there's a filling in that tooth, also, my son had broken his
                    front tooth. Dr. Heba fixed it with composite and it lasted
                    for three years till now, looking exactly like the original
                    tooth. Moreover, he bites carrots on it normally! I do
                    recommend Dr. Heba Ammar for doing cosmetic restorations, I
                    can confidently say she is one of the best in Cosmetic
                    Dentistry.
                    <br />
                    <cite title="Source Title">18/11/2021</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#2979ff",
                  }}
                >
                  R
                </div>
                Ragy
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    Accurate, clean, trustworthy
                  </h3>
                  <footer className="blockquote-footer">
                    My last treatment was cleaning my teeth & removing calculus,
                    In the past I wasn't go to dentist regularly unless there is
                    pain or teeth need to be filled or removed. When I came to
                    Optimum Care Dental Clinic for the first time, Dr. Heba
                    Ammar drew my attention to the importance of cleaning my
                    teeth & removing the calculus every 6 months & how much it
                    is destructive if I didn't do this, also she taught me the
                    best way to brush my teeth properly. I always feel so
                    comfortable when I come here, it is really very accurate,
                    clean, fast treatment, Dr. Heba Ammar is trustworthy and an
                    honest doctor. The clinic is always clean & good equipped.
                    The staff is amazing and organized..
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#c6ff00",
                  }}
                >
                  S
                </div>
                Sameh
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    Genuine care and complete trust
                  </h3>
                  <footer className="blockquote-footer">
                    I am a detail-oriented person, and I am going to say that
                    Optimum Care Dental Clinic is the place to find the genuine
                    care and complete trust you've been looking for, you rest
                    assured peacefully while all your dental issues are getting
                    professionally fixed, I hereby testify that all treatments
                    Ihad done five years ago are still functioning at full
                    capacity. Thanks Dr. Heba Ammar.
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#ff9100",
                  }}
                >
                  a
                </div>
                AE
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    Honest, friendly and insightful
                  </h3>
                  <footer className="blockquote-footer">
                    The best dentist I've ever been to; She is honest, friendly
                    and insightful, current on the latest techniques, and
                    completely in tune to her patients. My dental visit to
                    Optimum Care dental Clinic is well worth the trip! you
                    really could not find a better place to be.
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#ff3d00",
                  }}
                >
                  a
                </div>
                Dr. Ahmed
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    Unique artistic style, competitive prices
                  </h3>
                  <footer className="blockquote-footer">
                    Years ago, Dr. Heba Ammar had done a Root Canal for my
                    tooth. Recently, I had to have a Crown over that old
                    treatment when I was in the United States though I was
                    reluctant to it. Peculiarly, the dentist who made the Crown
                    was impressed and complemented the previous work. Last year,
                    I needed an Implant and I made my own research to find the
                    best clinic, I found myself resting upon Dr. Heba's clinic
                    again! Surely, the place combined an infection control
                    system that I could trust, highly skilled faculty staff and
                    the unique artistic style of Dr. Heba Ammar. I also had
                    realized that her prices are very competitive!
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#d500f9",
                  }}
                >
                  b
                </div>
                Bassant Tawfeeq
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    High standards, strict infection control
                  </h3>
                  <footer className="blockquote-footer">
                    Professional doctors and high standard clinic with strict
                    infection control
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#651fff",
                  }}
                >
                  y
                </div>
                Yomna Zakaria
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    Latest techniques, relaxing ambiance
                  </h3>
                  <footer className="blockquote-footer">
                    Special thanks to Dr. Heba Ammar, I went there with pain
                    from a failed root canal, and was treated so professionally,
                    she takes care of every single detail and uses the latest
                    techniques. The clinic is super clean with a very friendly
                    and relaxing ambiance. -
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#1de9b6",
                  }}
                >
                  a
                </div>
                Ahmed Shawky
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    Clever, clean, professional tailored solutions
                  </h3>
                  <footer className="blockquote-footer">
                    Dr. Heba is really well experienced doctor. She is extremely
                    clever and knows how to handle severe cases. Over and above
                    she's very welcoming and the clinic is really clean and
                    sanitized. I highly recommend for anyone who's looking for
                    professional tailor-made solution for his specific case.
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#ffea00",
                  }}
                >
                  r
                </div>
                Rehab Kamel
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    Comfortable, clean, gifted hand dentist
                  </h3>
                  <footer className="blockquote-footer">
                    Really it is one of the most comfortable, welcoming and
                    clean dental clinics. Dr. Heba is not only a genius gifted
                    hand dentist but also a kind caring doctor. Many thanks to
                    you and your nice team.
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#f50057",
                  }}
                >
                  E
                </div>
                Elham
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    One of the best in Cosmetic Dentistry
                  </h3>
                  <footer className="blockquote-footer">
                    I replaced the old black filling with a new white one. It
                    has come out to be perfect, no-one even me can tell that
                    there's a filling in that tooth, also, my son had broken his
                    front tooth. Dr. Heba fixed it with composite and it lasted
                    for three years till now, looking exactly like the original
                    tooth. Moreover, he bites carrots on it normally! I do
                    recommend Dr. Heba Ammar for doing cosmetic restorations, I
                    can confidently say she is one of the best in Cosmetic
                    Dentistry.
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center text-light text-uppercase rounded-circle fs-5 me-2"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#2979ff",
                  }}
                >
                  R
                </div>
                Ragy
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3 className="title fw-light mb-4">
                    Accurate, clean, trustworthy
                  </h3>
                  <footer className="blockquote-footer">
                    My last treatment was cleaning my teeth & removing calculus,
                    In the past I wasn't go to dentist regularly unless there is
                    pain or teeth need to be filled or removed. When I came to
                    Optimum Care Dental Clinic for the first time, Dr. Heba
                    Ammar drew my attention to the importance of cleaning my
                    teeth & removing the calculus every 6 months & how much it
                    is destructive if I didn't do this, also she taught me the
                    best way to brush my teeth properly. I always feel so
                    comfortable when I come here, it is really very accurate,
                    clean, fast treatment, Dr. Heba Ammar is trustworthy and an
                    honest doctor. The clinic is always clean & good equipped.
                    The staff is amazing and organized..
                    <br />
                    <cite title="Source Title">dd/mm/yyyy</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default Testimonials;
