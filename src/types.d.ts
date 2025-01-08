type Project = {
    name: string;
    image: string;
    tags: Tag[];
    description: string;
    tools: string[];
    url?: string;
}

type Tag = "dev" | "design";

type TagStyle = {
    image: string;
    alt: string;
    backgroundColor: string;
}

type TagStyles = {
    [key in Tag]: TagStyle;
};

type Skill = {
    name: string;
    icon: string;
}
