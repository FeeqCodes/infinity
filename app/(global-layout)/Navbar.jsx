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
    justify-between bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[28%] rounded-[20px] p-2 px-8"
    >
      <span className="block">
        <Image
          className="w-[4rem]"
          src="/assets/logo.png"
          alt=""
          width={100}
          height={100}
        />
      </span>

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