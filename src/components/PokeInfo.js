import React from "react";
import PokeCard from "./PokeCard";
import PokeEvolutionCard from "./PokeEvolutionCard";

const PokeInfo = ({ pokemon, onSelectPokemon }) => {
  return pokemon === null ? (
    <div>
      <h1>Ups it seems that your pokemon doesn't exist</h1>
    </div>
  ) : (
    <>
      <PokeCard pokemon={pokemon} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {pokemon.evolutions &&
          pokemon.evolutions.map((pokeEvolution) => (
            <PokeEvolutionCard
              onClick={onSelectPokemon}
              pokemonEvolution={pokeEvolution}
            />
          ))}
      </div>
    </>
  );
};

export default PokeInfo;
