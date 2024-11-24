type NavButtonProps = {
    name: string;
}

type Project = {
    name: string;
    image: string;
    tags: Tag[];
}

type Tag = "dev" | "design";