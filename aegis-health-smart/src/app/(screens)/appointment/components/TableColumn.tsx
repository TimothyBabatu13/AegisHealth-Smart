"use client"

import { ColumnDef } from "@tanstack/react-table"
import TableName from "./TableName"
import TableHospital from "./TableHospital"
import TableNameLoader from "./TableNameLoader"
import TableHospitalLoader from "./TableHospitalLoader"

export type Payment = {
  id: string,
  name: string,
  type: string,
  isActive: boolean,
  img: string,
  hospital: string,
  address: string,
  date: string,
  time: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "nameComponent",
    header: "Name",
    cell: ({row}) => (
        <TableName 
            img={row.original.img}
            isActive={row.original.isActive}
            name={row.original.name}
            type={row.original.type}
        />
    )
  },
  {
    accessorKey: "hospitalComponent",
    header: "Hospital Practicing",
    cell: ({row}) => (
        <TableHospital 
            hospital={row.original.hospital}
            address={row.original.address}
            width
        />
    )
  },
  {
    accessorKey: "dateComponent",
    header: "Date and time",
    cell: ({row}) => (
        <TableHospital 
            hospital={row.original.date}
            address={row.original.time}
        />
    )
  },
]

export const secondCol: ColumnDef<Payment>[] = [
  {
    accessorKey: "nameComponent",
    header: "Name",
    cell: ({row}) => (
        <TableNameLoader />
    )
  },
  {
    accessorKey: "hospitalComponent",
    header: "Hospital Practicing",
    cell: ({row}) => (
        <TableHospitalLoader width/>
    )
  },
  {
    accessorKey: "dateComponent",
    header: "Date and time",
    cell: ({row}) => (
        <TableHospitalLoader width={false}/>
    )
  },
]