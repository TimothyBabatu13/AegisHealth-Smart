import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export interface userDetailsType {
    email: string,
    password: string,
    h?: string
}

export interface FormInputType {
    Onchange: ChangeEventHandler<HTMLInputElement>;
    value: string
}

export interface AuthContextType {
    id : string | null,
    setId: Dispatch<SetStateAction<string|null>>
}

export interface AppointmentTableType {
    id: string;
    name: string;
    type: string;
    isActive: boolean;
    img: string;
    hospital: string;
    address: string;
    date: string;
    time: string;
}

export interface AppointmentTableContextType {
    tableData: AppointmentTableType[],
    setTableData: any
}