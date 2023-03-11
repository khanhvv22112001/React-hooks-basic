import React, { useState } from "react";

ColorBox.propTypes = {};
function listBox() {
  const listColor = ["red", "blue", "white", "green"];
  const handleListColor = Math.trunc(Math.random() * 5);
  return listColor[handleListColor];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color" || "yellow");
    return initColor;
  });
  function handleBoxColor() {
    const newColor = listBox();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }
  return (
    <div style={{ backgroundColor: color }} onClick={handleBoxColor}>
      HelloWorld!!!
    </div>
  );
}

export default ColorBox;
