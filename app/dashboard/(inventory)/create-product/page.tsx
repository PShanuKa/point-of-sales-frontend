import PageTitle from "@/components/shared/PageTitle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FiPlusCircle } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col gap-5 mb-20">
      <div className="p-3 flex justify-between ">
        <PageTitle title="New Product" description="Create new product" />
        <div className="flex gap-3">
          <Button variant="default" className="gap-2">
            <IoMdArrowBack size={20} />
            Back to Product
          </Button>
        </div>
      </div>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="p-3 w-full bg-white rounded-lg border"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-3 font-semibold border-b">
          Product Information
          <ChevronDown size={16} className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="p-3 flex flex-col gap-6">
          {/* ----------------------------------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">Store</h1>
              <Select>
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

            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">
                Warehouse
              </h1>
              <Select>
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
          </div>
          {/* ----------------------------------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">
                Product Name
              </h1>
              <Input />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">Slug</h1>
              <Input />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">SUK</h1>
              <div className="flex w-full  items-center space-x-2">
                <Input type="email" placeholder="Enter SUK" />
                <Button type="submit">Generate Code</Button>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between my-1">
                <h1 className="font-semibold opacity-70 text-sm ">Category</h1>
                <PopupButton type="category-add" title="Add Category">
                  <div className="flex flex-col gap-1 my-10">
                    <h1 className="font-semibold opacity-70 text-sm">
                      Category Name
                    </h1>
                    <Input />
                  </div>
                </PopupButton>
              </div>
              <Select>
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

            <div className="flex flex-col gap-1">
              <div className="flex justify-between my-1">
                <h1 className="font-semibold opacity-70 text-sm">
                  Sub Category
                </h1>
                <PopupButton type="sub-category-add" title="Add Sub Category">
                  <div className="flex flex-col gap-1 my-10">
                    <h1 className="font-semibold opacity-70 text-sm">
                      Sub Category Name
                    </h1>
                    <Input />
                  </div>
                </PopupButton>
              </div>
              <Select>
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
            <div className="flex flex-col gap-1">
              <div className="flex justify-between my-1">
                <h1 className="font-semibold opacity-70 text-sm">
                  Sub Sub Category
                </h1>
              </div>
              <Select>
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
          </div>

          {/* ----------------------------------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between my-1">
                <h1 className="font-semibold opacity-70 text-sm ">Brand</h1>
                <PopupButton type="brand-add" title="Add Brand">
                  <div className="flex flex-col gap-1 my-10">
                    <h1 className="font-semibold opacity-70 text-sm">
                      Brand Name
                    </h1>
                    <Input />
                  </div>
                </PopupButton>
              </div>
              <Select>
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

            <div className="flex flex-col gap-1">
              <div className="flex justify-between my-1">
                <h1 className="font-semibold opacity-70 text-sm">Unit</h1>
                {/* <AddSubCategory /> */}
                <PopupButton type="product-add" title="Add Unit">
                  <div className="flex flex-col gap-1 my-10">
                    <h1 className="font-semibold opacity-70 text-sm">
                      Unit Name
                    </h1>
                    <Input />
                  </div>
                </PopupButton>
              </div>
              <Select>
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

            <div className="flex flex-col gap-1">
              <div className="flex justify-between my-1">
                <h1 className="font-semibold opacity-70 text-sm">
                  Selling Type
                </h1>
              </div>
              <Select>
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
          </div>

          {/* ----------------------------------------------------------------------------------- */}
          <div className="grid md:grid-cols-2  gap-5 ">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">
                Barcode Symbology
              </h1>
              <Input />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">
                Item Code
              </h1>
              <div className="flex w-full  items-center space-x-2">
                <Input type="email" placeholder="Enter SUK" />
                <Button type="submit">Generate Code</Button>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">
                Description
              </h1>
              <Textarea className="min-h-[200px]" />
            </div>
          </div>
        </AccordionContent>
        </AccordionItem>
      </Accordion>

   

      {/* --------------------------------------------------------------------------------------------------------------------- */}

      <Accordion
        type="single"
        defaultValue="item-2"
        collapsible
        className="p-3 w-full bg-white rounded-lg border"
      >
        <AccordionItem value="item-2">
          <AccordionTrigger className="p-3 font-semibold border-b">
            Pricing & Stocks
            <ChevronDown size={16} className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="p-3 flex flex-col gap-6 mb-5">
            {/* ----------------------------------------------------------------------------------- */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold opacity-70 text-sm my-1">
                  Quantity
                </h1>
                <Input />
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold opacity-70 text-sm my-1">Price</h1>
                <Input />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between my-1">
                  <h1 className="font-semibold opacity-70 text-sm">Tax Type</h1>
                </div>
                <Select>
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
            </div>

            {/* ----------------------------------------------------------------------------------- */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between my-1">
                  <h1 className="font-semibold opacity-70 text-sm">
                    Discount Type
                  </h1>
                </div>
                <Select>
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

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold opacity-70 text-sm my-1">
                  Discount Value
                </h1>
                <Input />
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold opacity-70 text-sm my-1">
                  Quantity Alert
                </h1>
                <Input />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>




      <Accordion
        type="single"
        defaultValue="item-3"
        collapsible
        className="p-3 w-full bg-white rounded-lg border"
      >
        <AccordionItem value="item-3">
          <AccordionTrigger className="p-3 font-semibold border-b">
          Images
          <ChevronDown size={16} className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="p-3 flex flex-col gap-6 mb-5">
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        className="p-3 w-full bg-white rounded-lg border"
        defaultValue="item-4"
      >
        <AccordionItem value="item-4">
          <AccordionTrigger className="p-3 font-semibold border-b ">
            Custom Fields
            <ChevronDown size={16} className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="p-3 flex flex-col gap-6">
            <div className="flex  gap-5 p-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="warranties" className="opacity-70" />
                <label
                  htmlFor="terms"
                  className="font-semibold opacity-70 text-sm"
                >
                  Warranties
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="manufacturer" className="opacity-70" />
                <label className="font-semibold opacity-70 text-sm">
                  Manufacturer
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="expiry" className="opacity-70" />
                <label
                  htmlFor="terms"
                  className="font-semibold opacity-70 text-sm"
                >
                  Expiry
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between my-1">
                  <h1 className="font-semibold opacity-70 text-sm">
                    Discount Type
                  </h1>
                </div>
                <Select>
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
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold opacity-70 text-sm my-1">
                  Quantity Alert
                </h1>
                <Input />
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold opacity-70 text-sm my-1">
                  Manufactured Date
                </h1>
                <Input />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between my-1">
                  <h1 className="font-semibold opacity-70 text-sm">
                    Expiry On
                  </h1>
                </div>
                <Select>
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      <div className="flex justify-end gap-3 mt-5">
        <Button>Cancel</Button>
        <Button>Save Prodcut</Button>
      </div>
    </div>
  );
};

export default page;

const PopupButton = ({ children,  title }: { children: React.ReactNode, title: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 m-0 h-5 flex gap-2 items-center">
          <FiPlusCircle size={16} />
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button type="submit">Save </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};





