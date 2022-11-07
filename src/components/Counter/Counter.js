import CounterControl from "./CounterControl/CounterControl";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import CounterSet from "./CounterSet/CounterSet";

function Counter() {
  return ( 
    <article>
      <CounterControl/>
      <CounterDisplay/>
      <CounterSet/>
    </article>
  );
}

export default Counter;