import PokemonInfoImage from "./PokemonInfoImage";

export default function PokemonInfo(props) {
  return (
    <div className="">
      <PokemonInfoImage singlePokemon={props.singlePokemon} />
      <div className="">{props.singlePokemon.name}</div>
    </div>
  );
}
