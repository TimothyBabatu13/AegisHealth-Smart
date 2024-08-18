"use client"

import React from "react";
import ScrollButtons from "./ScrollButtons";

interface ScrollComponentProps {
    children: React.ReactNode;
    className?: string
}

function ScrollComponent({children, className}: ScrollComponentProps) {
    const galleryRef = React.useRef(null);

    return (
        <div>
            <div className="relative mt-5 ">
                <div
                    id="gallery"
                    ref={galleryRef}
                    className={`flex items-center gap-5 overflow-x-scroll scroll-smooth ${className}`}
                >
                    {children}
                </div>
            </div>
            <div className="mr-5 py-7">
                <ScrollButtons galleryRef={galleryRef} />
            </div>
        </div>
    );
}

export default ScrollComponent;
