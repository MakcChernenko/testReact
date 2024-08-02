import css from "./Effect.module.css";
import clsx from "clsx";
import { useState, useEffect } from "react";

const Effect = () => {
  const [clicks, setClicks] = useState(0);

  // Оголошуємо ефект
  useEffect(() => {
    console.log("hello, useEfect works");
  }, []);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <p className={clsx(css, css.text)}>
        Хук useEffect приймає два параметри - колбек функцію і масив
        відслідковуваних залежностей, <br />
        якщо другий параметр не вказується, тоді буде рендер щоразу при зміні
        стану
      </p>
    </div>
  );
};

export default Effect;
