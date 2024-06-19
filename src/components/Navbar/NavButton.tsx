export default function NavButton({ name }: NavButtonProps) {
    return (
        <button className="h-full" type="button">{name}</button>
    );
}