import { useState } from "react";
import { useSelector } from "react-redux";

function CounterSet() {

  const [number, setNumber] = useState(' ');

  const numberr = useSelector((store) => {
    return store.counter.number;
  });

  const Trans = (event) => {
    // if (numberr >= 5) {
    //   setNumber(numberr);
    // }
    // else {
    //   setNumber('Failed!');
    // }
    switch (numberr >= 5) {
      case true:
        setNumber(numberr);
        break;
      case false:
        setNumber("Click else please");
        break;
      default:
        setNumber("Failed!");
        break;
    }
  };
  return (
    <div>
      <input type="text" value={number} onChange={() => {}} />
      <button onClick={Trans}>Set</button>
    </div>
  );
}

export default CounterSet;
