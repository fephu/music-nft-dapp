import Link from "next/link";
import { MdVerified } from "react-icons/md";
import MusicSpotlightItem from "./MusicSpotlightItem";

export default function MusicSpotlight() {
  return (
    <div className="flex flex-col mt-48">
      <div className="pb-8">
        <span className="font-bold text-3xl">Music Spotlight</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <MusicSpotlightItem url="NauAnChoEm" name="Nấu Ăn Cho Em" />
        <MusicSpotlightItem url="LacTroi" name="Lạc Trôi" />
        <MusicSpotlightItem url="DoToc2" name="Độ Tộc 2" />
        <MusicSpotlightItem url="SeeTinh" name="See Tình" />
      </div>
    </div>
  );
}
