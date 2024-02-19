import { Link } from 'react-router-dom';
import MainMenu from "../mainMenu/MainMenu";
import logo from '../../assets/img/logo.png';
import { ReactComponent as Facebook } from "../../assets/img/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/img/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/img/instagram.svg";
import './header.css';

function Header () {
    return (
        <header className= 'container'>
        <div className= 'logo'>
      <Link to="/"><img src={logo} alt="Foodieland." /></Link>
      </div>
      <MainMenu />
      <div className= 'social'>
        <a href="#"><Facebook className="facebook" width="25" height="25" /></a>
        <a href="#"><Twitter className="twitter" width="25" height="25" /></a>
        <a href="https://www.instagram.com/"><Instagram className="instagram" width="25" height="25" /></a>
        </div> 
      </header>
    )
}

export default Header;