import css from "./ChangeObj.module.css";
import clsx from "clsx";

const ChangeObj = ({ h2, text, onUpdate }) => {
  return (
    <div>
      <h2 onClick={onUpdate}>{h2}</h2>
      <p className={clsx(css, css.text)}>{text}</p>
      <p className={clsx(css, css.text)}>
        Хуки пишуться тільки на верхньому рівні вкладеності <br />і ніколи не
        пишуться у циклах, умовах і вкладених функціях
      </p>
      <p className={clsx(css, css.text)}>
        віртуальний DOM це легенька копія браузерного DOM, у якій фіксуються
        зміни
      </p>
    </div>
  );
};

export default ChangeObj;
