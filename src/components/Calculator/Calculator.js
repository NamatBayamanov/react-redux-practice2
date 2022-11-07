// import { useState } from "react";
import CalculateCalculation from "./CalculateCalculation/CalculateCalculation";
import CalculateControl from "./CalculateControl/CalculateControl";
import CalculateField from "./CalculateField/CalculateField";
import classes from "./Calculator.module.scss";

  // const [a, setA] = useState(+' ');
  // const [b, setB] = useState(+' ');
  // const [conclution, setConclution] = useState(0);
  // const [symbol, setSymbol] = useState(null);

  // Это метод (функция) добавления цифр This method (function) of Adding numbers
  // const addingNum = (event) => {
  //   return setSymbol("+");
  // };

  // Это метод (функция) убавления цифр This method (function) of decrease numbers
  // const minusNum = (event) => {
  //   return setSymbol("-");
  // };

  // Это метод (функция) умножения цифр This method (function) of multiplication numbers
  // const multipleNum = (event) => {
  //   setSymbol("*");
  // };

  // Это метод (функция) деления цифр This method (function) of devesion numbers
  // const divisionNum = (event) => {
  //   setSymbol("/");
  // };

  // этот метод уровнение высше перечисленных функций this method is the equation of the above functions
  // const equationMethod = (e) => {
  //   if (symbol === "+") setConclution(a + b);
  //   setA(0);
  //   setB(0);
  //   if (symbol === "-") setConclution(a - b);
  //   setA(0);
  //   setB(0);
  //   if (symbol === "*") setConclution(a * b);
  //   setA(0);
  //   setB(0);
  //   if (symbol === "/") setConclution(a / b);
  //   setA(0);
  //   setB(0);
  //   switch (symbol) {
  //     case "+":
  //       setConclution(a + b);
  //       setA(0);
  //       setB(0);
  //       break;
  //     case "-":
  //       setConclution(a - b);
  //       setA(0);
  //       setB(0);
  //       break;
  //     case "*":
  //       setConclution(a * b);
  //       setA(0);
  //       setB(0);
  //       break;
  //     case "/":
  //       setConclution(a / b);
  //       setA(0);
  //       setB(0);
  //       break;
  //   }
  // };
  // this is to clean - это чтобы очищать
  // const cleanBut = (e) => {
  //   setConclution(0);
  // };
function Calculator() {
  return (
    <article className={classes.Calculator}>
      <CalculateField/>
      <CalculateCalculation/>
      <CalculateControl/>
    </article>
  );
}

export default Calculator;
