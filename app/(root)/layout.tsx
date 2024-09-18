"use client";
import TopNav from "@/components/shared/TopNav";
import HorizontalNav from "@/components/shared/horizontalNav";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const openHorizontalNav = useSelector(
    (state: RootState) => state.theme.openHorizontalNav
  );
  return (
    <div>
      <TopNav />
      <HorizontalNav />
      <div
        className={`  pt-16  ${
          openHorizontalNav ? "pl-[250px]" : "pl-16"
        } transition-all ease-in-out duration-500 `}
      >
        <main className="w-full h-screen">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
