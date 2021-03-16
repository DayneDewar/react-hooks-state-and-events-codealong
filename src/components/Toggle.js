import React, { userState, useState } from "react";

function Toggle() {
  const [isOff, setIsOff] = useState(true);

  const toggleSwitch = () => {setIsOff(!isOff)}

  const color = isOff ? "white" : "red";

  return <button style={{ background: color }} onClick={toggleSwitch}>{isOff ? "OFF" : "ON"}</button>;
}

export default Toggle;
