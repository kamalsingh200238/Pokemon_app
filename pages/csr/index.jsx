import { useEffect, useState } from "react";
import allPokemonData from "../../lib/allPokemonData.js";

export default function Csr() {
  //state to store pokemon data
  const [pokemon, setPokemon] = useState([]);

  //Gett data form api
  useEffect(() => {
    async function getData() {
      setPokemon(await allPokemonData());
    }
    getData();
  }, []);

  // console.log(pokemon);

  if (pokemon.results) {
    return (
      <>
        <div>This page is generated on the client side</div>
      </>
    );
  } else {
    return <div> Loading...</div>;
  }
}
