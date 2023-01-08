import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {

    const [isLeftActive, setIsLeftActive] = useState(false)
    const dropMenu = (menu) => {
        if (menu === 'left') {
            setIsLeftActive(!isLeftActive)
        }
    }
    return (
        <div className='navbar'>
            <div className="left">
                <div className="menu-icon">
                    <MenuIcon onClick={() => dropMenu('left')} />
                </div>
                <div className={isLeftActive ? "menu-items" : 'desktop-menu'}>
                    <div className="item">
                        <select className='select-item'>
                            <option className='select-option'>USD</option>
                            <option className='select-option'>CAD</option>
                            <option className='select-option'>AUD</option>
                        </select>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/1'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/2'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/3'>Children</Link>
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="item">
                    <Link className='link' to="./">Magic Purchase</Link>
                </div>
            </div>
            <div className="right">
                <div className="menu-icon">
                    <MenuIcon />
                </div>
                <div className="menu-items">
                    <div className="item">
                        <Link className="link" to='./'> Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/about'> About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/contact'> Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/store'> Store</Link>
                    </div>
                    <div className="item">
                        <div className="icons">
                            <div className="icon">

                                <SearchIcon />
                            </div>
                            <div className="icon">
                                <AccountCircleIcon />
                            </div>
                            <div className="cart icon">
                                <ShoppingCartIcon />
                                <span className='cart-number'>
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;