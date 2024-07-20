'use client'
import { useAppointmentTableHook } from "@/context/AppointmentTableContext"
import { Payment, columns } from "./TableColumn"
import { DataTable } from "./TableData"


export default function Table() {  
  const { tableData }= useAppointmentTableHook();
  
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tableData} />
    </div>
  )
}
