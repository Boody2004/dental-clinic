import AboutDr from "../components/Home/AboutDr";
import Carousel from "../components/Home/Carousel";

const Home = () => {
  return (
    <section
      style={{
        height: "200vh",
      }}
    >
      <Carousel />
      <AboutDr />
    </section>
  );
};

export default Home;
