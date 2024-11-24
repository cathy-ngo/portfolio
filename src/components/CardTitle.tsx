import bunnyImage from "../static/assets/images/bunny.svg"

type CardTitleProps = { 
    title: string 
};

export default function CardTitle({ title }: CardTitleProps) {
    return (
        <div className="flex gap-2 w-max bg-brownie px-3 rounded">
            <img src={ bunnyImage } alt="Bunny"></img>
            <h3>{title}</h3>
        </div>
    );
}