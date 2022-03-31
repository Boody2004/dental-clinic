import { Link } from "react-router-dom";

const ScheduleAnAppointment = () => {
  return (
    <div className="ScheduleAnAppointment">
      <div className="container py-5 text-light d-flex justify-content-between align-items-center flex-wrap">
        <h1 className="fw-lighter my-3">Schedule An Appointment</h1>
        <Link to="/" className="my-3">
          <button className="btn btn-outline-light fs-4">
            Request Now! <i className="fa fa-calendar-day px-2"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScheduleAnAppointment;
