import Image from "next/image";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

export default function MusicSpotlightItem(props) {
  return (
    <Link
      href={"/music"}
      className="flex flex-col justify-center hover:-translate-y-2 transition shadow-lg rounded-lg pb-3"
    >
      <Image
        className="object-cover rounded-t-lg"
        src={`/${props.url}.jpg`}
        width={320}
        height={100}
      />

      <div className="p-4 flex items-center">
        <span className="font-semibold text-lg">{props.name}</span>
        <div className="ml-3">
          <MdVerified size={20} className="text-blue-700" />
        </div>
      </div>
      <div className="px-4 pb-2 pt-0 rounded-xl flex items-center justify-between">
        <div className="flex flex-col w-1/2">
          <span className="text-base text-neutral-600 font-medium">Floor</span>
          <span className="text-base font-semibold">0.04 ETH</span>
        </div>
        <div className="flex flex-col items-end justify-center w-1/2">
          <span className="text-base text-neutral-600 font-medium">
            7 day volume
          </span>
          <span className="text-base font-semibold">0.04 ETH</span>
        </div>
      </div>
    </Link>
  );
}
