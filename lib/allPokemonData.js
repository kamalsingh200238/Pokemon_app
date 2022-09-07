export default async function allPokemonData() {
  const resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50"
  );
  const data = await resp.json();
  return data;
}
