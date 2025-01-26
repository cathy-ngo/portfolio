type ProjectTitleProps = {
    title: string
};

export default function ProjectTitle({ title }: ProjectTitleProps) {
    return (
        <div className="flex gap-2 w-max bg-brownie px-3 rounded">
            <img src="icons/bunny.svg" alt="Bunny" className="w-4"></img>
            <h3 className="jua text-2xl text-vanilla">{title}</h3>
        </div>
    );
}