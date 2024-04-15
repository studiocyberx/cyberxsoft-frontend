"use client";
import Navbar from "./Navbar";
import { bebas } from "@/app/fonts";
import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar fonts={bebas} isOpen={isOpen} />
      {isOpen ? (
        <MdClose
          onClick={toggleOpen}
          className="text-2xl text-white block md:hidden"
        />
      ) : (
        <MdOutlineMenu
          onClick={toggleOpen}
          className="text-2xl text-white block md:hidden"
        />
      )}
    </>
  );
};
export default Navigation;
