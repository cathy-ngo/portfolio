type NavButtonProps = {
    name: string;
}

type Project = {
    name: string;
    image: string;
    tags: Tag[];
    description: string;
    tools: string[];
    url?: string;
}

type Tag = "dev" | "design";