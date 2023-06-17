import Link from "next/link";

export default function CategoryItem(props) {
  return (
    <Link
      className="bg-white hidden md:block hover:bg-neutral-100 rounded-md px-4 py-2 font-semibold text-lg mx-4"
      href={"/"}
    >
      {props.name}
    </Link>
  );
}
