import Animation from "./components/Animations/Animations";
import Calculator from "./components/Calculator/Calculator";
import Comments from "./components/Comments/Comments";
import Counter from "./components/Counter/Counter";
import Photos from "./components/Photos/Photos";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <Counter/>
      <Todos/>
      <Calculator/>
      <Animation/>
      <Photos/>
      <Comments/>
    </div>
  );
}

export default App;
