import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/app.css";
import Nav from "./components/App/Nav";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/aboutUs" exact>
          <AboutUs />
        </Route>

        <Route path="/ourServices" exact>
          <OurServices />
        </Route>

        <Route path="/testimonials" exact>
          <Testimonials />
        </Route>

        <Route path="/contactUs" exact>
          <ContactUs />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
