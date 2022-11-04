import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ counter, setCounter, index }) => {
  return (
    <div className={"counter"}>
      <div className="counter-main">
        <FontAwesomeIcon
          className={counter[index] > 0 ? "minus-btn" : "minus-btn hidden"}
          icon="minus"
          onClick={() => {
            // if (name === "counter2") {
            //   const newCounter = [...counter];
            //   console.log(newCounter);
            //   newCounter.splice(1, 1, newCounter[1] - 1);
            //   setCounter(newCounter);
            //   console.log(newCounter);
            // } else {
            //   const newCounter = [...counter];
            //   newCounter.splice(0, 1, counter[0] - 1);
            //   setCounter(newCounter);
            //   console.log(newCounter);
            // }
            const newCounter = [...counter];
            newCounter[index] = counter[index] - 1;
            setCounter(newCounter);
            // console.log(counter);
          }}
        />

        <div className="counter-display">
          {/* {name === "counter2" ? counter[1] : counter[0]} */}
          {counter[index]}
        </div>
        {
          <FontAwesomeIcon
            className={counter[index] < 10 ? "plus-btn" : "plus-btn hidden"}
            icon="plus"
            onClick={() => {
              // if (name === "counter2") {
              //   const newCounter = [...counter];
              //   console.log(newCounter);
              //   newCounter.splice(1, 1, newCounter[1] + 1);
              //   setCounter(newCounter);
              //   console.log(newCounter);
              // } else {
              //   const newCounter = [...counter];
              //   newCounter.splice(0, 1, counter[0] + 1);
              //   setCounter(newCounter);
              //   console.log(newCounter);
              // }
              const newCounter = [...counter];
              newCounter[index] = counter[index] + 1;
              setCounter(newCounter);
              //   console.log(counter);
            }}
          />
        }
      </div>

      <button
        className="reset-btn"
        onClick={() => {
          //   if (name === "counter2") {
          //     const newCounter = [...counter];
          //     console.log(newCounter);
          //     newCounter.splice(1, 1, 0);
          //     setCounter(newCounter);
          //     console.log(newCounter);
          //   } else {
          //     const newCounter = [...counter];
          //     newCounter.splice(0, 1, 0);
          //     setCounter(newCounter);
          //     console.log(newCounter);
          //   }
          const newCounter = [...counter];
          newCounter[index] = 0;
          setCounter(newCounter);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
