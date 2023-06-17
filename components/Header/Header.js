import { Web3Button, Web3Modal } from "@web3modal/react";
import Link from "next/link";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Search from "../Search";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-20 top-0 sticky ">
      <nav className="flex h-full justify-center items-center ">
        <div className="w-20 h-20 relative flex items-center object-cover">
          <Link href={"/"}>
            <Image width={64} height={16} className="pt-9" src="/logo.svg" />
          </Link>
        </div>
        <div>
          <div className="flex">
            <div className="h-8 ">
              <div className="bg-neutral-300 h-full w-0.5 mx-6"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-8 pr-8">
          <Link href="/" className="text-black ">
            <span className="font-semibold text-lg">Drops</span>
          </Link>
          <Link href="/" className="text-black text-lg">
            <span className="font-semibold">Stats</span>
          </Link>
        </div>
        <Search />
        <ul className="flex md:flex-shrink-0">
          <div className="flex">
            <div className="block">
              <div className="flex justify-center items-center h-full pr-3">
                <div className="inline-flex">
                  <div className="block">
                    {/* <button className="items-stretch gap-x-3 inline-flex h-12 p-3 rounded-tl-xl rounded-bl-xl border-2 border-r border-solid bg-white">
                                 <FaWallet style={{ color: 'black' }} className=" leading-none tracking-normal normal-case inline-block text-2xl" />
                                 <span className="font-semibold text-black">Connect Wallet</span>
                              </button> */}
                    <Web3Button />
                    <Web3Modal themeMode="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <li className="flex justify-center items-center">
            <ul className="flex">
              <div className="flex justify-center flex-col">
                <div className="block">
                  <button className="rounded-xl p-3 relative h-12 w-12 border-2 border-solid bg-white">
                    <MdOutlineLocalGroceryStore
                      className="flex items-center text-2xl"
                      style={{ color: "black" }}
                    />
                  </button>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
