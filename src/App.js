import Showcase from "./Showcase";

function App() {
  const favPokemon = "Bulbasaur"
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  }



  return (
    <div>
      {favPokemon}'s'
      < Showcase />
    </div>
  );
}

export default App;
