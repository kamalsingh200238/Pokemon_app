import PokemonCardImage from "./PokemonCardImage";
export default function PokemonCard(props) {
  // console.log(props.singlePokemonData);
  return (
    <>
      <div>{props.singlePokemonData.name}</div>
      <PokemonCardImage
        imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
        imageAlt={`Image of ${props.singlePokemonData.name}`}
      />
    </>
  );
}
