import "./App.css";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
//import de fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMinus,
  faPlus,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(faStopwatch, faPlus, faMinus);

function App() {
  const [counter, setCounter] = useState([0, 0]);
  console.log(counter);
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon className="top-left-icon" icon="stopwatch" />
        <span>React Counter v2</span>
      </header>
      <main>
        <button>Add counter</button>
        <Counter counter={counter} setCounter={setCounter} />
        <Counter counter={counter} setCounter={setCounter} name={"counter2"} />
      </main>
      <Footer
        tech={"React"}
        techSite={"https://reactjs.org/"}
        place={"Le Reacteur"}
        placeSite={"https://www.lereacteur.io/"}
        author={"Boris"}
        linkedin={"https://www.linkedin.com/in/boris-labianca-01a52871/"}
      />
    </div>
  );
}

export default App;
