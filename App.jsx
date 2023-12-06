import "./App.css";
import styles from "./App.module.css";
import Display from "./Display.jsx";
import Buttoncontainer from "./Buttoncontainer.jsx";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "DEL") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "C") {
      if (calVal.length > 0) {
        setCalVal(calVal.substring(0, calVal.length - 1));
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Buttoncontainer onButtonClick={onButtonClick}></Buttoncontainer>
    </div>
  );
}

export default App;
