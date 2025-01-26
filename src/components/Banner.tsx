export default function Banner() {
    return (
        <section id="home" className="h-[max(calc(100vh-188px), 900px)] md:max-h-[680px] flex justify-center scroll-mt-32">
            <div className="opaque-white w-96 md:w-full rounded text-brownie h-full overflow-hidden">
                <div className="flex h-full justify-center flex-col md:flex-row-reverse pt-10">
                    <div className="flex flex-col justify-center md:pr-8">
                        <div className="flex justify-center">
                            <div className="w-72">
                                <div className="flex flex-col gaegu text-center">
                                    <div className="text-xl leading-3">hi there, my name is</div>
                                    <h1 className="jua text-5xl md:text-6xl gradient-text leading-tight">cathy ngo</h1>
                                    <div className="flex justify-center">
                                        <div className="text-base w-64 leading-4">i am a software engineer with a soft spot for design. based in australia :&#41;</div>
                                    </div>
                                </div>
                                <div className="flex justify-center h-8 mt-4 gap-x-4">
                                    <div className="flex justify-center gap-x-4">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cathyngo1/">
                                            <img src="icons/linkedin.svg" alt="LinkedIn Logo" className="w-9 transition duration-300 hover:scale-105"></img>
                                        </a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/cathy-ngo">
                                            <img src="icons/github.svg" alt="GitHub Logo" className="w-9 transition duration-300 hover:scale-105"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center grow md:grow-0">
                        <div className="flex flex-col justify-end">
                            <img src="images/portrait.png" alt="Self Portrait" className="h-full max-h-[700px] pt-10 bottom-0 object-cover"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}