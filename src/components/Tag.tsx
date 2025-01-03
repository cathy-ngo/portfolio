import devImage from "../static/assets/images/tags/dev.svg"
import designImage from "../static/assets/images/tags/design.svg"

type TagProps = { 
    type: Tag;
};

type TagStyle = {
    image: string,
    alt: string,
    backgroundColor: string;
}

type TagStyles = {
    [key in Tag]: TagStyle;
};

const tagStyles: TagStyles = {
    dev: {
        image: devImage,
        alt: "dev icon",
        backgroundColor: "#ffe79e"
    },
    design: {
        image: designImage,
        alt: "design icon",
        backgroundColor: "#ffcba1"
    }
}

export default function Tag({ type }: TagProps) {
    const tagStyle = tagStyles[type];
    return (
        <div className="flex gap-2 w-max px-2 py-1 rounded bg-vanilla">
            <div className="rounded flex justify-center w-7" style={{backgroundColor: tagStyle.backgroundColor}} >
                <img src={tagStyle.image} alt={tagStyle.alt}></img>
            </div>
            <div className="gaegu text-xl gradient-text">{type}</div>
        </div>
    );
}