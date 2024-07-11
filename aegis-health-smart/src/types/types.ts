import { ChangeEventHandler } from "react";

export interface userDetailsType {
    email: string,
    password: string,
    h?: string
}

export interface FormInputType {
    Onchange: ChangeEventHandler<HTMLInputElement>;
    value: string
}
