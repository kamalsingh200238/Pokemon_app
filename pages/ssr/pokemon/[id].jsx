import singlePokemonData from "../../../lib/singlePokemonData";
import PokemonInfo from "../../../components/PokemonInfo";

export async function getServerSideProps({ params }) {
  const resp = await singlePokemonData(params.id);
  return {
    props: {
      singlePokemon: resp,
    }, // will be passed to the page component as props
  };
}
export default function pokemonPage({ singlePokemon }) {
  return (
    <>
      <PokemonInfo singlePokemon={singlePokemon} />
    </>
  );
}
