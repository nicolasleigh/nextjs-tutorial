import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id: string) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch a drink...");
  }
  return res.json();
};

export default async function SingleDrinkPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href={"/drinks"} className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
        alt='drink image'
      ></Image>
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  );
}
