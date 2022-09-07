import Link from "next/link";
import { useRouter } from "next/router";
import PokemonCardImage from "./PokemonCardImage";

export default function PokemonCard(props) {
  // Determine which url we are on
  const route = useRouter();
  return (
    <>
      <Link href={`${route.asPath}/pokemon/${props.id}`}>
        <a className="bg-rose-200">
          <div>{props.singlePokemonData.name}</div>
          <PokemonCardImage
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
            imageAlt={`Image of ${props.singlePokemonData.name}`}
          />
        </a>
      </Link>
    </>
  );
}
