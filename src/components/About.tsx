import { STATS, PROFICIENCY_BARS } from '../constants/stats';

export default function About() {
    return (
        <div>
            <div className="flex justify-center">
                <h2 className="jua gradient-text text-4xl mb-8">about</h2>
            </div>

            <div className="flex justify-center">
                <div className="flex opaque-white rounded w-10/12">
                    <div className="w-5/12 flex flex-col gap-8 px-14 py-10 items-center">
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
                                            <div className="h-7 rounded-full border-2 border-brownie"></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex justify-center gap-x-4">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cathyngo1/">
                                <img src="icons/linkedin.svg" alt="LinkedIn Logo" className="w-9"></img>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/cathy-ngo">
                                <img src="icons/github.svg" alt="GitHub Logo" className="w-9"></img>
                            </a>
                        </div>
                    </div>

                    <div className="bg-strawberry w-7/12">
                        {STATS.map((stat) => {
                            return (
                                <div key={stat.title}>
                                    <div className="flex gap-2 w-max bg-brownie px-3 rounded">
                                        <img src="icons/bunny.svg" alt="Bunny" className="w-3"></img>
                                        <h4 className="jua text-vanilla text-lg">{stat.title}</h4>
                                    </div>
                                    <p className="opaque-white">{stat.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}