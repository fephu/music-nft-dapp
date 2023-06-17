import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function Heading() {
  return (
    <div className="w-full border-b border-neutral-200 mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Link
            href={"/"}
            className="font-semibold text-3xl px-4 pt-2 pb-4 text-black border-b-2 border-black transition"
          >
            Trending
          </Link>
          <Link
            href={"/"}
            className="text-neutral-500 font-semibold text-3xl px-4 pt-2 pb-4 hover:text-black transition"
          >
            Top
          </Link>
        </div>

        <div className="flex mb-2 items-center">
          <div className="border-2 border-neutral-300 rounded-lg cursor-pointer transition">
            <div className="flex flex-row">
              <Link
                href={"/"}
                className="flex items-center font-bold px-4 hover:shadow-md hover:bg-neutral-200"
              >
                1h
              </Link>
              <Link
                href={"/"}
                className="flex items-center font-bold px-4 hover:shadow-md hover:bg-neutral-200"
              >
                6h
              </Link>
              <Link
                href={"/"}
                className="flex items-center font-bold px-4 hover:shadow-md py-2 hover:bg-neutral-200"
              >
                24h
              </Link>
              <Link
                href={"/"}
                className="flex items-center font-bold px-4 hover:shadow-md hover:bg-neutral-200"
              >
                7d
              </Link>
            </div>
          </div>

          <div className="flex mx-16 items-center shadow-sm px-2 hover:shadow-md border-2 border-neutral-300 cursor-pointer rounded-lg transition">
            <button className="py-2 px-3 w-24 inline-flex flex-col items-center justify-center font-bold leading-5 ">
              All chains
            </button>
            <div className="self-stretch  flex justify-center">
              <div className="justify-center flex flex-col ml-2 pr-2">
                <FaArrowDown />
              </div>
            </div>
          </div>

          <div className="flex items-center border-2 border-neutral-300 shadow-sm hover:shadow-md rounded-lg transition">
            <Link
              href={"/"}
              className="px-4 py-2 flex items-center justify-center font-bold"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
