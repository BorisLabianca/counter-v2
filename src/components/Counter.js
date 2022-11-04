import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ counter, setCounter, name }) => {
  return (
    <div className={"counter"}>
      <div className="counter-main">
        <FontAwesomeIcon
          className="minus-btn"
          icon="minus"
          onClick={() => {
            if (name === "counter2") {
              const newCounter = [...counter];
              console.log(newCounter);
              newCounter.splice(1, 1, newCounter[1] - 1);
              setCounter(newCounter);
              console.log(newCounter);
            } else {
              const newCounter = [...counter];
              newCounter.splice(0, 1, counter[0] - 1);
              setCounter(newCounter);
              console.log(newCounter);
            }
          }}
        />

        <div className="counter-display">
          {name === "counter2" ? counter[1] : counter[0]}
        </div>
        <FontAwesomeIcon
          className="plus-btn"
          icon="plus"
          onClick={() => {
            if (name === "counter2") {
              const newCounter = [...counter];
              console.log(newCounter);
              newCounter.splice(1, 1, newCounter[1] + 1);
              setCounter(newCounter);
              console.log(newCounter);
            } else {
              const newCounter = [...counter];
              newCounter.splice(0, 1, counter[0] + 1);
              setCounter(newCounter);
              console.log(newCounter);
            }
          }}
        />
      </div>

      <button
        className="reset-btn"
        onClick={() => {
          if (name === "counter2") {
            const newCounter = [...counter];
            console.log(newCounter);
            newCounter.splice(1, 1, 0);
            setCounter(newCounter);
            console.log(newCounter);
          } else {
            const newCounter = [...counter];
            newCounter.splice(0, 1, 0);
            setCounter(newCounter);
            console.log(newCounter);
          }
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
