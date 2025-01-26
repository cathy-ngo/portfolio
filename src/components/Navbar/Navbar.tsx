import { useEffect, useState } from 'react';
import NavButton from './NavButton';

const navItems: NavItem[] = [
    { name: 'home', position: 'left' },
    { name: 'projects', position: 'left' },
    { name: 'skills', position: 'right' },
    { name: 'about', position: 'right' },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    const leftItems = navItems.filter(item => item.position === 'left');
    const rightItems = navItems.filter(item => item.position === 'right');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: [0, 0.25, 0.5, 0.75, 1],
                rootMargin: '-50% 0px -50% 0px'
            }
        )

        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    });

    const scrollToSection = (sectionName: string) => {
        const element = document.getElementById(sectionName);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className="flex justify-center sticky top-0 z-50">
            <div className="flex w-96 bg-white bg-opacity-90 gap-6 px-8 py-2 mt-10 gaegu text-brownie text-xl rounded">
                {leftItems.map((item) => (
                    <NavButton
                        key={item.name}
                        name={item.name}
                        isActive={activeSection === item.name}
                        onClick={() => scrollToSection(item.name)}
                    />
                ))}

                <img className="h-9" src="logo.svg" alt="logo" />

                {rightItems.map((item) => (
                    <NavButton
                        key={item.name}
                        name={item.name}
                        isActive={activeSection === item.name}
                        onClick={() => scrollToSection(item.name)}
                    />
                ))}
            </div>

        </nav>
    );
}