import { useState } from 'react';
import './App.css';

const App = () => {
  const [clickOrder, setClickOrder] = useState([]);
  const [colors, setColors] = useState(Array(9).fill('bg-white'));

  const handleClick = (index) => {
    if (colors[index] === 'bg-white') {
      const newColors = [...colors];
      newColors[index] = 'bg-green-500';
      setColors(newColors);
      setClickOrder([...clickOrder, index]);

      if (clickOrder.length === 8) {
        changeAllToOrange([...clickOrder, index]);
      }
    }
  };

  const changeAllToOrange = (order) => {
    order.forEach((i, idx) => {
      setTimeout(() => {
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[i] = 'bg-orange-500';
          return newColors;
        });
      }, idx * 500); 
    });
  };

  const resetGame = () => {
    setClickOrder([]);
    setColors(Array(9).fill('bg-white'));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Color Game</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`box w-24 h-24 flex items-center justify-center border border-black cursor-pointer text-2xl ${colors[i]}`}
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Reset Game
      </button>
    </div>
  );
};

export default App;
