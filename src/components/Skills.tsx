import { SKILLS } from '../constants/skills';

const filepath: string = 'images/skills/';

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-20 md:scroll-mt-32">
            <div className="flex justify-center">
                <h2 className="jua gradient-text text-4xl mb-8">skills</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mx-auto w-fit">
                {SKILLS.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-3 pt-2 items-center justify-center bg-snow rounded aspect-square w-32 h-32 md:w-36 md:h-36 transition duration-300 hover:scale-105">
                        <img src={`${filepath + skill.filename}`} alt={`${skill.name} icon`} className="w-20 h-20 object-contain" />
                        <div className="gaegu text-m text-brownie">{skill.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}