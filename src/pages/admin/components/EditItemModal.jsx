import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarDays } from "lucide-react";
import * as React from "react";
import { addDays, format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EditItemModal = () => {
  const [dateAssign, setDateAssign] = React.useState();
  const [dateInspect, setDateInspect] = React.useState();
  const [dateReturn, setDateReturn] = React.useState();

  return (
      <DialogContent className="w-[578px] px-[48px] pt-[40px] pb-[40px] rounded-[16px]">
        <DialogHeader className="">
          <DialogTitle className="text-[24px] text-center text-[#015C92] ">
            Edit Item
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 pt-1 pb-4">
          <div className="grid grid-cols-1 items-center gap-[1px] p-0">
            <Label htmlFor="Item" className="text-[#015C92] text-[12px]">
              Item
            </Label>
            <Input
              id="name"
              placeholder="Item Name"
              className="col-span-3 bg-[#F2F8FF] text-[#4E555A] h-[35px]"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-[1px] p-0">
            <Label htmlFor="Unit" className="text-[#015C92] text-[12px]">
              Unit
            </Label>
            <Input
              id="username"
              placeholder="Enter model or unit name"
              className="col-span-3 bg-[#F2F8FF] text-[#4E555A] h-[35px]"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-[1px] p-0">
            <Label htmlFor="Status" className="text-[#015C92] text-[12px]">
              Status
            </Label>
            <Select className="col-span-3 ">
              <SelectTrigger className="bg-[#F2F8FF] text-[#4E555A] h-[35px]">
                <SelectValue placeholder="Select condition status--" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Good">Good</SelectItem>
                  <SelectItem value="Bad">Damaged</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 items-center gap-[1px] p-0">
            <Label htmlFor="Holder" className="text-[#015C92] text-[12px]">
              Holder
            </Label>
            <Input
              id="Holder"
              placeholder="Enter assigned personnel or team"
              className="col-span-3 bg-[#F2F8FF] text-[#4E555A] h-[35px]"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-[1px] p-0">
            <Label htmlFor="Status" className="text-[#015C92] text-[12px]">
              Date Assigned
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="col-span-3 justify-between bg-[#F2F8FF] text-[#4E555A] h-[35px]"
                  variant={"outline"}
                >
                  <span className="font-normal ">
                    {dateAssign ? format(dateAssign, "PPP") : "MM/DD/YYYY"}
                  </span>
                  <CalendarDays />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setDateAssign(addDays(new Date(), parseInt(value)))
                  }
                ></Select>
                <div className="rounded-md border">
                  <Calendar
                    mode="single"
                    selected={dateAssign}
                    onSelect={setDateAssign}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-1 items-center gap-[1px] p-0">
            <Label htmlFor="Status" className="text-[#015C92] text-[12px]">
              Last Inspection
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="col-span-3 justify-between bg-[#F2F8FF] text-[#4E555A] h-[35px]"
                  variant={"outline"}
                >
                  <span className="font-normal">
                    {dateInspect ? format(dateInspect, "PPP") : "MM/DD/YYYY"}
                  </span>
                  <CalendarDays />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setDateInspect(addDays(new Date(), parseInt(value)))
                  }
                ></Select>
                <div className="rounded-md border">
                  <Calendar
                    mode="single"
                    selected={dateInspect}
                    onSelect={setDateInspect}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-1 items-center gap-[1px] p-0">
            <Label htmlFor="Date Return" className="text-[#015C92] text-[12px]">
              Date Returned
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="col-span-3 justify-between bg-[#F2F8FF] text-[#4E555A] h-[35px]"
                  variant={"outline"}
                >
                  <span className="font-normal">
                    {dateReturn ? format(dateReturn, "PPP") : "MM/DD/YYYY"}
                  </span>
                  <CalendarDays />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setDateReturn(addDays(new Date(), parseInt(value)))
                  }
                ></Select>
                <div className="rounded-md border">
                  <Calendar
                    mode="single"
                    selected={dateReturn}
                    onSelect={setDateReturn}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button
            type="submit"
            className="h-[40px] w-[120px] font-normal bg-transparent border-[1px] border-[#858585] text-[#4E555A] hover:text-white"
          >
            Cancel
          </Button>
          <Button type="submit" className="h-[40px] w-[120px] font-normal">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>

  );
};

export default EditItemModal;
