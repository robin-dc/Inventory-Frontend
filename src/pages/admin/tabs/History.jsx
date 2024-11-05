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
    <Card className="w-4/7 mx-auto mt-1 bg-white shadow-md rounded-lg"> <CardHeader>
        <h2 style={{fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 700, lineHeight: '18px', textAlign: 'left', }} className="p-4 text-[#015C92]" > History </h2>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="p-4 bg-[#015C92] text-white text-left text-base font-normal leading-6 font-poppins">Action Description</TableHead>
              <TableHead className="p-4 bg-[#015C92] text-white text-left text-base font-normal leading-6 font-poppins">Item ID</TableHead>
              <TableHead className="p-4 bg-[#015C92] text-white text-left text-base font-normal leading-6 font-poppins">Performed By</TableHead>
              <TableHead className="p-4 bg-[#015C92] text-white text-left text-base font-normal leading-6 font-poppins">Date & Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#E9F3FF]"}>
                <TableCell style={{fontFamily: 'Poppins, sans-serif'}} className="p-4 text-left font-medium">{row.action}</TableCell>
                <TableCell style={{fontFamily: 'Poppins, sans-serif'}} className="p-4 text-left font-medium">{row.itemId}</TableCell>
                <TableCell style={{fontFamily: 'Poppins, sans-serif'}} className="p-4 text-left font-medium">{row.performedBy}</TableCell>
                <TableCell style={{fontFamily: 'Poppins, sans-serif'}} className="p-4 text-left font-medium">{row.dateTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default HistoryTableCard;
