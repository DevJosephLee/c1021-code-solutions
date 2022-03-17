import React, {useState} from 'react';

function HotButton() {
  const [count, setCount] = useState(0);

  let buttonClass;
  if (count === 0) {
    buttonClass = ""
  } else if (count > 0 && count <= 3) {
    buttonClass = "purple"
  } else if (count >= 4 && count <= 6) {
    buttonClass = "light-purple"
  } else if (count >= 7 && count <= 9) {
    buttonClass = "red"
  } else if (count >= 10 && count <= 12) {
    buttonClass = "orange"
  } else if (count >= 13 && count <= 16) {
    buttonClass = "yellow"
  } else {
    buttonClass = "white"
  }

  return (
    <div>
      <button className={buttonClass} onClick={() => setCount(count + 1)}>Hot Button</button>
    </div>
  )
}

export default HotButton;
