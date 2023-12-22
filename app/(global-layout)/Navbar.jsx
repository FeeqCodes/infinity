import React from 'react'
import Image from "next/image"
import Link from "next/link";

const Navbar = () => {
  
  const links = [
    { label: "Home", href: "/home-page" },
    { label: "About", href: "/home-page" },
    { label: "Contact", href: "/home-page" },
  ];


  return (
    <nav
      className="h-[54px] w-full mb-0 flex items-center 
    justify-between bg-[#373333] border border-gray-400  bg-clip-padding backdrop-filter backdrop-blur-[7px] bg-opacity-[30%] rounded-[20px] p-2 px-8"
    >
      <Link href="/" className="block">
        <Image
          className="w-[4rem]"
          src="/assets/logo.png"
          alt=""
          width={100}
          height={100}
        />
      </Link>

      <ul className="flex gap-10 text-white ">
        {links.map((link, id) => (
          <Link href={link.href} key={id}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar