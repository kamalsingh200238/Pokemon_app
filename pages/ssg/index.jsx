import allPokemonData from "../../lib/allPokemonData";
import PokemonGrid from "../../components/PokemonGrid";

export async function getStaticProps() {
  const resp = await allPokemonData();
  return {
    props: {
      pokemon: resp,
    }, // will be passed to the page component as props
  };
}

export default function ssg({ pokemon }) {
  return (
    <>
      <div className="">This page is staticaly generated</div>
      <PokemonGrid allPokemonData={pokemon.results} />
    </>
  );
}
