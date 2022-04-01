const ClinicData = () => {
  return (
    <div style={{ background: "var(--background)" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 py-3 d-flex align-items-center">
            <i
              className="fa fa-map-marker-alt mx-4 fs-4"
              style={{
                color: "var(--brand_primary)",
              }}
            ></i>
            <div className="text">
              <h6>address</h6>
              <p className="mb-0">City, Governorate, EG</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-3 d-flex align-items-center">
            <i
              className="fas fa-phone-alt mx-4 fs-4"
              style={{
                color: "var(--brand_primary)",
              }}
            ></i>
            <div className="text">
              <h6>+20 123 1234 123</h6>
              <p className="mb-0">Call us now</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-3 d-flex align-items-center">
            <i
              className="fa fa-clock mx-4 fs-4"
              style={{
                color: "var(--brand_primary)",
              }}
            ></i>
            <div className="text">
              <h6>Opening Hours</h6>
              <p className="mb-0">Sun – Wed: 10:00 – 10:00</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 py-3 d-flex align-items-center">
            <i
              className="fa fa-calendar-alt mx-4 fs-4"
              style={{
                color: "var(--brand_primary)",
              }}
            ></i>
            <div className="text">
              <h6>Book An Appointment</h6>
              <p className="mb-0">Online or by Phone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicData;
