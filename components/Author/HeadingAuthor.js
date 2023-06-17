import { FaDiscord, FaRegStar, FaTwitter } from "react-icons/fa";
import { MdMoreHoriz, MdVerified } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";

export default function HeadingAuthor() {
  return (
    <div className="flex">
      <div className="flex w-full flex-col">
        <div className="relative max-h-80 overflow-hidden">
          <div className="h-0 pb-96 relative">
            <span className="block overflow-hidden opacity-100 absolute">
              <img
                className="object-cover min-w-full max-w-full min-h-full max-h-full"
                src="https://i.scdn.co/image/ab676186000010169a4e866b71ff0883219e505a"
              />
            </span>
          </div>
        </div>
        <div className="px-10 w-full relative">
          <div className="flex items-center">
            <div className="-mt-40 mb-4 block">
              <div className="border-4 border-solid rounded-xl w-44 h-44 bg-white">
                <button className="inline-flex items-center">
                  <span className="block overflow-hidden opacity-100">
                    <img
                      className="object-cover rounded-xl min-w-full max-w-full min-h-full max-h-full"
                      src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/346638801_781809640211412_97194871639145589_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3C6yMrYP4sAAX9tL-s4&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfD6bp6HtFzYM61dlWcD_1OM57zBbxNgr_SCc96tILm-QA&oe=648F5036"
                    ></img>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="ml-auto block">
            <div className="">
              <div className="flex w-full items-start">
                <div className="max-w-xs ">
                  <div className="flex items-center gap-y-1 gap-x-1">
                    <div className="block">
                      <h1 className="font-semibold text-3xl">Đen Vâu</h1>
                    </div>
                    <div className="items-center">
                      <MdVerified
                        className="mx-1 text-3xl"
                        style={{ color: "blue" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="block">
                    <div className="flex items-center">
                      <div className="flex justify-center">
                        <div className="flex items-center">
                          <div className="gap-y-1 gap-x-1 flex">
                            <Link href={"/"} className="no-underline w-12 h-12">
                              <TbWorld className="text-xl" />
                            </Link>
                            <Link href={"/"} className="no-underline w-12 h-12">
                              <FaDiscord className="text-xl" />
                            </Link>
                            <Link href={"/"} className="no-underline w-12 h-12">
                              <FaTwitter className="text-xl" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex items-center">
                          <div className="gap-y-1 gap-x-1 flex">
                            <Link href={"/"} className="no-underline w-12 h-12">
                              <FaRegStar className="text-xl" />
                            </Link>
                            <Link href={"/"} className="no-underline w-12 h-12">
                              <BsShareFill className="text-xl" />
                            </Link>
                            <Link href={"/"} className="no-underline w-12 h-12">
                              <MdMoreHoriz className="text-xl" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 w-full relative">
          <div className="flex flex-col ">
            <div className="flex items-center">
              <div className="pt-2 pr-4">
                <span className="mr-2">By</span>
                <span className="text-xl font-semibold">Đen Vâu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
