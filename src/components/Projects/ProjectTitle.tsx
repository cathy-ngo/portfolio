import bunnyImage from "../../static/assets/images/icons/bunny.svg"

type ProjectTitleProps = { 
    title: string 
};

export default function ProjectTitle({ title }: ProjectTitleProps) {
    return (
        <div className="flex gap-2 w-max bg-brownie px-3 rounded">
            <img src={ bunnyImage } alt="Bunny" className="w-4"></img>
            <h3>{title}</h3>
        </div>
    );
}