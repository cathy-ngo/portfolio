import { useEffect, useState } from "react";


export default function Banner() {
    return (
        <div className="opaqueWhite w-full rounded-[32px] text-brownie">
            <div className="grid grid-cols-2">
                <div className="">
                    insert image here
                </div>
                <div className="flex flex-col gaegu text-center">
                    <h1 className="text-xl">hi there, my name is</h1>
                    <h2 className="jua text-6xl bg-gradient-to-b from-brownie from-50% to-sesame inline-block text-transparent bg-clip-text">cathy ngo</h2>
                    <h3 className="text-base">{`i am a software engineer with a soft spot for design. based in australia :)`}</h3>
                </div>
            </div>
        </div>
    );
}