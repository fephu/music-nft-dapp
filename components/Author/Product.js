import Link from "next/link";
import { MdVerified } from "react-icons/md";
import MusicSpotlight from "../MusicSpotlight/MusicSpotlight";
import MusicSpotlightItem from "../MusicSpotlight/MusicSpotlightItem";

export default function Product() {
  return (
    <div className="pb-6 items-center">
      <div className="pb-6">
        <span className="font-bold text-3xl">Music </span>
      </div>
      <div className="flex items-center gap-10">
        <MusicSpotlightItem url="NauAnChoEm" name="Nấu Ăn Cho Em" />
        <MusicSpotlightItem url="Mo" name="Mơ" />
        <MusicSpotlightItem url="MangTienVeChoMe" name="Mang Tiền Về Cho Mẹ" />
      </div>
    </div>
  );
}
