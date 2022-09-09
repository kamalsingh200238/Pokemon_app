import singlePokemonData from "../../../lib/singlePokemonData";

export async function getServerSideProps({ params }) {
  const resp = await singlePokemonData(params.id);
  return {
    props: {
      singlePokemon: resp,
    }, // will be passed to the page component as props
  };
}
export default function pokemonPage({ singlePokemon }) {
  // console.log(singlePokemon);
  return (
    <>
      <div></div>
    </>
  );
}
