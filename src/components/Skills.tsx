import { SKILLS } from '../constants/skills';

const filepath: string = 'images/skills/';

export default function Skills() {
    return (
        <div>
            <div className="flex justify-center">
                <h2 className="jua gradient-text text-4xl mb-8">skills</h2>
            </div>
            <div className="grid grid-cols-4 gap-8 mx-auto w-fit">
                {SKILLS.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-center opaque-white rounded aspect-square w-40 h-40">
                        <img src={`${filepath + skill.filename}`} alt={`${skill.name} icon`} className="w-28 h-28 object-contain"/>
                    </div>
                ))}
            </div>
        </div>
    );
}