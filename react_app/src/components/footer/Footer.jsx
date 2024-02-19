import { Link } from 'react-router-dom';
import MenuFooter from "../menuFooter/MenuFooter";
import logo from '../../assets/img/logo.png';
import { ReactComponent as Facebook } from "../../assets/img/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/img/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/img/instagram.svg";
import './footer.css';
const currentYear = new Date().getFullYear();


function Footer () {
    return (
        <footer className= 'containerfooter'>
        <div className= 'logo'>
          <Link to="/"><img src={logo} alt="Foodieland." /></Link>
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
        </div>
        <MenuFooter />
        <div className= 'vector'></div>
        <div className='lastsection'>
        <div className='webflow'>
          <p>© {currentYear} Flowbase. Powered by <span>Webflow</span></p>
        </div>
        <div className='socialmedia'>
          <a href="#"><Facebook className="facebook" width="25" height="25" /></a>
          <a href="#"><Twitter className="twitter" width="25" height="25" /></a>
          <a href="https://www.instagram.com/"><Instagram className="instagram" width="25" height="25" /></a>
      </div>
      </div>
      </footer>
    )
}

export default Footer;