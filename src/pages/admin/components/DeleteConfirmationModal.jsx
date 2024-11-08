import { Button } from "@/components/ui/button";
import { Trash } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DeleteConfirmationModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button
        variant="secondary"
        className="bg-white text-primary rounded-none rounded-b-xl text-[12px] flex justify-start"
        >
        <Trash className="scale-80" />
        Delete
      </Button>
      </DialogTrigger>
      <DialogContent className="w-[350px] h-[400px] flex flex-col items-center justify-center"> 
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff0000"
          strokeWidth=".50"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-4 my-2.5"  
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
       
        <DialogTitle className="text-center">Are you sure?</DialogTitle>
        <DialogDescription className="text-center">
          Are you sure you want to delete this item?  <br />  This action cannot be undone.
        </DialogDescription>
        <DialogFooter className="flex justify-between">
       
        <Button
          variant="outline"
          className="border-2 border-gray-500 mx-3 hover:bg-gray-400" 
        >
          Cancel
        </Button>
        
        <Button
          variant="destructive"
          className="bg-red-500 text-white mx-3"  
        >
          Delete
        </Button>
      </DialogFooter>
      </DialogContent>
      
    </Dialog>
  );
};

export default DeleteConfirmationModal;
