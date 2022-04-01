import "./App.css";
import { BioData } from "./components/bio/bioData";
import { Counter } from "./components/counter/counter";
import { HeroComponent } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { RoutesComponent } from "./components/routes/routes";
import { Service } from "./components/service/service";

function App() {
  return (
    <div className="App">
      <RoutesComponent />
      <HeroComponent />
      <BioData />
      <Portfolio />
      <Counter />
      <Service />
    </div>
  );
}

export default App;
