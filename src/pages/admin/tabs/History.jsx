import React from "react";
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
    <div className="p-6 bg-white rounded-xl grid">
      <h1 className="text-primary text-[32px] font-bold mb-4">History</h1>
      
      <Table>
        <TableHeader className="bg-primary">
          <TableRow>
            <TableHead className="text-secondary text-[16px] font-normal">Action Description</TableHead>
            <TableHead className="text-secondary text-[16px] font-normal">Item ID</TableHead>
            <TableHead className="text-secondary text-[16px] font-normal">Performed By</TableHead>
            <TableHead className="text-secondary text-[16px] font-normal">Date & Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={data.data} className={`${index % 2 === 0 ? 'bg-[#FAFCFF]' : 'bg-secondary'}`}>
              <TableCell className="text-[16px] py-4">{data.action}</TableCell>
              <TableCell className="text-[16px] py-4">{data.itemId}</TableCell>
              <TableCell className="text-[16px] py-4">{data.performedBy}</TableCell>
              <TableCell className="text-[16px] py-4">{data.dateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default HistoryTableCard;
