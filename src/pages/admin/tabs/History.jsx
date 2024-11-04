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
  { action: "Item Deleted", itemId: "121", performedBy: "Engr. Paz", dateTime: "2024-11-01 21:34" },
  { action: "Added", itemId: "122", performedBy: "Engr. Paz", dateTime: "2024-11-01 21:36" },
  { action: "Item Edited", itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
  { action: "Item Edited", itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
  { action: "Item Edited", itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
  { action: "Item Edited", itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
  { action: "Item Edited", itemId: "105", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:38" },
  { action: "Item Printed", itemId: "All", performedBy: "Engr. Espiritu", dateTime: "2024-11-01 21:39" },
];

export function HistoryTable() {
  return (
    <div className="w-4/5 mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="p-4 text-lg font-semibold text-[#015C92]">History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-4 bg-[#015C92] text-white text-left font-semibold">Action Description</TableHead>
            <TableHead className="p-4 bg-[#015C92] text-white text-left font-semibold">Item ID</TableHead>
            <TableHead className="p-4 bg-[#015C92] text-white text-left font-semibold">Performed By</TableHead>
            <TableHead className="p-4 bg-[#015C92] text-white text-left font-semibold">Date & Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#E9F3FF]"}>
              <TableCell className="p-4 text-left">{row.action}</TableCell>
              <TableCell className="p-4 text-left">{row.itemId}</TableCell>
              <TableCell className="p-4 text-left">{row.performedBy}</TableCell>
              <TableCell className="p-4 text-left">{row.dateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default HistoryTable;
