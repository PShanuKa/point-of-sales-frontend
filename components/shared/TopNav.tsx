"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdOutlineEmail } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { horizontalToggle } from "@/lib/features/ThemeSlice";

const TopNav = () => {
  const openHorizontalNav = useSelector(
    (state: RootState) => state.theme.openHorizontalNav
  );
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-row w-full top-0 left-0 right-0 fixed z-30">
      <div
        className={` ${
          openHorizontalNav ? "min-w-[250px] " : "min-w-16"
        } transition-all ease-in-out duration-500`}
      ></div>
      <div className="flex h-16 py-3 px-6 border-b bg-white items-center justify-between w-full">
        <div>
          <Input alt="Search" placeholder="Search" className="bg-slate-50" />
        </div>
        <div className="flex flex-row gap-3">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Balangoda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Balangoda</SelectItem>
              <SelectItem value="dark">Galla</SelectItem>
              <SelectItem value="system">Rathnapura</SelectItem>
            </SelectContent>
          </Select>
          <Button className="text-slate-500" variant={"outline"}>
            <MdOutlineEmail size={24} />
          </Button>
          <Button
            onClick={() => dispatch(horizontalToggle())}
            className="text-slate-500"
            variant={"outline"}
          >
            <LuBell size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
