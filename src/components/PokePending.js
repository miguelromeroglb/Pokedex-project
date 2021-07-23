import React from "react";

const PokePending = ({ pending, children }) => {
  return pending ? (
    <div>
      <h1>Pokedex</h1>
      <p>We are searching your pokemon, please wait...</p>
    </div>
  ) : (
    children
  );
};

export default PokePending;
