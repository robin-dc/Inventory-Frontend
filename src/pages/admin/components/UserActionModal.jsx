import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const UserActionModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  variant="outline">Create User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="self-center">
          <DialogTitle className="text-blue-900/90 font-extrabold">Create New User</DialogTitle>
          </div>
        </DialogHeader>


        {/*This line part of code are for the textbox and text for the dialog of the user management modal*/}

        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Select>
              <SelectTrigger className="w-[380px] bg-blue-100">
                <SelectValue placeholder="Select role--" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select role --</SelectLabel>
                  <SelectItem value="apple">Admin</SelectItem>
                  <SelectItem value="banana">Other/s</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3 bg-blue-100"
            />
          </div>
          <div className="">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              className="col-span-3 bg-blue-100"
            />
          </div>
        </div>

        {/*End of the textbox and text for the dialog of the user management modal*/}

       <div className="flex flex-rows justify-between ">
         {/*this is for the submit button in the dialog*/}
        <div className="order-first">
        <DialogFooter>
          <Button className="bg-white border-2 text-slate-700 border-gray-400 hover:bg-border-gray-400 w-[150px]" type="submit">Cancel</Button>
        </DialogFooter>
        </div>
        {/*End of the code for the submit modal*/}

        {/*this is for the Cancel button in the dialog*/}
       <div className="order-last">
       <DialogFooter>
          <Button className="w-[150px]"type="submit">Confirm</Button>
        </DialogFooter>
       </div>
        {/*end of the cancel button in the dialog trigger*/}
       </div>

      </DialogContent>
    </Dialog>
  )
}

export default UserActionModal
