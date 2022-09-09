import allPokemonData from "../../lib/allPokemonData.js";
import PokemonGrid from "../../components/PokemonGrid";

export async function getServerSideProps() {
  const resp = await allPokemonData();
  return {
    props: {
      pokemon: resp,
    }, // will be passed to the page component as props
  };
}

export default function ssr({ pokemon }) {
  // console.log(pokemon);
  return (
    <>
      <div>This page is generated on the client side</div>
      <PokemonGrid allPokemonData={pokemon.results} />
    </>
  );
}
