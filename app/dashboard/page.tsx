"use client";
import { IoBagHandle } from "react-icons/io5";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-5 ">
      <PriceCard labal="Total Purchase Due" price="307,144"/>
      <PriceCard labal="Total Sales Due" price="4,385"/>
      <PriceCard labal="Total Sale Amount" price="385,656.5"/>
      <PriceCard labal="Total Expense Amount" price="40,000"/>
    </div>
  );
}

const PriceCard = ({labal,price}:{labal:string,price:string}) => (
  <div className="border border-gray-300 h-24 rounded-md flex gap-5 items-center px-5">
        <div className="text-3xl p-3 bg-slate-200 rounded-full">
        <IoBagHandle className="opacity-60"/>
        </div>
        <div>
          <p className="font-semibold text-xl">Rs {price}</p>
          <h1 className="">{labal}</h1>
        </div>
        </div>
)