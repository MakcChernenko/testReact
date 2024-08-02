// import clsx from "clsx";
import { useState, useEffect } from "react";

const LocalStorage = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("objPage");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks).clicks;
    } else {
      return {};
    }
  });

  const addedClick = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    console.log(clicks);
  }, [clicks]);

  //   useEffect(() => {
  //     window.localStorage.setItem("saved-clicks", clicks);
  //   }, [clicks]);

  useEffect(() => {
    window.localStorage.setItem("objPage", JSON.stringify({ clicks }));
  }, [clicks]);

  return (
    <div>
      <button onClick={addedClick}> clicks = {clicks} </button>
      <button
        onClick={() => {
          setClicks(0);
        }}
      >
        reset clicks
      </button>
    </div>
  );
};

export default LocalStorage;
