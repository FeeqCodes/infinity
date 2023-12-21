"use client";

import Link from "next/link";
import MyCanvas from "./webgl/Canvas";
import { useRouter } from "next/navigation";




export default function Home() {

  const router = useRouter()

  return (
    <>
      <div className="relative font-duel">
        <MyCanvas />

        <div className="absolute top-[20%] left-[5%] w-[20vw] h-[60vh]  
         bg-[#15061B] backdrop-blur-lg  bg-opacity-30 border-gray-200
         shadow-md shadow-[#222] ">
          <div className=" h-full flex justify-between flex-col items-center p-4">
            <div>
              <h2 className="text-white">Welcome to infinity AI</h2>
            </div>

            <div className="">
              <button
                onClick={() => router.push("/image-search")}
                className=" p-4 bg-white rounded-sm"
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
