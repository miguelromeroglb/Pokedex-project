import { useState } from "react";
import PokeForm from "./components/PokeForm";
import PokePending from "./components/PokePending";
import PokeInfo from "./components/PokeInfo";
import usePokedex from "./graphql-api/usePokedex";
import "./styles.css";

/**
 *  1. Implement an input field to search a pokemon by its name
 *  2. When loading flag is true, show a loading component
 *  3. When pokemon response is empty, show a not found card component
 *  4. If the pokemon has evolutions show them.
 *  5. When user clicks on a evolution update the PokeCard
 *  5. Test you application
 *
 *  NOTE: DO NOT change PokeCard component and usePokedex hook
 */

export default function App() {
  const [pokemon, setPokemon] = useState("charmander");
  const result = usePokedex(pokemon);
  const changePokemon = (pokeName) => {
    setPokemon(pokeName);
  };
  return (
    <div className="App">
      <PokePending pending={result.loading}>
        <PokeForm onSubmit={changePokemon} />
        <PokeInfo
          onSelectPokemon={changePokemon}
          pokemon={result.data && result.data.pokemon}
        />
      </PokePending>
    </div>
  );
}
