import singlePokemonData from "../../../lib/singlePokemonData";
import allPokemonData from "../../../lib/allPokemonData.js";
import PokemonInfo from "../../../components/PokemonInfo";

// To get dynamic paths
export async function getStaticPaths() {
  //get data from api
  const resp = await allPokemonData();

  //Create paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
  const paths = resp.results.map((item) => {
    return { params: { id: item.url.split("/")[6] } };
  });

  return {
    paths,
    // paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

// Function that gets data from an api
export async function getStaticProps({ params }) {
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
