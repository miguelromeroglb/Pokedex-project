import React from "react";
import { render } from "@testing-library/react";
import PokeCard from "../PokeCard";

describe("<PokeCard/>", () => {
  it("Should Render the PokeCard markup", () => {
    const pokemon = {
      name: "Charmander",
      number: "004",
      image: "",
      attacks: {
        special: [
          {
            name: "Flame Burst",
            type: "Fire",
            damage: "30"
          }
        ]
      }
    };

    let { container } = render(<PokeCard pokemon={pokemon} />);

    expect(container).toMatchSnapshot("Poke Card");
  });
});
