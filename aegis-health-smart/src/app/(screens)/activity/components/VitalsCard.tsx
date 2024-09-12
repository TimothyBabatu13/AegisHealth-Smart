import React from "react";
import { IconType } from "react-icons";

interface VitalsCardProps {
    Icon: IconType;
    vital: string;
    latestReading: string;
    units: string;
    cardColor: string
}

function VitalsCard({Icon, vital, latestReading, units, cardColor}: VitalsCardProps) {
    return (
        <div
            style={{ backgroundColor: `${cardColor}` }}
            className="py-[11px] px-[15px] rounded-lg"
        >
            <div className="bg-white rounded-lg p-2 mb-[22px] w-fit">
                <Icon size={20 } />
            </div>
            <p className="mb-2 text-nowrap text-sm leading-5">{vital}</p>
            <p className="text-lg leading-[26.1px] flex items-end gap-1 flex-nowrap">
                <span className="font-semibold">{latestReading} </span>
                <span className="text-xs leading-[17.4px]">{units}</span>
            </p>
        </div>
    );
}

export default VitalsCard;
