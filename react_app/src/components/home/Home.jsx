import './home.css';
import { ReactComponent as Timer } from "../../assets/img/timer.svg";
import { ReactComponent as Forkknife } from "../../assets/img/forkknife.svg";
import portrait from '../../assets/img/portrait.png';
import playlogo from "../../assets/img/playlogo.svg";



function Home () {
    return (
        <>
        <div className= 'leftside'>
            <h2>Spicy delicious<br/> chicken wings</h2>
            <p>There's nothing better than a crispy-on-the-outside, juicy-on-the-inside, 
                hot-as-heck <br/>chicken wing. Whether fried in sriracha or grilled with cayenne pepper, 
                these recipes for<br/> spicy wings are sure to set your senses aflame. Gather your hot sauce 
                and chiles, and<br/> make sure to have a cold beverage ready.</p>
        </div>
        <div className= 'icons'>
            <div className= 'lefticon'>
            <span><i><Timer className="timer" /></i></span>
            <span className='25min'>25 minutes</span>
            </div>
            <div className= 'righticon'>
            <span><i><Forkknife className="forkknife" /></i></span>
            <span className='lunch'>lunch</span>
            </div>
        </div>
        <div className= 'flex'>
        <div className='flex1'>
            <div>
            <img src={portrait} alt="Portrait." />
        </div>
        <div className= 'text'>
            <p>Robert H. Houston</p>
            <p>5 June 2022</p>
        </div>
        </div>
        <a href= "/recipes">
             <div className= 'textbutton'>
                <span>View Recipes</span>
                <span><img src={playlogo} alt="Playlogo." /></span>
             </div>
        </a>
        </div>
        </>
    )
}
export default Home;   