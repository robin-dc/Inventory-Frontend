import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import TriggerDeleteModal from "@/pages/admin/components/DeleteConfirmationModal"
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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
 
const items = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
    item: "Laptop",
    unit: "Vivobook",
    status: "GOOD",
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
      <div className="text-primary text-[32px] font-bold">Item Management</div>

      <div className="flex my-4 mb-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-secondary rounded-xl border border-[#C2D8FF] text-primary pl-4 pr-10 py-2 w-full focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary scale-75" />
        </div>
  
        <Button className="mx-4 text-secondary rounded-xl">
          <Plus /> Add Item
        </Button>
        
        <Button variant="secondary" className="bg-secondary text-primary rounded-xl border border-[#C2D8FF]">
          <Printer /> Print
        </Button>
      </div>

      <ScrollArea className=" whitespace-nowrap rounded-md border">
        <Table>
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="text-secondary">ID</TableHead>
              <TableHead className="text-secondary">Item</TableHead>
              <TableHead className="text-secondary">Unit</TableHead>
              <TableHead className="text-secondary">Status</TableHead>
              <TableHead className="text-secondary">Holder</TableHead>
              <TableHead className="text-secondary">Date Given</TableHead>
              <TableHead className="text-secondary">Location</TableHead>
              <TableHead className="text-secondary">Last Checked</TableHead>
              <TableHead className="text-secondary">Date Returned</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={item.item} className={`${index % 2 === 0 ? 'bg-[#FAFCFF]' : 'bg-secondary'}`}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell className="font-medium">{item.item}</TableCell>
                <TableCell className="font-medium">{item.unit}</TableCell>
                <TableCell className="font-medium text-[#F5F5F7]">
                  <Badge variant="outline" className={`text-secondary ${item.status === 'GOOD' ? 'bg-[#54C392] px-5 py-1' : 'bg-[#A02334]'} py-1`}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{item.holder}</TableCell>
                <TableCell className="font-medium">{item.dateGiven}</TableCell>
                <TableCell className="font-medium">{item.location}</TableCell>
                <TableCell className="font-medium">{item.lastChecked}</TableCell>
                <TableCell className="font-medium">{item.dateReturned}</TableCell>
                <TableCell className="font-medium">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" className="rounded-full p-3 hover:bg-[#edede9]">
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
                        <TriggerDeleteModal/>
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
