<<<<<<< HEAD
'use client'
import { useAppointmentTableHook } from "@/context/AppointmentTableContext"
import { Payment, columns } from "./TableColumn"
import { DataTable } from "./TableData"


export default function Table() {  
  const { tableData }= useAppointmentTableHook();
  
  return (
    <div className="min-[710px]:container min-[710px]:mx-auto py-10">
      <DataTable columns={columns} data={tableData} />
    </div>
  )
}
=======
'use client'
import { useAppointmentTableHook } from "@/context/AppointmentTableContext"
import { Payment, columns } from "./TableColumn"
import { DataTable } from "./TableData"


export default function Table() {  
  const { tableData }= useAppointmentTableHook();
  
  return (
    <div className="min-[710px]:container min-[710px]:mx-auto py-10">
      <DataTable columns={columns} data={tableData} />
    </div>
  )
}
>>>>>>> master
