import React, { useEffect, useState } from "react";

const ScheduleAnAppointment = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dental-clinic-api.vercel.app/general/scheduleAnAppointment")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="ScheduleAnAppointment">
      {items.map((item) => (
        <div
          key={item.id}
          className="container py-5 text-light d-flex justify-content-between align-items-center flex-wrap"
        >
          <h1 className="fw-lighter my-3">{item.title}</h1>
          <a href={`tel:+${item.link}`} className="my-3">
            <button className="btn btn-outline-light fs-4">
              Request Now! <i className="fa fa-calendar-day px-2"></i>
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ScheduleAnAppointment;
