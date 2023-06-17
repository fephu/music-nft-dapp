import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="w-full">
      <div className="flex px-2 py-0 items-center border-2 border-solid bg-white h-12 rounded-xl mr-6">
        <FaSearch size={16} className="m-2 text-center" />
        <input
          placeholder="Search items, collections, and accounts"
          className="w-full h-full ml-2 cursor-text focus:outline-none text-black text-lg"
        />
      </div>
    </div>
  );
}
