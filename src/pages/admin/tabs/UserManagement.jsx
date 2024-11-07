// Lucide React Icons
import { Plus } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { Search } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

// Shad CN UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Sample User Data
const users = [
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },
  {
    role: "Admin",
    name: "Jhestin Digap",
    email: "jhestindigap@gmail.com",
  },

  // You can add more users here for testing
];

const UserManagement = () => {
  return (
    <div className="p-6 bg-white rounded-xl h-auto w-auto">
      {/* Title */}
      <div className="text-primary text-[32px] font-bold">User Management</div>
      <div className="flex my-4 mb-6 gap-x-[10px]">
        {/* Search Bar */}
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search..."
            className="bg-secondary rounded-xl border border-[#C2D8FF] text-primary pl-4 pr-10 py-2 w-full focus:outline-none placeholder:text-primary text-[16px]"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary scale-75" />
        </div>
        {/* Create Button */}
        <Button className="text-[16px] font-normal text-secondary rounded-xl">
          <Plus color="#ffffff" />
          Create New User
        </Button>
      </div>

      {/* Table */}
      <ScrollArea className=" whitespace-nowrap ">
        <Table>
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="text-secondary text-[16px] font-normal">
                Role
              </TableHead>
              <TableHead className="text-secondary text-[16px] font-normal">
                Name
              </TableHead>
              <TableHead className="text-secondary text-[16px] font-normal">
                Email
              </TableHead>
              <TableHead className="text-secondary text-[16px] font-normal"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user.email}
                className={`${
                  index % 2 === 0 ? "bg-[#FAFCFF]" : "bg-secondary"
                } pr-10`}
              >
                <TableCell className="text-[16px] py-1">{user.role}</TableCell>
                <TableCell className="text-[16px] py-1">{user.name}</TableCell>
                <TableCell className="text-[16px] py-1">{user.email}</TableCell>

                <TableCell className="font-medium text-primary sm:w-16 sm:p-2 md:w-16 md:p-2 lg:w-20 lg:pr-8">
                  <div className="w-full h-auto flex justify-center items-center">
                    {/* Pop Up Button */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" className="rounded-full p-3">
                          <EllipsisVertical className="text-primary scale-125" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        side="left"
                        align="start"
                        className="w-40 p-0 mt-2 rounded-xl border border-primary"
                      >
                        <div className="grid">
                          <Button
                            variant="secondary"
                            className="bg-white text-primary rounded-none rounded-t-xl text-[12px] border border-b-primary flex justify-start"
                          >
                            <Pencil className="scale-80" />
                            Edit
                          </Button>
                          <Button
                            variant="secondary"
                            className="bg-white text-primary rounded-none rounded-b-xl text-[12px] flex justify-start"
                          >
                            <Trash className="scale-80" />
                            Delete
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default UserManagement;
