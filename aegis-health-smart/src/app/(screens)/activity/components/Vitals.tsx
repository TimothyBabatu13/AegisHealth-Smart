<<<<<<< HEAD
import React from "react";
import { IconType } from "react-icons";
import { BsThermometerHalf } from "react-icons/bs";
import VitalsCard from "./VitalsCard";
import { ChevronDown } from "lucide-react";
import LinkWithChevron from "../../components/LinkWithChevron";
import ScrollComponent from "../../components/ScrollComponent";

interface Vitals {
    Icon: IconType;
    vital: string;
    latestReading: string;
    units: string;
    cardColor: string;
}

function Vitals() {
    const vitals: Vitals[] = [
        {
            Icon: BsThermometerHalf,
            vital: "Blood Pressure",
            latestReading: "120/75",
            units: "mm/hg",
            cardColor: "#EAF5F9",
        },
        {
            Icon: BsThermometerHalf,
            vital: "Heart Rate",
            latestReading: "120/75",
            units: "mm/hg",
            cardColor: "#F5EAF9",
        },
        {
            Icon: BsThermometerHalf,
            vital: "Saturation",
            latestReading: "120/75",
            units: "mm/hg",
            cardColor: "#F9F2EA",
        },
        {
            Icon: BsThermometerHalf,
            vital: "Temperature",
            latestReading: "120/75",
            units: "mm/hg",
            cardColor: "#F9F2EA",
        },
    ];

    return (
      <div className="mb-[72px]">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[18px] leading-5 font-semibold">Your Vitals</h2>
          <LinkWithChevron href="" Icon={ChevronDown}>Today</LinkWithChevron>
        </div>
        <ScrollComponent className="min-[1220px]:grid grid-cols-2">
            {vitals.map(
                ({ Icon, vital, latestReading, units, cardColor }, id) => {
                    return (
                        <VitalsCard
                            key={id}
                            Icon={Icon}
                            vital={vital}
                            latestReading={latestReading}
                            units={units}
                            cardColor={cardColor}
                        />
                    );
                }
            )}
        </ScrollComponent>
      </div>
    );
}

export default Vitals;
=======
import React from "react";
import { IconType } from "react-icons";
import { BsThermometerHalf } from "react-icons/bs";
import VitalsCard from "./VitalsCard";
import { ChevronDown } from "lucide-react";
import LinkWithChevron from "../../components/LinkWithChevron";
import ScrollComponent from "../../components/ScrollComponent";

interface Vitals {
    Icon: IconType;
    vital: string;
    latestReading: string;
    units: string;
    cardColor: string;
}

function Vitals() {
    const vitals: Vitals[] = [
        {
            Icon: BsThermometerHalf,
            vital: "Blood Pressure",
            latestReading: "120/75",
            units: "mm/hg",
            cardColor: "#EAF5F9",
        },
        {
            Icon: BsThermometerHalf,
            vital: "Heart Rate",
            latestReading: "120/75",
            units: "mm/hg",
            cardColor: "#F5EAF9",
        },
        {
            Icon: BsThermometerHalf,
            vital: "Saturation",
            latestReading: "120/75",
            units: "mm/hg",
            cardColor: "#F9F2EA",
        },
        {
            Icon: BsThermometerHalf,
            vital: "Temperature",
            latestReading: "120/75",
            units: "mm/hg",
            cardColor: "#F9F2EA",
        },
    ];

    return (
      <div className="mb-[72px]">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[18px] leading-5 font-semibold">Your Vitals</h2>
          <LinkWithChevron href="" Icon={ChevronDown}>Today</LinkWithChevron>
        </div>
        <ScrollComponent className="min-[1220px]:grid grid-cols-2">
            {vitals.map(
                ({ Icon, vital, latestReading, units, cardColor }, id) => {
                    return (
                        <VitalsCard
                            key={id}
                            Icon={Icon}
                            vital={vital}
                            latestReading={latestReading}
                            units={units}
                            cardColor={cardColor}
                        />
                    );
                }
            )}
        </ScrollComponent>
      </div>
    );
}

export default Vitals;
>>>>>>> master
