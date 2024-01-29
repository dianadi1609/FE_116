import { NavLink } from 'react-router-dom';
import React, {useState} from "react";
import './mainmenu.css';
import { ReactComponent as Icon } from "../../assets/img/menuIcon.svg";


function MainMenu () {
    const [isOpen, setOpen] = useState();

    return (
        <>
        <nav className={`headernav ${isOpen ? "active" : ""}`}>
            <ul className='headerul'>
            <li className='headerli'><NavLink to="/">Home</NavLink></li>
            <li className='headerli'><NavLink to="recipes">Recipes</NavLink></li>
            <li className='headerli'><NavLink to="blog">Blog</NavLink></li>
            <li className='headerli'><NavLink to="contact">Contact</NavLink></li>
            <li className='headerli'><NavLink to="about">About</NavLink></li>
            </ul>
        </nav>
        <button className='header_button' onClick={() => setOpen(!isOpen)}>
            <Icon />
        </button>
        </>
    )
}
export default MainMenu;