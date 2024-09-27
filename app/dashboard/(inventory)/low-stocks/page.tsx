import React from "react";
import PageTitle from "@/components/shared/PageTitle";
import { Button } from "@/components/ui/button";
import { FaRegFilePdf } from "react-icons/fa6";

import { TbReload } from "react-icons/tb";
import { FiPrinter} from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CiFilter } from "react-icons/ci";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="p-3 flex justify-between">
        <PageTitle title="Low Stocks" description="Manage your low stocks" />
        <div className="flex gap-3">
          <Button variant="outline" className="bg-white">
            <FaRegFilePdf size={20} />
          </Button>
          <Button variant="outline" className="bg-white">
            <FiPrinter size={20} />
          </Button>
          <Button variant="outline" className="bg-white">
            <TbReload size={20} />
          </Button>
        </div>
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <div className="flex justify-between">
              <Input
                className="bg-white max-w-[300px] "
                placeholder="Search Product"
              />
              <AccordionTrigger className="p-0 m-0">
                <div className="p-3 border bg-white rounded-lg">
                  <CiFilter size={20} />
                </div>
              </AccordionTrigger>
            </div>

            <AccordionContent className="p-3 bg-white mt-3 rounded-lg grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="flex flex-col gap-1  ">
              <h1 className="font-semibold opacity-70 text-sm my-1">
                Choose Product
              </h1>
              <Select >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            
            <div className="flex flex-col gap-1  ">
              <h1 className="font-semibold opacity-70 text-sm my-1">
              Choose Warehouse
              </h1>
              <Select >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
           
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <ProductTable />
      </div>
    </div>
  );
};

export default page;

const ProductTable = () => {
  interface tableData {
    Product: string;
    SKU: string;
    ManufacturedDate: string;
    ExpiredDate: string;
  }

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

  return (
    <Table>
      <TableCaption>
      <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >#</TableHead>
          <TableHead>Warehouse</TableHead>
          <TableHead>Store</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>QTY</TableHead>
          <TableHead>QTY Alert</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell >{item.Product}</TableCell>
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