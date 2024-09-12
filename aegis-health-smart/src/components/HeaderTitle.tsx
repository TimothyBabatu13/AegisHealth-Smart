"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HeaderTitle = () => {
    const [page, setPage] = useState("");
    const pathName = usePathname();

    useEffect(() => {
        const setNameOfPage = () => {
            if (pathName === "/") {
                return "Home";
            } else if (pathName === "/appointment") {
                return "Appointments";
            } else if (pathName === "/symptom-checker") {
                return "Symptom Checker";
            } else if (pathName === "/activity") {
                return "Activity";
            }
            return "Mental Support";
        };
        setPage(setNameOfPage());
    }, [pathName]);
    return (
        <h1 className="text-lg leading-[26.1px] font-medium text-[#101928]">
            {page}
        </h1>
    );
};

export default HeaderTitle;
