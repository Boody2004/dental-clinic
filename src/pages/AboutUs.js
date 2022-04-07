import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import VolunteeringBannerLeft from "../components/General/VolunteeringBannerLeft";
import VolunteeringBannerRight from "../components/General/VolunteeringBannerRight";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const AboutUs = () => {
  return (
    <section>
      <Intro
        imgBg="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649258787/pexels-max-vakhtbovych-7511752_tgabpe.jpg"
        title="About Us"
        linkBtn="#about-us"
      />
      <div
        id="about-us"
        className="container"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>
        <VolunteeringBannerLeft
          subtitle="Dr. Name"
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648753307/pexels-antoni-shkraba-5215017_sioooz.jpg"
          paragraphOne=" Minim reprehenderit ipsum ullamco ullamco sint mollit sunt in
              reprehenderit reprehenderit commodo sunt elit pariatur. Consequat
              proident voluptate consectetur laborum esse ad ea ex dolor
              consequat. Velit amet est ullamco ut proident amet duis ut
              incididunt irure non culpa."
          paragraphTwo=" In aliqua minim officia minim do ad eiusmod sit velit laborum
              occaecat. Lorem aliquip anim anim est et magna irure veniam. Non
              dolore do cupidatat Lorem sunt sint aute adipisicing pariatur duis"
          textLink="#"
          titleTextLink="(DR. Name) Portfolio"
          btn="none"
          link="#"
        />
        <VolunteeringBannerRight
          background="var(--background)"
          subtitle="Our Vision"
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649260121/pexels-samuel-walker-2008342_da0w9x.jpg"
          paragraphOne="Work to be trusted by dental patients. Leadership in providing high value dental health care. Expand and strengthen regional and international position as a dental health care model."
          paragraphTwo="We build relationships with our patients on honesty, trust, comfort, and empowering our patients to make decisions concerning their oral health treatment options."
          btn="none"
          link="#"
        />
        <VolunteeringBannerLeft
          subtitle="Our Mission"
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649264083/pexels-antoni-shkraba-5214968_gt1t1l.jpg"
          paragraphOne="Provide exceptional patient-centered dental care in an upbeat and comfortable environment with high standards of excellence."
          paragraphTwo="A unified effort by our compassionate team enables us to achieve our goal of providing exceptional care to our patients. We are committed to offering a simple, safe and smart dental experience like no other."
          btn="none"
          link="#"
        />
        <VolunteeringBannerRight
          background="var(--background)"
          subtitle="Our Values"
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649265184/pexels-valeriia-miller-3798187_fs7oe9.jpg"
          paragraphOne="In the pursuit of our vision, the actions of leadership, staff and other dentists will be guided by the following values:"
          paragraphTwo="
        We are honest, we don’t accept but honesty
        <br/>
        We listen to our patients and answer their concerns in details
        <br/>
        Teamwork is central to our work
        <br/>
        We have strong work ethics, we don’t accept but mutual respect
        <br/>
        We are keen to deal with others on philanthropy basis
        <br/>
        Our integrity and ethics will never be compromised
        <br/>
        We treat each person with respect and dignity
        <br/>
        We take pride in our work
        <br/>
        We are forward-moving and innovative
        "
          btn="none"
          link="#"
        />
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default AboutUs;
