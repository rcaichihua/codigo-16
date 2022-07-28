import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  //vamos a crear una funcion que aumente el contador

  const increment = () => {
    //function increment() { //Funcion normal
    setCounter(counter + 1);
  };
  const decrease = () => {
    //function increment() { //Funcion normal
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <Header />
      <Counter
        counter_send={counter}
        increment_send={increment}
        decrease_send={decrease}
      />
      <Footer />
    </div>
  );
}

export default App;
