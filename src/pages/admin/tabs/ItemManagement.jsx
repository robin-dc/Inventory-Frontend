import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import { Search } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Printer } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import EditItemModal from "../components/EditItemModal"
import CreateItemModal from "../components/CreateItemModal"

const items = [
  {
    id: 1,
    item: "Laptop",
    unit: "Vivobook",
    status: "GOOD",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 2,
    item: "Laptop",
    unit: "Vivobook",
    status: "DAMAGED",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 3,
    item: "Laptop",
    unit: "Vivobook",
    status: "GOOD",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 4,
    item: "Laptop",
    unit: "Vivobook",
    status: "DAMAGED",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 5,
    item: "Laptop",
    unit: "Vivobook",
    status: "GOOD",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 6,
    item: "Laptop",
    unit: "Vivobook",
    status: "DAMAGED",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 7,
    item: "Laptop",
    unit: "Vivobook",
    status: "GOOD",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 8,
    item: "Laptop",
    unit: "Vivobook",
    status: "DAMAGED",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 9,
    item: "Laptop",
    unit: "Vivobook",
    status: "GOOD",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
  {
    id: 10,
    item: "Laptop",
    unit: "Vivobook",
    status: "DAMAGED",
    holder: "Shrek",
    dateGiven: "May 21, 2019",
    location: "2E4 Coeng",
    lastChecked: "May 21, 2019",
    dateReturned: "May 22, 2019",
  },
]

const ItemManagement = () => {
  return (
      <div className="p-6 bg-white rounded-xl grid">
        <h1 className="text-primary text-[32px] font-bold">Item Management</h1>

        <div className="flex my-4 mb-6 gap-x-[10px]">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="bg-secondary rounded-xl border border-[#C2D8FF] text-primary pl-4 pr-10 py-2 w-full focus:outline-none placeholder:text-primary text-[16px]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary scale-75" />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-[16px] font-normal text-secondary rounded-xl">
                <Plus /> Add Item
              </Button>
            </DialogTrigger>
            <CreateItemModal/>
          </Dialog>

          <Button variant="secondary" className="bg-secondary text-[16px] font-normal text-primary rounded-xl border border-[#C2D8FF]">
            <Printer /> Print
          </Button>
        </div>

        <ScrollArea className=" whitespace-nowrap">
          <Table>
            <TableHeader className="bg-primary">
              <TableRow>
                <TableHead className="text-secondary text-[16px] font-normal">ID</TableHead>
                <TableHead className="text-secondary text-[16px] font-normal">Item</TableHead>
                <TableHead className="text-secondary text-[16px] font-normal">Unit</TableHead>
                <TableHead className="text-secondary text-[16px] font-normal">Status</TableHead>
                <TableHead className="text-secondary text-[16px] font-normal">Holder</TableHead>
                <TableHead className="text-secondary text-[16px] font-normal">Date Given</TableHead>
                <TableHead className="text-secondary text-[16px] font-normal">Location</TableHead>
                <TableHead className="text-secondary text-[16px] font-normal">Last Checked</TableHead>
                <TableHead className="text-secondary text-[16px] font-normal pr-0">Date Returned</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={item.item} className={`${index % 2 === 0 ? 'bg-[#FAFCFF]' : 'bg-secondary'}`}>
                  <TableCell className="text-[16px] py-1">{item.id}</TableCell>
                  <TableCell className="text-[16px] py-1">{item.item}</TableCell>
                  <TableCell className="text-[16px] py-1">{item.unit}</TableCell>
                  <TableCell className="text-[#F5F5F7] text-[12px]">
                    <Badge variant="outline" className={`text-secondary ${item.status === 'GOOD' ? 'bg-[#54C392] px-6 py-1' : 'bg-[#A02334]'} py-1`}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[16px] py-1">{item.holder}</TableCell>
                  <TableCell className="text-[16px] py-1">{item.dateGiven}</TableCell>
                  <TableCell className="text-[16px] py-1">{item.location}</TableCell>
                  <TableCell className="text-[16px] py-1">{item.lastChecked}</TableCell>
                  <TableCell className="text-[16px] py-1 pr-0">{item.dateReturned}</TableCell>
                  <TableCell className="text-[16px] py-1 pl-0">
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
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="secondary"
                                className="bg-white text-primary rounded-none rounded-t-xl text-[12px] border border-b-primary flex justify-start"
                              >
                                <Pencil className="scale-80" />
                                Edit
                              </Button>
                            </DialogTrigger>
                            <EditItemModal/>
                          </Dialog>

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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
  )
}

export default ItemManagement
