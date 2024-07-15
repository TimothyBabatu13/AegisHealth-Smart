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