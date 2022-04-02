const Intro = (props) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${props.imgBg})`,
        height: "70vh",
        position: "relative",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="text-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="fw-bold fs-1 text-white">{props.title}</h1>
        <a href={props.linkBtn} className="fs-1 text-white">
          <i className="fa fa-angle-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Intro;
