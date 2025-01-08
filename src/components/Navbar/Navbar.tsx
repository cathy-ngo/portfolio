import logo from '../../static/assets/images/logo/logo.svg';
import NavButton from './NavButton';

export default function Navbar() {
    return (
        <nav className="flex justify-center sticky top-0">
            <div className="flex w-96 opaque-white gap-6 px-8 py-2 mt-10 gaegu text-brownie text-xl rounded">
                <NavButton name={"home"} />
                <NavButton name={"projects"} />
                <img className="h-9" src={logo} alt="logo" />
                <NavButton name={"photos"} />
                <NavButton name={"about"} />
            </div>

        </nav>
    );
}