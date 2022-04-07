import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const OurServices = () => {
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
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
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
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294363/cosmetic-dentures_reche4.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">All-On-4 Dental Implants</h3>
                <p className="subtitle fs-5 mb-4">The All-On-4 dental implant methods is used to replace a full or partial bridge in just one visit to our clinic. With this process, we use 4 dental implants to fix a full bridge into the mouth. Depending on your case, we may suggest 4 to 6 ...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294363/dental-implants_gu1c3l.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Dental Implants</h3>
                <p className="subtitle fs-5 mb-4">An implant is a tiny screw made of titanium and other materials which is drilled in the bone where the tooth's root would normally be. They are surgically placed in the upper or lower jaw, where they function as a sturdy anchor for replacement teeth. It...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294364/smile-design_okibey.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Smile Design</h3>
                <p className="subtitle fs-5 mb-4">
The new desired smile is created through several references to patient's old photographs and by engaging with the patient to understand their requirements. Thus can see what would look like before even starting the treatment. Our clinic is trained in Digital Smile Design-DSD, which provides...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294363/veneers_lutids.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Veneers</h3>
                <p className="subtitle fs-5 mb-4">Dental veneers are the thin covering of a tooth-colored material designed to correct uneven spacing, gaps and misalignment, worn-down surfaces, irregular edges, cracks, chips and discoloration. Veneer materials are extremely strong and can be tinted to match your surrounding teeth so no one will know...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294362/teeth-whitening_znr3no.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Teeth Whitening</h3>
                <p className="subtitle fs-5 mb-4">
The professional In-office option for teeth whitening is performed in our clinic using state-of-the-art technology, we lighten your teeth 5-7 shades in just one hour. Visit generally takes about 90 minutes and you will be able to see results immediately.People generally think of teeth...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294362/orthodontics_ytpzad.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Orthodontics</h3>
                <p className="subtitle fs-5 mb-4">
Teeth that function well together make it possible to bite and chew properly, contribute to clear speech and have a pleasing appearance. Based on variables like your age, possible jaw imbalances, differences in the size of your teeth and more, we consider all Orthodontics treatment...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294836/clear-aligners_zc0rte.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Clear Aligners</h3>
                <p className="subtitle fs-5 mb-4">
Invisible braces are orthodontic devices that are composed of a clear material that's difficult to be seen, making them a wonderful alternative option for patients who do not seek metal braces. Clear Aligners are removable, you can take them off for short periods of time,...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294836/child-dentistry_nfpkgx.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Child Dentistry</h3>
                <p className="subtitle fs-5 mb-4">
We believe that every child deserves quality dental care, We don't think anything should stand in the way of your child having a healthy smile for a lifetime! From the time your son or daughter is between one and two years of age, he or...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294835/elder-dentistry_bq68ud.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Elder Dentistry</h3>
                <p className="subtitle fs-5 mb-4">
Many practices are not prepared to help the aging patients that require extra care, Dr. Heba Ammar has made it a point to provide additional care emphasis in Elder dentistry, she is aware of the emotional strain associated with caring for the elderly patient, and...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294836/root-canal_i9fnp9.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Root Canal</h3>
                <p className="subtitle fs-5 mb-4">
One-Visit Root Canal treatment for un-complicated conditions. Some teeth have more roots than other teeth. Therefore treating a tooth with many roots takes longer. Typically, teeth with active infections require more than one visit. Dr. Heba Ammar has performed many root canals and extractions and...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294835/tooth-extraction_td6ub8.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">dental surgery</h3>
                <p className="subtitle fs-5 mb-4">
Most visible teeth can be removed with a simple extraction, procedure typically requires just a local anesthetic and often only takes a few minutes to complete. In more complex cases a surgical extraction may be needed if the tooth has broken off at the gum...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649294835/wisdom-tooth_y86gwj.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Wisdom Teeth Removal</h3>
                <p className="subtitle fs-5 mb-4">
The extraction of wisdom teeth is a very common procedure. But it is important for us to take a 3D image of the mouth & jaw and perform a pre-surgical consultation; which can all be conveniently done here in Optimum Care Dental Clinic....</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649295072/teeth-bridge_n6dyba.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Crowns & Bridges</h3>
                <p className="subtitle fs-5 mb-4">
A dental crown is commonly used to correct cracked, chipped, and broken tooth, providing a strong shield against further damage and decay. Crowns are commonly used to strengthen and preserve teeth with large fillings or following a root canal and to provide a firm footing...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649295071/dental-hygiene_lzliav.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Dental Hygiene</h3>
                <p className="subtitle fs-5 mb-4">
Preventative care is the best way to keep your teeth healthy. Teeth cleaning not only removes build up like plaque and tartar, but it also proactively protects you from tooth loss and gum disease. Most patients require a thorough dental hygiene appointment twice a year....</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649295073/gum-disease_enwcvb.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Gum Disease Treatment</h3>
                <p className="subtitle fs-5 mb-4">
After a thorough periodontal evaluation, treatment range from non-surgical therapies to surgical procedures depending on the stage of disease, how you may have responded to earlier treatments, and your overall health. Your teeth were meant to last a life time, so keep in mind that...</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <img src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649295078/teeth-pain_dgtoik.jpg" className="card-img-top" alt="Card Img"/>
              <div className="card-body" style={{
                 background: "var(--background)"
              }}>
                <h3 className="title fw-light mb-3">Toothache</h3>
                <p className="subtitle fs-5 mb-4">
Whether you need a root canal, a tooth repaired or extracted; at Optimum Care Dental Clinic we try to make it as easy as possible for emergency patients to get immediate pain relief and get you back to your daily activities....</p>
                <Link to="/" className="btn  btn-outline-dark">Read More</Link>
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

export default OurServices;
