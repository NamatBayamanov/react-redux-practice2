import { useDispatch, useSelector } from "react-redux";
function CounterControl() {

  const dispatch = useDispatch();
  
  const Dispatch = (event) => {
    dispatch({ type: 'counter/increment', payload: null, });
  };
  const Dispatch2 = (event) => {
    dispatch({ type: 'counter/decrement', payload: null, });
  };


  const number = useSelector((store) => {
    return store.counter.number;
  });


  return ( 
    <div>
      <button onClick={Dispatch}>
        +
      </button>
      <button onClick={Dispatch2}>
        -
      </button>
      
    </div>
  );
}

export default CounterControl;