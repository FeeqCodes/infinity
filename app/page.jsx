"use client";

import Image from "next/image";
import MyCanvas from "./webgl/Canvas";
import { useRouter } from "next/navigation";




export default function Home() {

  const router = useRouter()

  return (
    <>
      <div className="relative font-duel">
        <MyCanvas />

        <div
          className="absolute top-[20%] left-[5%] w-[20vw] h-[60vh]  
         bg-[#15061B] backdrop-blur-lg  bg-opacity-30 border-gray-200
         shadow-md shadow-[#222] "
        >
          <div className=" h-full flex justify-between flex-col items-center p-4">
            <div className="h-[70%] flex flex-col justify-between items-center">
              <h2 className="text-white">Welcome to infinity AI</h2>

              <Image width={300} height={100} alt="" src="/assets/emoji.webp" />
            </div>

            <div className="">
              <button
                onClick={() => router.push("/home-page")}
                className=" p-2 px-6 bg-white rounded-sm hover:bg-slate-400 hover:text-white transition-colors transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 200ms"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
