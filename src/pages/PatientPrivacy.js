import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import VolunteeringBannerRight from "../components/General/VolunteeringBannerRight";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const PatientPrivacy = () => {
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
        <h1 className="title fw-light my-4">
          How we disclose your health information
        </h1>
        <h2 className="title fs-3 fw-bold my-3">For Treatment</h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          Clinic may use Health Information about you to provide you with dental
          health treatment or services. We may disclose Health Information about
          you to our dentists, technicians, or other Clinic personnel who are
          involved in taking care of you at our Clinic. For example, a dentist
          treating you for a Root Canal may need to know if you have diabetes
          because diabetes may slow the healing process. A dentist treating you
          may need to know what medications you are currently taking, because
          the medications may affect what other medications may be prescribed to
          you. We may also share Health Information about you with other
          providers. The disclosure of your Health Information to other
          providers may be done electronically through a health information
          exchange that allows providers involved in your care to access some of
          your records we have on file to coordinate services for you.
        </p>
        <h2 className="title fs-3 fw-bold my-3">For Payment</h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          We may use and disclose Health Information about you so that the
          treatment and services you receive at our Clinic, may be billed to and
          payment may be collected from you, an insurance company or a third
          party. For example, we may need to give information to your health
          plan about surgery or therapy you received at our Clinic so your
          health plan will pay us or reimburse you for the surgery or therapy.
          We may also tell your health plan about a proposed treatment to
          determine whether your plan will pay for the treatment.
        </p>
        <h2 className="title fs-3 fw-bold my-3">For Health Care Operations</h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          We may use and disclose Health Information about you for our business
          operations. For example, your Health Information may be used to review
          the quality and safety of our services, or for business planning,
          management and administrative services. We may contact you about
          alternative treatment options for you or about other benefits or
          services we provide. We may also use and disclose your health
          information to an outside company that performs services for us such
          as accreditation, legal, computer or auditing services. These outside
          companies are called “business associates” and are required by law to
          keep your Health Information confidential. We may also disclose
          information to doctors, nurses, technicians, medical and other
          students, and other Clinic personnel for performance improvement and
          educational purposes.
        </p>
        <h2 className="title fs-3 fw-bold my-3">Appointment Reminders</h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          We may contact you to remind you that you have an appointment at our
          Clinic.
        </p>
        <h2 className="title fs-3 fw-bold my-3">
          Individuals Involved in Your Care
        </h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          We may release health information to anyone involved in your dental
          care, e.g., a friend, family member, personal representative, or any
          individual you identify. We also may give information to someone who
          helps pay for your care. We also may tell your family or friends about
          your general condition.
        </p>
        <h1 className="title fs-1 fw-bold my-5">
          Your Rights Regarding Your Health Information
        </h1>
        <h2 className="title fs-3 fw-bold my-3">Right to Inspect and Copy</h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          With certain exceptions, you have the right to inspect and/or receive
          a copy of your Health Information. If we have the information in
          electronic format, then you have the right to get your Health
          Information in electronic format if it is possible for us to do so. If
          not, we will work with you to agree on a way for you to get the
          information electronically or as a paper copy.
        </p>
        <h2 className="title fs-3 fw-bold my-3">
          Right to Request Restrictions
        </h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          You have the right to request a restriction or limitation on the
          Health Information we use or disclose about you for treatment, payment
          or health care operations. You also have the right to request a limit
          on the Health Information we disclose about you to someone who is
          involved in your care or the payment for your care, such as a family
          member or friend.
          <br />
          <br />
          To request a restriction, you must make your request in writing to our
          Patient Services. In your request, you must tell us
          <br />
          <br />
          1- What information you want to limit.
          <br />
          2- Whether you want to limit our use, disclosure or both.
          <br />
          3- To whom you want the limits to apply (for example, only to you and
          your spouse).
          <br />
          <br />
          We are not required to agree to your request except in the limited
          circumstance described below. If we do agree, our agreement must be in
          writing, and we will comply with your request unless the information
          is needed to provide you emergency care.
          <br />
          <br />
          We are required to agree to a request not to share your information
          with your health plan if the following conditions are met:
          <br />
          <br />
          1- We are not otherwise required by law to share the information.
          <br />
          2- The information would be shared with your insurance company for
          payment purposes.
          <br />
          3- You pay the entire amount due for the health care item or service
          out of your own pocket or someone else pays the entire amount for you.
        </p>
        <h2 className="title fs-3 fw-bold my-3">
          Right to Request Confidential Communications
        </h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          You have the right to request that we communicate with you about your
          Health Information in a certain way or at a certain location. For
          example, you may ask that we contact you only at home or only by mail.
          <br />
          <br />
          To request confidential medical communications, you must make your
          request in writing to our Patient Services. We will accommodate all
          reasonable requests. Your request must specify how or where you wish
          to be contacted.
        </p>
        <h2 className="title fs-3 fw-bold my-3">
          Changes to Privacy Practices
        </h2>
        <p className="subtitle fs-5 fw-lighter mb-5">
          We reserve the right to change our privacy practices notice. We
          reserve the right to make the revised or changed notice effective for
          Health Information we already have about you as well as any
          information we receive in the future. We will post a copy of the
          current notice. In addition, at any time you may request a copy of the
          current notice in effect.
        </p>
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default PatientPrivacy;
