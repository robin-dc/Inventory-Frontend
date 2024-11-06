import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  { action: "Item Deleted", itemId: "121", performedBy: "Engr. Paz",      dateTime: "2024-11-01 21:34" },
  { action: "Added",        itemId: "122", performedBy: "Engr. Paz",      dateTime: "2024-11-01 21:36" },
  { action: "Item Edited",  itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
  { action: "Item Edited",  itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
  { action: "Item Edited",  itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
  { action: "Item Edited",  itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
  { action: "Item Edited",  itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
];

export function HistoryTableCard() {
  return (
    <div className="p-6 bg-white rounded-xl grid"> <CardHeader>
        <h2 className="pe-4 text-[#015C92] text-primary text-[32px] font-bold leading-[1.125rem] text-left">History</h2>
      </CardHeader>
      <CardContent>
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="pl-12 pr-0 bg-[#015C92] text-white text-justify text-base font-normal h-12">Action Description</TableHead>
      <TableHead className="pl-4 pr-16 bg-[#015C92] text-white text-left text-base font-normal h-12">Item ID</TableHead>
      <TableHead className="pl-4 pr-14 bg-[#015C92] text-white text-left text-base font-normal h-12">Performed By</TableHead>
      <TableHead className="pl-4 pr-16 bg-[#015C92] text-white text-left text-base font-normal h-12">Date & Time</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((row, index) => (
      <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#E9F3FF]"}>
        <TableCell className="pl-12 text-left font-normal h-12">{row.action}</TableCell>
        <TableCell className="pl-4 pr-16 text-left font-normal h-12">{row.itemId}</TableCell>
        <TableCell className="pl-4 pr-16 text-left font-normal h-12">{row.performedBy}</TableCell>
        <TableCell className="pl-4 pr-16 text-left font-normal h-12">{row.dateTime}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

      </CardContent>
    </div>
  );
}

export default HistoryTableCard;
