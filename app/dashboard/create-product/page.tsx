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

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="p-3 flex justify-between ">
        <PageTitle title="New Product" description="Create new product" />
        <div className="flex gap-3">
          <Button variant="default" className="gap-2">
            <IoMdArrowBack size={20} />
            Back to Product
          </Button>
        </div>
      </div>
      <div className="p-3 w-full bg-white rounded-lg border">
        <h1 className="font-semibold p-3 border-b">Product Information</h1>
        <div className="p-3 flex flex-col gap-6">
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
              <h1 className="font-semibold opacity-70 text-sm my-1">Warehouse</h1>
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
              <h1 className="font-semibold opacity-70 text-sm my-1">Product Name</h1>
              <Input />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">Slug</h1>
              <Input />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-semibold opacity-70 text-sm my-1">SUK</h1>
              <div className="flex w-full max-w-sm items-center space-x-2">
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
                <AddCategory />
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
                <AddSubCategory/>
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
                {/* <AddSubCategory/> */}
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

          <div className="grid grid-cols-3 gap-5 "></div>
        </div>
      </div>
    </div>
  );
};

export default page;

const AddCategory = () => {
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
          <DialogTitle>Add New Category</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1 my-10">
          <h1 className="font-semibold opacity-70 text-sm">Product Name</h1>
          <Input />
        </div>
        <DialogFooter>
          <Button type="submit">Save </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


const AddSubCategory = () => {
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
          <DialogTitle>Add New Sub Category</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1 my-10">
          <h1 className="font-semibold opacity-70 text-sm">Product Name</h1>
          <Input />
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};