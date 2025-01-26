import { STATS, PROFICIENCY_BARS } from '../constants/stats';

export default function About() {
    return (
        <section id="about" className="scroll-mt-20 md:scroll-mt-32">
            <div className="flex justify-center">
                <h2 className="jua gradient-text text-4xl mb-8">about</h2>
            </div>

            <div className="flex justify-center">
                <div className="flex bg-snow rounded w-80 md:w-full lg:w-10/12 flex-col md:flex-row">
                    <div className="w-full md:w-5/12 flex flex-col gap-8 px-14 py-10 items-center justify-center">
                        <div className="text-center">
                            <h3 className="gaegu text-brownie text-lg pt-2">PROFILE CARD</h3>
                            <div className="jua text-5xl gradient-text">cathy</div>
                        </div>
                        <div className="bg-strawberry w-32 h-32 rounded-full flex justify-center items-center">
                            <img src="images/profile-bunny.svg" alt="Bunny" className="w-24 h-24"></img>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            {PROFICIENCY_BARS.map((profiency) => {
                                return (
                                    <div key={profiency.name}>
                                        <div className="gaegu text-brownie">{profiency.name}</div>
                                        <div>
                                            <div className="h-7 rounded-full border-2 border-brownie">
                                                <div className="rounded-full h-5/6 bg-watermelon m-0.5" style={{ width: `${profiency.value}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex justify-center gap-x-4">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cathyngo1/">
                                <img src="icons/linkedin.svg" alt="LinkedIn Logo" className="w-9 transition duration-300 hover:scale-105"></img>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/cathy-ngo">
                                <img src="icons/github.svg" alt="GitHub Logo" className="w-9 transition duration-300 hover:scale-105"></img>
                            </a>
                        </div>
                    </div>

                    <div className="bg-strawberry w-full md:lg:w-7/12 rounded">
                        <div className="px-14 pb-10 pt-9 flex flex-col h-full justify-between gap-4">
                            {STATS.map((stat) => {
                                return (
                                    <div key={stat.title}>
                                        <div className="flex gap-2 w-max bg-brownie px-3 rounded relative top-1.5">
                                            <img src="icons/bunny.svg" alt="Bunny" className="w-3"></img>
                                            <h4 className="jua text-vanilla text-lg">{stat.title}</h4>
                                        </div>
                                        <p className="bg-snow gaegu text-lg text-brownie rounded px-4 pt-3 pb-2">{stat.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}