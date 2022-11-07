import Calculator from "./components/Calculator/Calculator";
import Counter from "./components/Counter/Counter";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <Counter/>
      <Todos/>
      <Calculator/>
    </div>
  );
}

export default App;
