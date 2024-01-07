import { Link } from 'react-router-dom';
import MainMenu from "../mainMenu/MainMenu";
import logo from '../../assets/img/logo.png';
import { ReactComponent as Facebook } from "../../assets/img/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/img/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/img/instagram.svg";
import './footer.css';


function Footer () {
    return (
        <footer className= 'containerfooter'>
        <div className= 'logo'>
          <Link to="/"><img src={logo} alt="Foodieland." /></Link>
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
        </div>
        <MainMenu />
        <div className= 'vector'></div>
        <div className='lastsection'>
        <div className='webflow'>
          <p>© 2020 Flowbase. Powered by <span>Webflow</span></p>
        </div>
        <div className='social'>
          <a href="#"><Facebook className="facebook" width="25" height="25" /></a>
          <a href="#"><Twitter className="twitter" width="25" height="25" /></a>
          <a href="https://www.instagram.com/"><Instagram className="instagram" width="25" height="25" /></a>
      </div>
      </div>
      </footer>
    )
}

export default Footer;