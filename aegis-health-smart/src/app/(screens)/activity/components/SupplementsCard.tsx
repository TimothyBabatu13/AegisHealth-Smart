import Image from "next/image";
import React from "react";

interface VitalsCardProps {
    supplementName: string;
    numberOfCapsules: number;
    composition: string;
    supplementImage: string;
}

function SupplementsCard({
    supplementName,
    numberOfCapsules,
    composition,
    supplementImage,
}: VitalsCardProps) {
    return (
        <div className="p-3 rounded-lg border border-[#E4E7EC]">
            <div className="mb-3">
                <div className="font-semibold flex items-center justify-between">
                    <p>{supplementName}</p>
                    <p className="text-[#14141499] text-[10px] leading-[14.5px]">
                        {composition}
                    </p>
                </div>
                <p className="text-sm font-semibold text-[#291ED7]">
                    {numberOfCapsules} Capsules
                </p>
            </div>
            <div>
                <Image
                    height={145}
                    width={127}
                    className="rounded-[10px] w-full"
                    src={supplementImage}
                    alt={`${supplementName} image`}
                    priority
                />
            </div>
        </div>
    );
}

export default SupplementsCard;
