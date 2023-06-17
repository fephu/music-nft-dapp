import Link from "next/link";
import { MdVerified } from "react-icons/md";
import ContentItem from "./ContentItem";

export default function Content() {
  return (
    <div className="block px-2">
      <div className="md:flex items-center justify-between hidden">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center px-2 pt-4">
            <span className="text-gray-500 text-base">#</span>
          </div>
          <div className="flex items-center justify-center px-2 pt-4">
            <span className="text-gray-500 text-base">Collection</span>
          </div>
        </div>
        <div className="md:flex items-center justify-center hidden">
          <div className="flex items-center justify-center px-2 pt-4">
            <span className="text-gray-500 text-base">Floor price</span>
          </div>
          <div className="flex items-center justify-center px-2 pt-4 ml-48">
            <span className="text-gray-500 text-base">Volume</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-full max-h-96">
        <ContentItem index="1" name="Đen Vâu" url="/DenVau2.jpg" />
        <ContentItem index="2" name="Harry Styles" url="/HarryStyles.jpg" />
        <ContentItem index="3" name="Sơn Tùng" url="/SonTung3.jpg" />
        <ContentItem index="4" name="The Sheep" url="/TheSheep.jpg" />
      </div>
    </div>
  );
}
