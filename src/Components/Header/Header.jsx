import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <div className="item">
                    <select className='select-item'>
                        <option>USD</option>
                        <option>CAD</option>
                        <option>AUD</option>
                    </select>
                </div>
                <div className="item">
                    <Link className='link' to='/product/1'>Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to='/product/2'>Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to='/product/3'>Children</Link>
                </div>
            </div>
            <div className="center">
                <div className="item">
                    <Link className='link' to="./">Magic Purchase</Link>
                </div>
            </div>
            <div className="right">
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
                        <div className="icon">
                            <FavoriteBorderIcon />

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
    );
};

export default Header;