import { useEffect, useState } from "react";
import portrait from "../static/assets/images/portrait.png"
import linkedinLogo from "../static/assets/images/linkedin.svg"
import githubLogo from "../static/assets/images/github.svg"

export default function Banner() {
    return (
        <div className="h-screen pb-64 max-h-[900px]">
            <div className="opaqueWhite w-full rounded-[32px] text-brownie h-full">
                <div className="flex h-full justify-center flex-wrap px-16">
                        <img src={portrait} alt="Self Portrait" className="h-full pt-10 bottom-0"></img>
                    <div className="flex flex-col justify-center pr-8">
                        <div className="flex justify-center">
                            <div className="w-72">
                                <div className="flex flex-col gaegu text-center">
                                    <h1 className="text-xl leading-3">hi there, my name is</h1>
                                    <h2 className="jua text-6xl bg-gradient-to-b from-brownie from-50% to-sesame inline-block text-transparent bg-clip-text leading-tight">cathy ngo</h2>
                                    <div className="flex justify-center">
                                        <h3 className="text-base w-64 leading-4">i am a software engineer with a soft spot for design. based in australia :&#41;</h3>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4 gap-x-4">
                                    <img src={linkedinLogo} alt="LinkedIn Logo"></img>
                                    <img src={githubLogo} alt="GitHub Logo"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}