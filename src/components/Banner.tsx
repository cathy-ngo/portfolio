import portrait from "../static/assets/images/portrait.png"
import linkedinLogo from "../static/assets/images/icons/linkedin.svg"
import githubLogo from "../static/assets/images/icons/github.svg"

export default function Banner() {
    return (
        <div className="h-screen pb-64 max-h-[900px]">
            <div className="opaque-white w-full rounded text-brownie h-full">
                <div className="flex h-full justify-center flex-wrap">
                        <img src={portrait} alt="Self Portrait" className="h-full pt-10 bottom-0 object-cover"></img>
                    <div className="flex flex-col justify-center pr-8">
                        <div className="flex justify-center">
                            <div className="w-72">
                                <div className="flex flex-col gaegu text-center">
                                    <div className="text-xl leading-3">hi there, my name is</div>
                                    <h1 className="jua text-6xl gradient-text leading-tight">cathy ngo</h1>
                                    <div className="flex justify-center">
                                        <div className="text-base w-64 leading-4">i am a software engineer with a soft spot for design. based in australia :&#41;</div>
                                    </div>
                                </div>
                                <div className="flex justify-center h-8 mt-4 gap-x-4">
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