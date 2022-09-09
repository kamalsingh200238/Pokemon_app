import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import singlePokemonData from "../../../lib/singlePokemonData";

export default function pokemonPage() {
  // Pokemon Data state
  const [singlePokemon, setSinglePokemon] = useState([]);

  // Get id of pokemon to call api
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      async function getData() {
        setSinglePokemon(await singlePokemonData(id));
      }
      getData();
    }
  }, [id]);

  console.log(id);
  console.log(singlePokemon);

  return (
    <>
      <div>{singlePokemon.name}</div>
    </>
  );
}
