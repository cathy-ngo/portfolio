import logo from '../../logo.svg';

export default function Navbar() {
    return (
        <nav className="flex flex-col justify-center text-brownie bg-vanilla h-20">
            <div className="flex">
                <div className="flex gap-x-3 mx-6">
                    <div><img src={logo} alt="logo" /></div>
                    <div className="jua text-3xl h-full pt-0.5">cathy ngo</div>
                </div>
                <div className="gaegu flex gap-x-6 text-xl">
                    <div>
                        <button className="h-full" type="button">home</button>
                    </div>
                    <div>
                        <button className="h-full" type="button">projects</button>
                    </div>
                    <div>
                        <button className="h-full" type="button">photos</button>
                    </div>
                    <div>
                        <button className="h-full" type="button">resume</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}