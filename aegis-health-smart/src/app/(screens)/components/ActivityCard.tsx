import Image from "next/image";
import Link from "next/link";
import RedirectToMessage from "./RedirectToMessage";
import { Button } from "./ScrollButtons";

interface ActivityCardProps {
    img: string;
    activityName: string;
    completedSessions: number;
    totalSessions: number;
}

const Badge = ({ text, className }: { text: string; className: string }) => {
    return (
        <div
            className={`${className} text-xs font-medium leading-[17.4px] w-fit px-2 rounded-[10px] mb-5`}
        >
            {text}
        </div>
    );
};

const ActivityCars = ({
    img,
    activityName,
    completedSessions,
    totalSessions,
}: ActivityCardProps) => {
    return (
        <div>
            <p className="font-semibold leading-5 mb-[10px]">Power yoga</p>
            <div
                className={`h-fit min-w-[264px] w-[264px] rounded-[20px] border-[0.5px] border-[#E0E3EB] p-[15px]`}
            >
                <Image
                    height={156}
                    width={234}
                    className="rounded-[10px] mb-[13px] w-full aspect-[6/4] object-fill"
                    src={img}
                    alt={`${activityName} image`}
                    priority
                />
                <div className="flex items-end justify-between">
                    <div>
                        <h4 className="text-[#141414] text-sm font-semibold leading-[21px] mb-[5px]">
                            {activityName}
                        </h4>
                        <p className="font-medium text-xs leading-5 opacity-80">{`${completedSessions}/${totalSessions} completed`}</p>
                    </div>
                    <Button
                        className={`py-2 px-4 rounded-[10px] text-[##344054] font-semibold text-sm text-center border border-[#E0E3EB]`}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ActivityCars;
