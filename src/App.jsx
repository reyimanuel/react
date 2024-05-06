import { useState } from 'react'
import Isi from '../components/isi';

function Kotak({ value, onBoxClick }) {
    return (
    <button className="kotak" onClick={onBoxClick}>
        {value}
        </button>
    );
}

function App() {
  const names = ["rey", "dika", "budi"];
  const [waduh, setWaduh] = useState(0);
  const [box, setBox] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);

 function handleClick() {
      setWaduh(waduh + 1);
  }

  function handleBoxClick(i) {
    if (box[i]) {
        return;
    }

      const boxBaru = box.slice();

      boxBaru[i] = xNext ? 'X' : 'O';

      setBox(boxBaru);
      setXNext(!xNext);
  }

  return (
      <>
                
        <div className="papan">
            <Kotak value={box[0]} onBoxClick={() => handleBoxClick(0)} />  
            <Kotak value={box[1]} onBoxClick={() => handleBoxClick(1)} />  
            <Kotak value={box[2]} onBoxClick={() => handleBoxClick(2)} />  
            <Kotak value={box[3]} onBoxClick={() => handleBoxClick(3)} />  
            <Kotak value={box[4]} onBoxClick={() => handleBoxClick(4)} />  
            <Kotak value={box[5]} onBoxClick={() => handleBoxClick(5)} />  
            <Kotak value={box[6]} onBoxClick={() => handleBoxClick(6)} />  
            <Kotak value={box[7]} onBoxClick={() => handleBoxClick(7)} />  
            <Kotak value={box[8]} onBoxClick={() => handleBoxClick(8)} />  
        </div>

          <Isi />
          <Isi author="rey" />
          <ul>
              {names.map((name) => (
                  <li key={name}>{name}</li>
              ))}
          </ul>
          <button onClick={handleClick}>Click me ({waduh})</button>        
      </>
  );

}

function calculateWinner(box) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (box[a] && box[a] === box[b] && box[c]) {
            return box[a];
        }
    }

    return false;
}

export default App
