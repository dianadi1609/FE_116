import { NavLink } from 'react-router-dom';
function mainMenu () {
    return (
    <nav>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="recipes">Recipes</NavLink></li>
            <li><NavLink to="blog">Blog</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            </ul>
        </nav>
    )
}
export default mainMenu;