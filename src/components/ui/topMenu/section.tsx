import Link from "next/link";

export const Section = () => {
  return (
    <div>
      <Link
        className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        href="/gender/men"
      >
        Hombres
      </Link>
      <Link
        className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        href="/gender/women"
      >
        Mujeres
      </Link>
      <Link
        className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        href="/gender/kid"
      >
        Niños
      </Link>
    </div>
  );
};
