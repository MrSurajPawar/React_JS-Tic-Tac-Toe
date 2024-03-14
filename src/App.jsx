import Player from "./components/PLayer.jsx";   //This is the bug of vs code where PLayer is same as Player component
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
function App() {
  const [activePlayer , setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
  }
  
  return (
    <main>
      <div id="game-container">
        {/*Players section*/}
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        {/*Actual board section*/}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      {/*Logs*/}
      LOGS
    </main>
  );
}

export default App;
