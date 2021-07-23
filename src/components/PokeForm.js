import React, { useRef } from "react";

const PokeForm = ({ onSubmit }) => {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        name="pokemon-name"
        id="pokemon-name"
        placeholder="Pokemon Name"
      />
      <button>Find</button>
    </form>
  );
};

export default PokeForm;
