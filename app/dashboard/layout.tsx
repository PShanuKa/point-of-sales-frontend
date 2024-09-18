"use client";
import HorizontalNav from '@/components/shared/horizontalNav';
import TopNav from '@/components/shared/TopNav';
import { RootState } from '@/lib/store';
import React from 'react';
import { useSelector } from 'react-redux';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const openHorizontalNav = useSelector(
    (state: RootState) => state.theme.openHorizontalNav
  );
  return (
    <div>
      <TopNav />
      <HorizontalNav />
      
      <div
        className={`  pt-16  ${
          openHorizontalNav ? "md:pl-[250px]" : "md:pl-16"
        } transition-all ease-in-out duration-500 flex bg-slate-50`}
      >
        <main className="w-full h-screen m-3">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
