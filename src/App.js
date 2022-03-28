import "./App.css";
import { BioData } from "./components/bio/bioData";
import { HeroComponent } from "./components/hero/hero";
import { RoutesComponent } from "./components/routes/routes";

function App() {
  return (
    <div className="App">
      <RoutesComponent />
      <HeroComponent />
      <BioData />
    </div>
  );
}

export default App;
