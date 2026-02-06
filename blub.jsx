import { useState } from "react";

function Blub() {
  const [startFill, setStartFill] = useState(false);
  const [bulbOn, setBulbOn] = useState(false);

 const startPower = () => {
  setBulbOn(false);
  setStartFill(false);

  setTimeout(() => {
    setStartFill(true);
  }, 50);
};


  const handleAnimationEnd = () => {
    setBulbOn(true);
  };

  return (
    <>
      <div className="wire">
        <div
          className={`progress ${startFill ? "animate" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        ></div>
      </div>

      <div className={`blub ${bulbOn ? "on" : ""}`}></div>

      <button className="btn" onClick={startPower}>ON</button>
    </>
  );
}

export default Blub;

