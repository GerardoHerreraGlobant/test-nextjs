export type HeroComponentProps = {
  params: {
    id: number;
  };
};

export type Character = {
  id: number;
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  eye_color: string;
};

const getCharacter = async (id: number) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}/`);
  const character: Character = await res.json();
  character.id = id;
  return character;
};


export default async function HeroPage({ params }: HeroComponentProps) {
  const { id } = await params

  const hero = await getCharacter(id);

  return (
    <div>
      <h2 data-testid="heading">Details about - {hero.name}</h2>
      <ul>
        <li>Name: {hero.name}</li>
        <li>Height: {hero.height}</li>
        <li>Mass: {hero.mass}</li>
        <li>Hair: {hero.hair_color}</li>
        <li>Eyes: {hero.eye_color}</li>
      </ul>
    </div>
  );
};
