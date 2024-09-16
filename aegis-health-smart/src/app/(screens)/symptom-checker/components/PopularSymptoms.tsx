"use client";

import React from "react";
import LinkWithChevron from "../../components/LinkWithChevron";
import { ChevronRightIcon } from "@/components/Svgs";
import Link from "next/link";

function PopularSymptoms() {
    const [description, setDescription] = React.useState("");

    const data: string[] = [
        "Cough",
        "Cold",
        "Sprain",
        "Malaria",
        "Typhoid",
        "Fever",
    ];

    return (
        <div>
            <div className="mb-[50px]">
                <div className="flex items-center justify-between mt-10 mb-5">
                    <h2 className="font-semibold text-lg leading-5">
                        Popular Ailments
                    </h2>
                    <LinkWithChevron
                        href=""
                        Icon={ChevronRightIcon}
                    >
                        See all
                    </LinkWithChevron>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {data.map((item, id) => {
                        return (
                            <Link href={`/symptom-checker/ai?ailment=${item}`}
                                key={id}
                                className="bg-[#EAF5F9] py-3 px-4 rounded-[10px]"
                            >
                                <p className="text-lg leading-[26.1px] text-[#101928] text-center font-semibold">
                                    {item}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div>
                <p className="mb-[30px] font-medium text-lg leading-5 text-[#141414E5]">Didn&apos;t find what you were looking for?</p>
                <textarea
                    name="symptomsDescription"
                    id=""
                    value={description}
                    rows={10}
                    cols={5}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full resize-none border-[0.5px] border-[#E4E7EC] p-5 rounded-lg text-sm placeholder:text-[#14141499] focus:outline-[#291ED7]"
                    placeholder="Type here to describe how you feel"
                ></textarea>
            </div>
        </div>
    );
}

export default PopularSymptoms;
