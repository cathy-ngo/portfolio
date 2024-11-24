import logo from '../../logo.svg';
import NavButton from './NavButton';

export default function Navbar() {
    return (
        <nav className="flex justify-center sticky top-0">
            <div className="flex w-auto opaque-white gap-6 px-10 py-2 mt-10 gaegu text-brownie text-xl rounded">
                <NavButton name={"home"} />
                <NavButton name={"projects"} />
                <div className="px-3"><img src={logo} alt="logo" /></div>
                <NavButton name={"photos"} />
                <NavButton name={"about"} />
            </div>

        </nav>
    );
}