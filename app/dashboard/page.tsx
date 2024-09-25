"use client";
import { ReactNode } from "react";
import { IoBagHandle } from "react-icons/io5";
import { LuUser2, LuUserCheck ,LuClipboardEdit, LuClipboardCheck  } from "react-icons/lu";
import { FaLevelDownAlt } from "react-icons/fa";
import { BsCash } from "react-icons/bs";

interface PriceCardProps {
  label: string;
  price: string;
  IconColor: string;
  IconBgColor: string;
  icon: () => ReactNode;
  
}
interface SummeryCardProps {
  label: string;
  price: string;
  color: string;
  icon: () => ReactNode;
}

const PriceData:PriceCardProps[] = [
  {
    label: "Total Purchase Due",
    price: "307,144",
    IconColor: "bg-[#FEEDED]",
    IconBgColor: "text-[#FF9F43]",
    icon: () => <IoBagHandle /> 
  },
  {
    label: "Total Sales Due",
    price: "4,385",
    IconColor: "bg-[#E5F8ED]",
    IconBgColor: "text-[#28C76F]",
    icon: () => <BsCash /> 
  },
  {
    label: "Total Sale Amount",
    price: "385,656.5",
    IconColor: "bg-[#E0F9FC]",
    IconBgColor: "text-[#00CFE8]",
    icon: () => <FaLevelDownAlt /> 
  },
  {
    label : "Total Expense Amount",
    price : "40,000",
    IconColor: "bg-[#FCEAEA]",
    IconBgColor: "text-[#EA5455]",
    icon: () => <FaLevelDownAlt className="rotate-180"/> 
  },
];

const SummeryData:SummeryCardProps[] = [
  {
    label: "Customers",
    price: "100",
    color: "text-red-500",
    icon: () => <LuUser2 className="h-12 w-12"/>,
  },
  {
    label: "Suppliers",
    price: "110",
    color: "text-red-500",
    icon: () => <LuUserCheck className="h-12 w-12"/>,
  },
  {
    label: "Purchase Invoice",
    price: "150",
    color: "text-red-500",
    icon: () => <LuClipboardEdit  className="h-12 w-12"/>,
  },
  {
    label : "Sales Invoice",
    price : "170",
    color: "text-red-500",
    icon: () => <LuClipboardCheck className="h-12 w-12"/>,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5 ">
        {PriceData.map((item, index) => (
        <PriceCard label={item.label} price={item.price} key={index} IconColor={item.IconColor} IconBgColor={item.IconBgColor} icon={item.icon}/>
        ))}
      </div>
      <div className="grid mt-5 xl:grid-cols-4 sm:grid-cols-2 gap-5 ">
      {SummeryData.map((item, index) => (
        <SummeryCard label={item.label} price={item.price} key={index} icon={item.icon}/>
        ))}
      
      </div>
    </div>
  );
}

const PriceCard = ({ label, price,IconColor, IconBgColor, icon }: { label: string; price: string; IconColor: string; IconBgColor: string; icon: () => ReactNode }) => (
  <div className="border border-gray-300 h-24 rounded-md bg-white flex gap-5 items-center px-5">
    <div className={`text-3xl p-3  rounded-full  ${IconBgColor} ${IconColor}` }>
      {icon()}
    </div>
    <div>
      <p className="font-semibold text-xl">Rs {price}</p>
      <h1 className="">{label}</h1>
    </div>
  </div>
);

const SummeryCard = ({ label, price, icon }: { label: string; price: string ;icon : () => ReactNode }) => (
  <div className=" bg-[#00CFE8] h-24 rounded-md flex justify-between gap-5 items-center px-5">
    <div className="text-white">
      <p className="font-bold text-2xl"> {price}</p>
      <h1 className="font-semibold text-lg">{label}</h1>
    </div>
    <div className="text-3xl text-white  h-12 w-12">
      {icon()}
    </div>
  </div>
);
