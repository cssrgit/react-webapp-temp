import "./App.css";
import { HeroComponent } from "./components/hero/hero";
import { RoutesComponent } from "./components/routes/routes";

function App() {
  return (
    <div className="App">
      <RoutesComponent />
      <HeroComponent />
    </div>
  );
}

export default App;
