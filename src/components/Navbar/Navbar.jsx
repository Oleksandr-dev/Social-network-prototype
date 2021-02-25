import React from 'react';
import style from './Navbar.module.css';

console.log(style);

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a href="/dialogs">Message</a>
            </div >
            <div className={`${style.item} ${style.active}`}>
                <a>News</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Music</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;