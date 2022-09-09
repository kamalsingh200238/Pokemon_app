export default async function singlePokemonData(id) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await resp.json();
  return data;
}
