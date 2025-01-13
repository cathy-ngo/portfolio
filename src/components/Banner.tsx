export default function Banner() {
    return (
        <div className="h-screen max-h-[680px]">
            <div className="opaque-white w-full rounded text-brownie h-full">
                <div className="flex h-full justify-center flex-wrap">
                        <img src="images/portrait.png" alt="Self Portrait" className="h-full pt-10 bottom-0 object-cover"></img>
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
                                <div className="flex justify-center gap-x-4">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cathyngo1/">
                                        <img src="icons/linkedin.svg" alt="LinkedIn Logo" className="w-9"></img>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/cathy-ngo">
                                        <img src="icons/github.svg" alt="GitHub Logo" className="w-9"></img>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}