import logo from '../../logo.svg';
import NavButton from './NavButton';

export default function Navbar() {
    const pageNames = ['home', 'projects', 'photos', 'resume'];

    return (
        <nav className="flex flex-col justify-center text-brownie bg-vanilla h-20">
            <div className="flex">
                <div className="flex gap-x-3 mx-6">
                    <div><img src={logo} alt="logo" /></div>
                    <div className="jua text-3xl h-full pt-0.5">cathy ngo</div>
                </div>
                <div className="gaegu flex gap-x-6 text-xl">
                    {pageNames.map(value => <NavButton name={value} />)}
                </div>
            </div>
        </nav>
    );
}