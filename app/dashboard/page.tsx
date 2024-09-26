"use client";
import { ReactNode } from "react";
import { IoBagHandle } from "react-icons/io5";
import {
  LuUser2,
  LuUserCheck,
  LuClipboardEdit,
  LuClipboardCheck,
} from "react-icons/lu";
import { FaLevelDownAlt } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SummeryCardProps {
  label: string;
  price: string;
  color: string;
  icon: () => ReactNode;
}

interface tableData {
  Product: string;
  SKU: string;
  ManufacturedDate: string;
  ExpiredDate: string;
}
interface PriceCardProps {
  label: string;
  price: string;
  IconColor: string;
  IconBgColor: string;
  icon: () => ReactNode;
}

const PriceData: PriceCardProps[] = [
  {
    label: "Total Purchase Due",
    price: "307,144",
    IconColor: "bg-[#FEEDED]",
    IconBgColor: "text-[#FF9F43]",
    icon: () => <IoBagHandle />,
  },
  {
    label: "Total Sales Due",
    price: "4,385",
    IconColor: "bg-[#E5F8ED]",
    IconBgColor: "text-[#28C76F]",
    icon: () => <BsCash />,
  },
  {
    label: "Total Sale Amount",
    price: "385,656.5",
    IconColor: "bg-[#E0F9FC]",
    IconBgColor: "text-[#00CFE8]",
    icon: () => <FaLevelDownAlt />,
  },
  {
    label: "Total Expense Amount",
    price: "40,000",
    IconColor: "bg-[#FCEAEA]",
    IconBgColor: "text-[#EA5455]",
    icon: () => <FaLevelDownAlt className="rotate-180" />,
  },
];

const SummeryData: SummeryCardProps[] = [
  {
    label: "Customers",
    price: "100",
    color: "text-red-500",
    icon: () => <LuUser2 className="h-12 w-12" />,
  },
  {
    label: "Suppliers",
    price: "110",
    color: "text-red-500",
    icon: () => <LuUserCheck className="h-12 w-12" />,
  },
  {
    label: "Purchase Invoice",
    price: "150",
    color: "text-red-500",
    icon: () => <LuClipboardEdit className="h-12 w-12" />,
  },
  {
    label: "Sales Invoice",
    price: "170",
    color: "text-red-500",
    icon: () => <LuClipboardCheck className="h-12 w-12" />,
  },
];

const tableData: tableData[] = [
  {
    Product: "Red Premium Handy",
    SKU: "PT006",
    ManufacturedDate: "17 Jan 2023",
    ExpiredDate: "29 Mar 2023",
  },
  {
    Product: "Iphone 14 Pro",
    SKU: "PT007",
    ManufacturedDate: "22 Feb 2023",
    ExpiredDate: "04 Apr 2023",
  },
  {
    Product: "Black Slim 200",
    SKU: "PT008",
    ManufacturedDate: "18 Mar 2023",
    ExpiredDate: "13 May 2023",
  },
  {
    Product: "Woodcraft Sandal",
    SKU: "PT009",
    ManufacturedDate: "29 Mar 2023",
    ExpiredDate: "27 May 2023",
  },
  {
    Product: "Apple Series 5 Watch",
    SKU: "PT010",
    ManufacturedDate: "24 Mar 2023",
    ExpiredDate: "26 May 2023",
  },
];

interface RecentProductsTableData {
  Product: string;
  Price: string;
}

const RecentProductsTableData: RecentProductsTableData[] = [
  {
    Product: "Lenevo 3rd Generation",
    Price: "$12500",
  },
  {
    Product: "Lenevo 3rd Generation",
    Price: "$12500",
  },
  {
    Product: "Lenevo 3rd Generation",
    Price: "$12500",
  },
  {
    Product: "Lenevo 3rd Generation",
    Price: "$12500",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5 ">
        {PriceData.map((item, index) => (
          <PriceCard
            label={item.label}
            price={item.price}
            key={index}
            IconColor={item.IconColor}
            IconBgColor={item.IconBgColor}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="grid  xl:grid-cols-4 sm:grid-cols-2 gap-5 ">
        {SummeryData.map((item, index) => (
          <SummeryCard
            label={item.label}
            price={item.price}
            key={index}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="w-full grid md:grid-cols-2 gap-5">
        <div>
          <SummeryTable />
        </div>
        <div>
          <RecentProducts />
        </div>
      </div>

      <div className="w-full">
        <ExpiredProductsTable />
      </div>
    </div>
  );
}

const PriceCard = ({
  label,
  price,
  IconColor,
  IconBgColor,
  icon,
}: {
  label: string;
  price: string;
  IconColor: string;
  IconBgColor: string;
  icon: () => ReactNode;
}) => (
  <div className="border border-gray-300 h-24 rounded-md bg-white flex gap-5 items-center px-5">
    <div className={`text-3xl p-3  rounded-full  ${IconBgColor} ${IconColor}`}>
      {icon()}
    </div>
    <div>
      <p className="font-semibold text-xl">Rs {price}</p>
      <h1 className="">{label}</h1>
    </div>
  </div>
);

const SummeryCard = ({
  label,
  price,
  icon,
}: {
  label: string;
  price: string;
  icon: () => ReactNode;
}) => (
  <div className=" bg-[#00CFE8] h-24 rounded-md flex justify-between gap-5 items-center px-5">
    <div className="text-white">
      <p className="font-bold text-2xl"> {price}</p>
      <h1 className="font-semibold text-lg">{label}</h1>
    </div>
    <div className="text-3xl text-white  h-12 w-12">{icon()}</div>
  </div>
);

const SummeryTable = () => {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  interface chartData {
    month: string;
    desktop: number;
    mobile: number;
  }
  const chartData: chartData[] = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full" title="Purchase & Sales">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

const ExpiredProductsTable = () => {
  return (
    <Table title="Expired Products">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">#</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Manufactured Date</TableHead>
          <TableHead>Expired Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item, index) => (
          <TableRow key={index}>
            <TableCell >{index+1}</TableCell>
            <TableCell className="w-[100px]">{item.Product}</TableCell>
            <TableCell>{item.SKU}</TableCell>
            <TableCell>{item.ManufacturedDate}</TableCell>
            <TableCell>{item.ExpiredDate}</TableCell>
            <TableCell>
              <button className="btn btn-primary btn-sm">View</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const RecentProducts = () => {
  return (
    <Table title="Recent Products">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >#</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {RecentProductsTableData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.Product}</TableCell>
            <TableCell>{item.Price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
