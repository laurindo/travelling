import React from 'react';
import Logo from './Logo.jsx';
import NavMenu from './NavMenu.jsx';

const Header = ({ name, navItems }) => {
    return (
        <header>
            <Logo />
            <NavMenu navItems={navItems} position="right" />
        </header>
    );
};

export default Header;
