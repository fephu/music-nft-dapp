import { FaDiscord, FaRegStar, FaTwitter } from "react-icons/fa";
import { MdMoreHoriz, MdVerified } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import Description from "../components/Author/Description";
import HeadingAuthor from "../components/Author/HeadingAuthor";

export default function Author() {
  return (
    <div className="flex h-full flex-col grow shrink">
      <HeadingAuthor />
      <Description />
    </div>
  );
}
