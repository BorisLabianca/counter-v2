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
  const [counter, setCounter] = useState([0]);
  const [counterNumber, setCounterNumber] = useState(1);
  // console.log(counter);
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon className="top-left-icon" icon="stopwatch" />
        <span>React Counter v2</span>
      </header>
      <main>
        <button
          className={counterNumber === 3 ? "add-counter-hdn" : ""}
          onClick={() => {
            setCounterNumber(counterNumber + 1);
            const newCounter = [...counter, 0];
            setCounter(newCounter);
            // console.log(counterNumber);
          }}
        >
          Add counter
        </button>
        <div className="counter-section">
          {" "}
          {counter.map((elem, index) => {
            return (
              <Counter
                key={index}
                elem={elem}
                counter={counter}
                setCounter={setCounter}
                index={index}
              />
            );
          })}
        </div>

        {/* <div className="counter-section">
          {" "}
          <Counter counter={counter} setCounter={setCounter} />
          {counterNumber >= 2 && (
            <Counter
              counter={counter}
              setCounter={setCounter}
              name={"counter2"}
            />
          )}
          {counterNumber >= 3 && (
            <Counter
              counter={counter}
              setCounter={setCounter}
              name={"counter3"}
            />
          )}
        </div> */}
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
