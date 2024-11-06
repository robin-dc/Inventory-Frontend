// Lucide React Icons
import { Plus } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { Search } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";
// import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

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
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <div className="bg-white rounded-lg h-auto w-auto p-5 top-1">
      {/* Title */}
      <h2 className="text-primary text-2xl font-bold py-4">User Management</h2>
      <div className="gap-x-2 lg:gap-x-4 flex py-2">
        {/* Search Bar */}
        <div className="relative flex-1 gap-8">
          <Input
            type="text"
            placeholder="Search..."
            className="rounded-xl bg-secondary border-blue-200 placeholder:text-primary pl-6 pr-10 focus:ring-2 focus:ring-primary"
          />
          <Search className=" h-[24px] w-[24px] absolute right-3 top-1/2 transform -translate-y-1/2 text-primary mr-3" />
        </div>
        {/* Create Button with Modal*/}
        <div className="flex-none">
          {/* Modal for Create*/}
          <Dialog>
            <DialogTrigger asChild>
              <Button className=" ml-0 md:ml-2 lg:ml-4 rounded-xl w-auto text-sm  md:w-44 md:text-md lg:w-60 text-md font-light">
                <Plus color="#ffffff" />
                Create New User
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[416px] rounded-lg md:max-w-[428px] lg:max-w-[428px] p-8">
              <DialogHeader>
                <DialogTitle className="text-primary font-bold text-center">
                  Create New User
                </DialogTitle>
                {/* <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription> */}
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 gap-2 mt-1">
                  <Label
                    htmlFor="role"
                    className="text-left font-normal pl-3 py-1 text-gray-700"
                  >
                    Role
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full bg-secondary text-primary font-normal h-10">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="text-primary font-normal border-gray-700  w-full">
                      <SelectGroup>
                        <SelectItem value="Select role--" disabled>
                          Select role--
                        </SelectItem>
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 gap-2 mt-1">
                  <Label
                    htmlFor="name"
                    className="text-left font-normal pl-3 py-1 text-gray-700"
                  >
                    Name
                  </Label>
                  <Input
                    type="text"
                    placeholder=""
                    className="w-full bg-secondary text-primary font-normal h-10"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 mt-1">
                  <Label
                    htmlFor="email"
                    className="text-left font-normal pl-3 py-1 text-gray-700"
                  >
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder=""
                    className="w-full bg-secondary text-primary font-normal h-10"
                  />
                </div>
              </div>
              <DialogFooter className="flex flex-row justify-between w-full">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-700 font-normal w-32 h-9"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primary text-white font-normal w-32 h-9"
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Table */}
      <div className="py-4">
        <Table>
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="text-white sm:px-4 md:px-4 lg:pl-12">
                Role
              </TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white sm:px-4 md:px-4 lg:pl-12"></TableHead>
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
                <TableCell className="font-normal text-black sm:px-4 md:px-4 lg:pl-12">
                  {user.role}
                </TableCell>
                <TableCell className="font-normal text-black px-4">
                  {user.name}
                </TableCell>
                <TableCell className="font-normal text-black px-4">
                  {user.email}
                </TableCell>

                <Dialog>
                  <TableCell className="font-normal text-primary sm:w-16 sm:p-2 md:w-16 md:p-2 lg:w-20 lg:pr-8">
                    <div className="w-full h-auto flex justify-center items-center">
                      <DropdownMenu>
                        {/* Pop Up Edit and Delete */}
                        <DropdownMenuTrigger>
                          <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="left-bottom-position border-primary border-2 p-0">
                          {/* Edit Button */}
                          <DialogTrigger asChild>
                            <DropdownMenuItem className="pl-2 rounded-b-none border-b border-primary hover:text-primary hover:bg-secondary hover:font-medium">
                              <Pencil className="text-primary font-bold" />
                              Edit
                            </DropdownMenuItem>
                          </DialogTrigger>
                          {/* Delete Button */}
                          <DropdownMenuItem className="pl-2 rounded-t-none border-t border-primary hover:text-primary hover:bg-secondary hover:font-medium">
                            <Trash className="text-primary font-bold" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>

                  {/* Modal Content for Edit*/}
                  <DialogContent className="max-w-[416px] rounded-lg md:max-w-[428px] lg:max-w-[428px] p-8">
                    <DialogHeader>
                      <DialogTitle className="text-primary font-bold text-center">
                        Edit User Info
                      </DialogTitle>
                      {/* <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done. </DialogDescription> */}
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 gap-2 mt-1">
                        <Label
                          htmlFor="role"
                          className="text-left font-normal pl-3 py-1 text-gray-700"
                        >
                          Role
                        </Label>
                        <Select onValueChange={""} defaultValue={"Admin"}>
                          <SelectTrigger className="w-full bg-secondary text-primary font-normal h-10">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent className="text-primary font-normal text-sm border-gray-700  w-full">
                            <SelectGroup>
                              <SelectItem value="Select role--" disabled>
                                Select role--
                              </SelectItem>
                              <SelectItem value="Admin">Admin</SelectItem>
                              <SelectItem value="Others">Others</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-1 gap-2 mt-1">
                        <Label
                          htmlFor="name"
                          className="text-left font-normal pl-3 py-1 text-gray-700"
                        >
                          Name
                        </Label>
                        <Input
                          type="text"
                          placeholder=""
                          className="w-full bg-secondary text-primary text-sm font-normal h-10"
                          value="Jhestin Digap"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-2 mt-1">
                        <Label
                          htmlFor="email"
                          className="text-left font-normal pl-3 py-1 text-gray-700"
                        >
                          Email
                        </Label>
                        <Input
                          type="email"
                          placeholder=""
                          className="w-full bg-secondary text-primary text-sm font-normal h-10"
                          value="jhestindigap@gmail.com"
                        />
                      </div>
                    </div>
                    <DialogFooter className="flex flex-row justify-between w-full">
                      <Button
                        variant="outline"
                        className="border-gray-700 text-gray-700 font-normal w-32 h-9"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-primary text-white font-normal w-32 h-9"
                      >
                        Save Changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserManagement;
