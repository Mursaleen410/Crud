import React, { useState } from 'react';

function Colorproject() {
  const [color, setColor] = useState("green");
  const [text, setText] = useState("");

  // Function to generate a random color
  const getRandomColor=()=>{
    const latters="123456789ABCDEFG"
    let newColor="#"
    for (let i = 0; i < 6; i++) {
       newColor+=latters[Math.floor(Math.random()*16)]
    }
    return newColor;
  }

  const handleRandomColorClick = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
    setText(randomColor);
  };

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex  flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            className='outLine-none px-1 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className='outLine-none px-1 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className='outLine-none px-1 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className='outLine-none px-1 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "gray" }}
            onClick={handleRandomColorClick}
          >
            Random Color
          </button>
          {text && (
            <div className="mt-2 text-center text-gray-800">
              Color Code: {text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Colorproject;
