type NavButtonProps = {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

export default function NavButton({ name, isActive, onClick }: NavButtonProps) {
    return (
        <button onClick={onClick} className={`${isActive ? 'underline' : ''} decoration-1`}>
            {name}
        </button>
    );
}