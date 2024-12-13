
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import StudentForm from './studentform'
function AddButton() {



 


  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button  className='bg-green-700 border-green-800 border-1 hover:bg-green-500'>Add Student</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Student</DialogTitle>
     <StudentForm/>
      </DialogHeader>
   

    </DialogContent>
  </Dialog>
  )
}

export default AddButton
