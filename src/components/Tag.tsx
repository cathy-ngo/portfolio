import { TAG_STYLES } from '../constants/tagStyles';

type TagProps = { 
    type: Tag;
};

export default function Tag({ type }: TagProps) {
    const tagStyle = TAG_STYLES[type];
    return (
        <div className="flex gap-2 w-max px-2 py-1 rounded bg-vanilla">
            <div className="rounded flex justify-center w-7" style={{backgroundColor: tagStyle.backgroundColor}} >
                <img src={tagStyle.image} alt={tagStyle.alt}></img>
            </div>
            <div className="gaegu text-xl gradient-text">{type}</div>
        </div>
    );
}