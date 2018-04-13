import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({ navItems }) => {
    const getItems = () => {
        return navItems.map((item, index) => {
            return (
                <li key={ item.name }>
                    <Link to={ item.link } className={ item.color }>
                        { item.icon ? <span><i className={ `fas fa-${item.icon}` }></i></span> : '' }
                        <span>&nbsp;&nbsp;{ item.i18n }</span>
                    </Link>
                </li>
            );
        });
    };

    return (
        <ul className='horizontal'>
            { getItems() }
        </ul>
    );
};

export default NavMenu;