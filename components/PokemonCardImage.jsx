import Image from "next/image";

export default function PokemonCardImage(props) {
  return (
    <>
      <div className="relative">
        <Image
          priority
          src={props.imageUrl}
          alt={props.imageAlt}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </>
  );
}
