import Link from "next/link";
import {
  AiOutlineClockCircle,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

export default function Music() {
  return (
    <div className="flex items-center flex-row w-full ">
      <div className="flex">
        <div className="w-2/4">
          <article className="mr-5 my-5 rounded-xl border-2 border-solid bg-white">
            <header className="flex items-center font-medium h-11 w-full p-3 justify-between ">
              <div className="">
                <button>
                  <BsShareFill />
                </button>
              </div>
              <div className="">
                <button>
                  <AiOutlineHeart />
                </button>
              </div>
            </header>
            <div className="w-full block">
              <div className="relative">
                <div className="w-full h-full">
                  <div className="">
                    <video
                      controls
                      className="object-cover rounded-b-xl rounded-bl-xl"
                    >
                      <source src="https://res.cloudinary.com/dnj5kt9rv/video/upload/v1686837744/NFT_Music_hgo8jb.mp4"></source>
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="-mx-5 flex flex-col ">
          <section className="mx-5 mt-5 mb-4 flex flex-col flex-wrap w-full">
            <div className="flex items-center w-full mb-1">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap items-center">
                <Link href="/author">
                  <div className="flex flex-row ">
                    <span className="text-blue-600">Đen Vâu</span>
                    <MdVerified
                      className="w-5 h-5 ml-2"
                      style={{ color: "blue" }}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="w-full text-3xl font-semibold">Nấu cho em ăn</h1>
            </div>
            <div className="flex items-center mt-1">
              <h1 className="w-full text-lage ">
                Owned by <span className="text-blue-500">Cnnmm</span>
              </h1>
            </div>
          </section>

          <section className="my-6 mx-5 flex flex-wrap">
            <div className="my-2 mr-6 flex ">
              <div className="block">
                <div className="px-2 h-7 border-2 border-solid rounded-lg border-neutral-300 bg-white">
                  <div className="inline-flex h-4 w-4 relative items-center justify-center font-semibold">
                    #{" "}
                  </div>
                  <span className="ml-1">4.227</span>
                </div>
              </div>
            </div>
            <div className="my-2 mr-6 flex items-center">
              <div className="flex justify-center items-center">
                <AiOutlineEye />
              </div>
              <span className="ml-2 flex justify-center">85 views</span>
            </div>
            <div></div>
          </section>

          <div className="m-5 block max-w-full bg-white shadow-xl">
            <div className="w-full">
              <section className="w-96 border-2 border-solid rounded-lg border-neutral-300">
                <div className="rounded-t-xl border-b-2 border-neutral-300 p-5 ">
                  <div className="flex items-center justify-between">
                    <div className="flex ">
                      <div className="flex items-center mr-2 ">
                        <AiOutlineClockCircle />
                      </div>
                      <div className="inline ">
                        <span className="font-normal text-base">
                          Sale ends 18 tháng 6, 2023 at 7:23 CH{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="p-5 block">
                  <div className="flex justify-between">
                    <div className="block">
                      <span className="text-sm text-neutral-500">
                        Current price
                      </span>
                      <div className="flex mb-2 flex-wrap">
                        <div className="flex items-center font-semibold max-w-full">
                          <div className="flex items-center">
                            <div className="text-3xl font-semibold">
                              0,053 ETH
                            </div>
                            <span className="ml-2 mt-4 text-gray-400">
                              $92,46
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-row flex mt-2">
                    <div className="w-full contents">
                      <div className="relative overflow-hidden w-3/4">
                        <div className="whitespace-nowrap">
                          <button className="inline-flex flex-row items-center rounded-xl rounded-tr-none rounded-br-none bg-blue-500 h-14 w-full justify-center text-lg font-semibold text-white">
                            Buy Now
                          </button>
                        </div>
                      </div>
                      <div className="border-l-2 border-white w-14 h-full whitespace-nowrap">
                        <button className="inline-flex flex-row items-center rounded-xl rounded-tl-none rounded-bl-none bg-blue-500 h-14 w-full justify-center text-lg font-semibold text-white">
                          <div className="flex">
                            <AiOutlineShoppingCart className="text-2xl" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
