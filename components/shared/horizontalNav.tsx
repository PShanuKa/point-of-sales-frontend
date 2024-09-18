"use client";
import { horizontalToggle } from "@/lib/features/ThemeSlice";
import { FaAnglesLeft } from "react-icons/fa6";
import { RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GoDotFill } from "react-icons/go";

import { FaAngleDown } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {
  HorizontalNavMainLinks,
  HorizontalNavInventoryLinks,
  HorizontalNavStockLinks,
  HorizontalNavPromoLinks,
  HorizontalNavPurchasesLinks,
  HorizontalNavFinanceAndAccountsLinks,
  NavLinks,
} from "@/constants";
import Link from "next/link";

const HorizontalNav = () => {
  const dispatch = useDispatch();
  const openHorizontalNav = useSelector(
    (state: RootState) => state.theme.openHorizontalNav
  );

  
  return (
    <div
      className={`${
        openHorizontalNav ? "md:w-[250px] w-full" : "md:w-16 w-0"
      } 
      overflow-hidden md:overflow-visible
      transition-all ease-in-out duration-500 z-40  border-r fixed top-0 left-0 bottom-0 bg-white `}
    >
      <div className="border-b h-16 w-full flex justify-between items-center ">
        <div></div>
        <button
          onClick={() => {
            dispatch(horizontalToggle());
          }}
          className={`z-50 w-7 h-7 rounded-full  text-white bg-black translate-x-1/2 hidden md:flex items-center justify-center ${
            openHorizontalNav ? "rotate-0" : "rotate-180"
          } transition-transform duration-500 ease-in-out`}
        >
          <FaAnglesLeft />
        </button>
        <button className="md:hidden hover:bg-slate-200 text-2xl mr-1 p-2 rounded-md" onClick={() => dispatch(horizontalToggle())}>
          <IoMdClose className={`transition-all duration-1000 ${openHorizontalNav ? "rotate-0" : "rotate-180"}`}/>
        </button>
      </div>

      {/* Nav Links */}
      <div className=" overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white scrollbar-thumb-rounded-full h-screen">
        <div className="flex flex-col  px-2 pb-32">
          <ListItems title="Main" data={HorizontalNavMainLinks} />
          <ListItems title="Inventory" data={HorizontalNavInventoryLinks} />
          <ListItems title="Stock" data={HorizontalNavStockLinks} />
          <ListItems title="Promo" data={HorizontalNavPromoLinks} />
          <ListItems title="Purchases" data={HorizontalNavPurchasesLinks} />
          <ListItems
            title="Finance & Accounts"
            data={HorizontalNavFinanceAndAccountsLinks}
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalNav;

interface ListItemsProps {
  title: string;
  data: NavLinks[];
}
const ListItems = ({ title, data }: ListItemsProps) => {
  const [subNavOpen, setSubNavOpen] = React.useState(true);
  const openHorizontalNav = useSelector(
    (state: RootState) => state.theme.openHorizontalNav
  );

  return (
    <>
      <div
        className={`px-2  ${
          !openHorizontalNav ? "h-0 " : "h-6 mt-5"
        } overflow-hidden transition-all duration-500`}
      >
        {title}
      </div>
      <ul className="flex flex-col  border-b w-full pb-2">
        {(data || []).map((item, index) => (
          <>
            <li key={index} className="mt-4">
              <Link
                href={item.route}
                key={index}
                className="flex items-center rounded-md transition-all hover:bg-slate-200 duration-150"
                onClick={() => {
                  if (item.children) {
                    setSubNavOpen(!subNavOpen);
                  }
                }}
              >
                <div className="w-16 h-10 justify-center items-center flex">
                {item.icon && item.icon()}
                </div>
                <span
                  className={`${
                    !openHorizontalNav ? "w-0" : "w-[150px]"
                  }  h-5 transition-all overflow-hidden duration-500 justify-between flex items-center`}
                >
                  <p className="h-6">{item.label}</p>
                  {item.children && <FaAngleDown className={`${subNavOpen?'rotate-180':'rotate-0'} transition-all duration-500`}/>}
                </span>
              </Link>
            </li>
            {(item.children || [])?.map((items, index) => (
              <Link href={items.route} key={index}>
              <li
                
                className={`flex items-center text-sm overflow-hidden transition-all  duration-500 ${
                  (subNavOpen && openHorizontalNav) ? "h-6 mt-4" : "h-0"
                }`}
              >
                <div className="w-16 ml-3 h-6 justify-center items-center flex">
                  <GoDotFill />
                </div>
                {items.label}
              </li>
                </Link>
            ))}
          </>
        ))}
      </ul>
    </>
  );
};
