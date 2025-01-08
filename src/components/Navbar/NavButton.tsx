type NavButtonProps = {
    name: string;
}

export default function NavButton({ name }: NavButtonProps) {
    return (
        <button>{name}</button>
    );
}