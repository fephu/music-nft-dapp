import Image from "next/image";
import Link from "next/link";

export default function FeaturesItem(props) {
  return (
    <Link
      href={"/"}
      className="flex flex-col justify-center shadow-lg rounded-lg pb-3"
    >
      <Image
        className="object-cover rounded-t-lg"
        src={`/${props.url}`}
        width={320}
        height={100}
      />

      <div className="p-4 flex items-center">
        <span className="font-semibold text-lg">{props.name}</span>
      </div>
    </Link>
  );
}
