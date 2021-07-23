import React from "react";

const PokeEvolutionCard = ({ pokemonEvolution, onClick }) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => onClick(pokemonEvolution.name)}
    >
      <img
        style={{ width: 200, height: 200 }}
        src={pokemonEvolution.image}
        alt={`${pokemonEvolution.name}`}
      />
      <p>{pokemonEvolution.name}</p>
    </div>
  );
};

export default PokeEvolutionCard;
