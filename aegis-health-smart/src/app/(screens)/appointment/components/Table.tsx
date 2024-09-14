'use client'
import { useAppointmentTableHook } from "@/context/AppointmentTableContext"
import { Payment, columns, secondCol } from "./TableColumn"
import { DataTable } from "./TableData"


export default function Table() {  
  const { tableData, isLoading, loadingData }= useAppointmentTableHook();
  
  return (
    <div className="min-[710px]:container min-[710px]:mx-auto py-10">
      <DataTable isLoading={isLoading} loadingData={loadingData} columns={columns} secondCol={secondCol} data={tableData} />
    </div>
  )
}
