import AboutDr from "../components/Home/AboutDr";
import Carousel from "../components/Home/Carousel";
import OurCompetencies from "../components/Home/OurCompetencies";

const Home = () => {
  return (
    <section>
      <Carousel />
      <AboutDr />
      <OurCompetencies />
    </section>
  );
};

export default Home;
