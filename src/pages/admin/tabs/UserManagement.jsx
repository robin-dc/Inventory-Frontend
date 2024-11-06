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
import { ScrollArea } from "@/components/ui/scroll-area";

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

  // You can add more users here for testing
];

const UserManagement = () => {
  return (
    <div className="p-6 bg-white rounded-xl h-auto w-auto">
      {/* Title */}
      <div className="text-primary text-[32px] font-bold py-2">
        User Management
      </div>
      <div className="gap-x-2 lg:gap-x-4 flex py-2">
        {/* Search Bar */}
        <div className="relative flex-1 gap-8">
          <Input
            type="text"
            placeholder="Search..."
            className="bg-secondary rounded-xl border border-[#C2D8FF] text-primary pl-4 pr-10 py-2 w-full focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary scale-75" />
        </div>
        {/* Create Button */}
        <div className="flex-none">
          <Button className="ml-4 px-4 md:px-4 lg:px-12 text-secondary rounded-xl">
            <Plus color="#ffffff" />
            Create New User
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="py-4">
        <ScrollArea className=" whitespace-nowrap rounded-md border">
          <Table>
            <TableHeader className="bg-primary">
              <TableRow>
                <TableHead className="text-secondary sm:px-4 md:px-4 lg:pl-12">
                  Role
                </TableHead>
                <TableHead className="text-secondary">Name</TableHead>
                <TableHead className="text-secondary">Email</TableHead>
                <TableHead className="text-secondary sm:px-4 md:px-4 lg:pl-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.email}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-secondary"
                  } pr-10`}
                >
                  <TableCell className="font-medium  sm:px-4 md:px-4 lg:pl-12">
                    {user.role}
                  </TableCell>
                  <TableCell className="font-medium  px-4">
                    {user.name}
                  </TableCell>
                  <TableCell className="font-medium  px-4">
                    {user.email}
                  </TableCell>

                  <TableCell className="font-medium text-primary sm:w-16 sm:p-2 md:w-16 md:p-2 lg:w-20 lg:pr-8">
                    <div className="w-full h-auto flex justify-center items-center">
                      {/* Pop Up Button */}
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            className="rounded-full p-3 hover:bg-[#edede9]"
                          >
                            <EllipsisVertical />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          side="left"
                          align="start"
                          className="w-40 p-0 rounded-xl border border-primary"
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
        </ScrollArea>
      </div>
    </div>
  );
};

export default UserManagement;
