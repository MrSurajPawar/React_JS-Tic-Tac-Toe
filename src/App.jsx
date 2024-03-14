import Player from "./components/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        {/*Players section*/}
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        {/*Actual board section*/}
        GAME-BOARD
      </div>
      {/*Logs*/}
      LOGS
    </main>
  );
}

export default App;
