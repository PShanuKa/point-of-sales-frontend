"use client";
import { horizontalToggle } from "@/lib/features/ThemeSlice";
import { FaAnglesLeft } from "react-icons/fa6";
import { RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const HorizontalNav = () => {
    const dispatch = useDispatch();
  const openHorizontalNav = useSelector(
    (state: RootState) => state.theme.openHorizontalNav

  );
  return (
    <div
      className={`${
        openHorizontalNav ? "w-[250px]" : "w-16"
      } transition-all ease-in-out duration-500 z-40 border-r fixed top-0 left-0 bottom-0`}
    >
        <div className="border-b h-16 w-full flex justify-between items-center">
            <div></div>
            <button  onClick={()=>{dispatch(horizontalToggle())}} className={`w-7 h-7 rounded-full  text-white bg-black translate-x-1/2 flex items-center justify-center ${openHorizontalNav &&"rotate-180"} transition-transform duration-500 ease-in-out`}><FaAnglesLeft /></button>
        </div>
        <div>123</div>
    </div>
  );
};

export default HorizontalNav;
