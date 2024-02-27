import React from "react";

export function GridDotBackground() {
    return (
        <div className="h-[100dvh] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute flex items-center justify-center -z-10">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent,black_80%)] -z-10"></div>
        </div>
    );
}
