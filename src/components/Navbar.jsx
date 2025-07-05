import React, { useState } from "react";
import "./Navbar.css";
import { FaLaptopHouse } from "react-icons/fa";
import { href, Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const houseLogo = {
        color: 'cyan', fontSize: '2rem'
    }

    //todo: Title
    const navTitle = 'Mangoleaf';

    //todo: NavLinks -
    const navLinks = [
        { linkName: 'Home', href: '/home' },
        { linkName: 'About Us', href: '/about' },
        { linkName: 'Project', href: '/project' },
        // { linkName: 'Pricing', href: '/pricing' },
        { linkName: 'Contact', href: '/contact' }
    ];

    const navButtons = [
        { button: 'Sign Up', href: '/signup' },
        { button: 'Sign In', href: '/signin' }
    ];

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navLogo">
                    {/* House Logo */}
                    <div><FaLaptopHouse style={houseLogo} /></div>
                    <div className="navbar-title">{navTitle}</div>
                </div>
                {/* NavLinks */}
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {navLinks.map((link, idx) => (
                        <Link to={link.href} key={idx} onClick={() => setMenuOpen(false)}>{link.linkName}</Link>
                    ))}
                    {navButtons.map((link, idx) => (
                        <button>
                            <Link to={link.href} key={idx}>{link.button}</Link>
                        </button>
                    ))}
                </nav>
                {/* Hamburger Icon */}
                <div
                    className={`hamburger ${menuOpen ? "toggle" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
