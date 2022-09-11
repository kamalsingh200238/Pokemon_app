import Image from "next/image";

export default function PokemonInfoImage(props) {
  return (
    <div className="relative aspect-square w-52">
      <Image
        priority
        src={
          props.singlePokemon.sprites.other.dream_world.front_default ||
          props.singelPokemon.sprites.other["official-artwork"].front_default
        }
        alt={`Image of ${props.singlePokemon.name}`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
