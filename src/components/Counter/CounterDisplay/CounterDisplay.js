import { useSelector } from "react-redux";
function CounterDisplay() {

  const number = useSelector((store) => {
    return store.counter.number;
  });

  // console.log(number);
  return ( 
    <div>
      <h2>{number}</h2>
    </div>
  );
}

export default CounterDisplay;