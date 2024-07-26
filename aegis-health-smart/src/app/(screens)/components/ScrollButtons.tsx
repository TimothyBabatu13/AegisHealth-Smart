"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Svgs";
import React, { MutableRefObject } from "react";

interface ScrollButtonsProps {
    galleryRef: MutableRefObject<HTMLElement | null>;
}

const Button = ({
    children,
    className,
    onClick,
    disabled,
}: {
    children: React.ReactElement;
    className: string;
    onClick: () => void;
    disabled: boolean;
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className}`}
        >
            {children}
        </button>
    );
};

const ScrollButtons: React.FC<ScrollButtonsProps> = ({ galleryRef }) => {
    const [atStart, setAtStart] = React.useState(true);
    const [atEnd, setAtEnd] = React.useState(false);

    React.useEffect(() => {
        const checkScrollPosition = () => {
            const gallery = galleryRef.current;
            if (gallery) {
                const { scrollLeft, scrollWidth, clientWidth } = gallery;
                const isAtStart = scrollLeft === 0;
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
                setAtStart(isAtStart);
                setAtEnd(isAtEnd);
            }
        };

        const handleScroll = () => {
            checkScrollPosition();
        };

        const gallery = galleryRef.current;
        if (gallery) {
            gallery.addEventListener("scroll", handleScroll);
        }

        checkScrollPosition();

        return () => {
            if (gallery) {
                gallery.removeEventListener("scroll", handleScroll);
            }
        };
    }, [galleryRef]);

    function backScroll() {
        const gallery = galleryRef.current;
        if (gallery) {
            gallery.scrollLeft = gallery.scrollLeft - 500;
        }
    }

    function forwardScroll() {
        const gallery = galleryRef.current;
        if (gallery) {
            console.log("working");
            gallery.scrollLeft = gallery.scrollLeft + 500;
        }
    }

    return (
        <div>
            <div className="flex justify-end mt-5">
                <div className="flex items-center gap-4">
                    <Button
                        className={`border p-2 rounded-lg ${
                            atStart ? "opacity-50" : ""
                        }`}
                        onClick={backScroll}
                        disabled={atStart}
                    >
                        {/* <GrPrevious/> */}
                        <ChevronLeftIcon />
                    </Button>
                    <Button
                        className={`border p-2 rounded-lg ${
                            atEnd ? "opacity-50" : ""
                        }`}
                        onClick={forwardScroll}
                        disabled={atEnd}
                    >
                        {/* <GrNext/> */}
                        <ChevronRightIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ScrollButtons;
