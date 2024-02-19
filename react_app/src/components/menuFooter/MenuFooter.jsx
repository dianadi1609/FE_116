import { NavLink } from 'react-router-dom';
import './menufooter.css';

function menuFooter () {
    return (
    <nav className='footernav'>
            <ul className='footerul'>
            <li className='footerli'><NavLink to="/">Home</NavLink></li>
            <li className='footerli'><NavLink to="recipes">Recipes</NavLink></li>
            <li className='footerli'><NavLink to="blog">Blog</NavLink></li>
            <li className='footerli'><NavLink to="contact">Contact</NavLink></li>
            <li className='footerli'><NavLink to="about">About</NavLink></li>
            </ul>
        </nav>
    )
}
export default menuFooter;