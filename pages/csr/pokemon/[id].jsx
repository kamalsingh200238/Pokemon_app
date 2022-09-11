import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import singlePokemonData from "../../../lib/singlePokemonData";
import PokemonInfo from "../../../components/PokemonInfo";

export default function pokemonPage() {
  // Pokemon Data state
  const [singlePokemon, setSinglePokemon] = useState([]);

  // Get id of pokemon to call api
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    async function getData() {
      setSinglePokemon(await singlePokemonData(id));
    }
    //check id is not undefinded
    if (id) {
      getData();
    }
  }, [id]);

  // Checking singlePokemon is not undefined
  if (singlePokemon.name) {
    return (
      <>
        <PokemonInfo singlePokemon={singlePokemon} />
      </>
    );
  } else {
    return <div>Loading</div>;
  }
}
