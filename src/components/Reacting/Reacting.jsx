import { useState } from "react";

const Reacting = () => {
  //   let clicks = 0;
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
  };
  const toggleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={toggleOpenClose}> {isOpen ? "Hide" : "Show"} </button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};

export default Reacting;
