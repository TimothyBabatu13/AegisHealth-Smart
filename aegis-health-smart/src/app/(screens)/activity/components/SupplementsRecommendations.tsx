import React from "react";
import { IconType } from "react-icons";
import { BsThermometerHalf } from "react-icons/bs";
import SupplementsCard from "./SupplementsCard";

interface Vitals {
  supplementName: string;
  numberOfCapsules: number;
  composition: string;
  supplementImage: string;
}

function SupplementsRecommendations() {
  const vitals: Vitals[] = [
    {
        supplementName: "Nootropic",
        numberOfCapsules: 60,
        composition: "Gel - 1.5%",
        supplementImage: "/supplement1.png",
    },
    {
        supplementName: "Nootropic",
        numberOfCapsules: 60,
        composition: "Gel - 1.5%",
        supplementImage: "/supplement2.png",
    },
    {
        supplementName: "Nootropic",
        numberOfCapsules: 60,
        composition: "Gel - 1.5%",
        supplementImage: "/supplement3.png",
    },
    {
        supplementName: "Nootropic",
        numberOfCapsules: 60,
        composition: "Gel - 1.5%",
        supplementImage: "/supplement4.png",
    },
];

    return (
        <div>
            <h2 className="text-[18px] font-semibold leading-5 mb-5">
                Recommended Supplements
            </h2>
            <div className="grid grid-cols-2 gap-5">
                {vitals.map(
                    ({ supplementName, numberOfCapsules, composition, supplementImage }, id) => {
                        return (
                            <SupplementsCard
                                key={id}
                                supplementName={supplementName}
                                numberOfCapsules={numberOfCapsules}
                                composition={composition}
                                supplementImage={supplementImage}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default SupplementsRecommendations;
