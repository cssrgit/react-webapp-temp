import "./App.css";
import { BioData } from "./components/bio/bioData";
import { Counter } from "./components/counter/counter";
import { HeroComponent } from "./components/hero/hero";
import { HireMe } from "./components/hireMe/hireMe";
import { Portfolio } from "./components/portfolio/portfolio";
import { RoutesComponent } from "./components/routes/routes";
import { Service } from "./components/service/service";
import Testimonial from "./components/testimonial/testimonial";

function App() {
  return (
    <div className="App">
      <RoutesComponent />
      <HeroComponent />
      <BioData />
      <Portfolio />
      <Counter />
      <Service />
      <Testimonial />
      <HireMe />
    </div>
  );
}

export default App;
