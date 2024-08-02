import { useState } from "react";
import clsx from "clsx";
import "./App.css";
import Button from "./components/Button/Button.jsx";
import CustomButton from "./components/CustomButton/CustomButton.jsx";
import Reacting from "./components/Reacting/Reacting.jsx";
import AppClick from "./components/appClick/AppClick.jsx";
import ChangeObj from "./components/ChangeObj/ChangeObj.jsx";
import Effect from "./components/Effect/Effect.jsx";
import Modal from "./components/Modal/Modal.jsx";
import LocalStorage from "./components/LocalStorage/LocalStorage.jsx";

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState({
    congratulation: "hello, press on title",
    finally: "great, all works",
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const handleText = () => {
    setText((basicText) => ({
      ...basicText,
      congratulation:
        basicText.congratulation === "hello, press on title"
          ? basicText.finally
          : "hello, press on title",
    }));
  };
  return (
    <div className={clsx("main")}>
      <Button />
      <CustomButton message={"button works"}>Max GOOD BOY</CustomButton>
      <Reacting />
      <Reacting />
      <AppClick value={clicks} onUpdate={handleClick} />
      <ChangeObj h2="title" text={text.congratulation} onUpdate={handleText} />
      <Effect />
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "Закрити модальне вікно" : "Відкрити модальне вікно"}
      </button>
      {isOpen && <Modal />}
      <p className={clsx("text")}>
        Якщо ефект використовує якийсь пропс, або змінну, або стан оголошені у
        середині компонента <br />
        тоді їх обов'язково потрібно записати як залежності ефекту
      </p>
      <p className={clsx("text")}>
        Ефектів у компонента, як і станів, може бути скільки завгодно, головне
        вірно вказувати залежності
      </p>
      <LocalStorage />
    </div>
  );
};

export default App;
