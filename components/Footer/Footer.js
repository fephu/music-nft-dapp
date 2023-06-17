import {
  FaDiscord,
  FaInstagram,
  FaRedditAlien,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col pb-20">
      <div className="flex items-center px-6 py-20 border-b-2">
        <div className="flex flex-col w-1/2">
          <span className="text-2xl font-bold text-white mb-4">
            Stay In The Loop
          </span>
          <p className="text-white">
            Join our music submission list to stay up to date with our latest
            feature releases, NFT drops, and tips and tricks for navigating the
            Music_NFT-streaming-app.
          </p>
        </div>
        <div className="flex w-1/2 flex-col pl-40 pr-40">
          <span className="text-2xl font-bold text-white mb-4">
            Join the Communities
          </span>
          <div className="flex justify-between">
            <Link
              href={"/"}
              className="text-2xl text-white bg-blue-400 p-2 m-2 rounded-lg"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-white bg-blue-400 p-2 m-2 rounded-lg"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-white bg-blue-400 p-2 m-2 rounded-lg"
            >
              <FaDiscord />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-white bg-blue-400 p-2 m-2 rounded-lg"
            >
              <FaRedditAlien />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-white bg-blue-400 p-2 m-2 rounded-lg"
            >
              <FaYoutube />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-white bg-blue-400 p-2 m-2 rounded-lg"
            >
              <FaTiktok />
            </Link>
            <Link
              href={"/"}
              className="text-2xl text-white bg-blue-400 p-2 m-2 rounded-lg"
            >
              <AiOutlineMail />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-12 p-6">
        <div className="relative w-16 h-16 ">
          <img
            className="text-white"
            src="https://res.cloudinary.com/dnj5kt9rv/image/upload/v1686643842/3B_1_xxig9w.svg"
          />
        </div>
        <div className="text-3xl font-semibold my-2 text-white">
          Music-NFTs-streaming-app
        </div>
        <div className="text-base text-white">
          The world first and largest digital marketplace for electronic music
          collections and non-fungible tokens (NFTs). Buy, sell and discover
          exclusive digital items.
        </div>
      </div>
    </div>
  );
}
