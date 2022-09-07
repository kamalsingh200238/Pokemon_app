import PokemonCard from "./PokemonCard";
export default function PokemonGrid(props) {
  // console.log(props.allPokemonData);
  return (
    <>
      <div className="grid grid-cols-6">
        {props.allPokemonData.map((item) => {
          const id = item.url.split("/")[6];
          return <PokemonCard key={id} singlePokemonData={item} id={id} />;
        })}
      </div>
    </>
  );
}
