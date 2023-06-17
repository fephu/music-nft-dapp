import Image from "next/image";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

export default function ContentItem(props) {
  return (
    <Link
      href={"/author"}
      className="flex items-center justify-around md:justify-between  mb-4 mt-2 hover:bg-neutral-100 py-4 px-2 rounded-lg"
    >
      <div className="flex items-center justify-start md:justify-center">
        <div className="mr-2 w-6 block">
          <span className="font-semibold text-base">{props.index}</span>
        </div>

        <div className="flex">
          <Image
            src={props.url}
            width={80}
            height={80}
            className="object-cover rounded-lg"
          />

          <div className="pl-6 items-start self-center flex-row flex ml-2">
            <div className="flex items-center justify-center">
              <span className="font-semibold text-base">{props.name}</span>
            </div>
            <div className="flex items-center justify-center mt-1 ml-2">
              <MdVerified size={20} className="text-blue-800" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex items-center justify-center hidden">
        <div className="">
          <span className="font-semibold text-base">0.37 ETH</span>
        </div>
        <div className="ml-52">
          <span className="font-semibold text-base">0.37 ETH</span>
        </div>
      </div>
    </Link>
  );
}
